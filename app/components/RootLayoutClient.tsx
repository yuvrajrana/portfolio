"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  // detect route changes
  useEffect(() => {
    setLoading(true); // show loader when path changes
    const timeout = setTimeout(() => setLoading(false),50); // hide after short delay
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
