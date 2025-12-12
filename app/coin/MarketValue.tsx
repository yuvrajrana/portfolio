'use client'

import React, { useEffect, useState } from 'react'

type MarketData = {
  price_change_percentage_7d: number
  price_change_percentage_30d: number
  price_change_percentage_60d: number
  price_change_percentage_200d: number
  price_change_percentage_1y: number
}

export default function PriceChangeTracker() {
  const [data, setData] = useState<MarketData | null>(null)
  const [selectedRange, setSelectedRange] = useState<'7d' | '30d' | '60d' | '200d' | '1y'>('7d')

  useEffect(() => {
    // Fetch your API endpoint (or local JSON)
    fetch('/api/crypto') // replace with your actual endpoint
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  if (!data) return <div>Loading...</div>

  const ranges: { label: string; key: keyof MarketData }[] = [
    { label: '7 Days', key: 'price_change_percentage_7d' },
    { label: '30 Days', key: 'price_change_percentage_30d' },
    { label: '60 Days', key: 'price_change_percentage_60d' },
    { label: '200 Days', key: 'price_change_percentage_200d' },
    { label: '1 Year', key: 'price_change_percentage_1y' },
  ]

  return (
    <div className="p-4 bg-white shadow-md rounded-md w-80">
      <h2 className="text-lg font-semibold mb-2">Price Change Overview</h2>
      <div className="flex flex-col gap-2">
        {ranges.map((range) => {
          const value = data[range.key]
          const isSelected = selectedRange === range.key.split('_').pop() // crude match for 7d, 30d etc
          return (
            <button
              key={range.key}
              onClick={() => setSelectedRange(range.key.split('_').pop() as any)}
              className={`flex justify-between w-full p-2 rounded-md ${
                isSelected ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
            >
              <span>{range.label}</span>
              <span className={`${value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {value.toFixed(2)}%
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
