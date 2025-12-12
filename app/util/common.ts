export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
}

export const getLocalStorage = (key: string): any | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  } else {
    return null;
  }
}

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
}   