import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateFormdata = (values: any) => {
  const formData = new FormData()
  for (const key in values) {
    if (values.hasOwnProperty(key)) {
      const value = values[key];
      formData.append(key, value)
      console.log(value, key)
    }
  }

  return formData
}