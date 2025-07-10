import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { format, isSameDay, Locale } from 'date-fns'

export function formatEventDateTime(
  startTime: Date | string,
  endTime: Date | string,
  locale?: Locale
) {
  const start = new Date(startTime)
  const end = new Date(endTime)
  
  if (isSameDay(start, end)) {
    // Same day: "MMM d, yyyy, h:mm a - h:mm a"
    return `${format(start, 'MMM d,  h:mm a', { locale })} - ${format(end, 'h:mm a', { locale })}`
  } else {
    // Different days: "MMM d, yyyy, h:mm a - MMM d, yyyy, h:mm a"
    return `${format(start, 'MMM d,  h:mm a', { locale })} - ${format(end, 'MMM d, h:mm a', { locale })}`
  }
} 