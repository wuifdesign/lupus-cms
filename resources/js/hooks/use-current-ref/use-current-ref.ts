import { MutableRefObject, useRef } from 'react'

/**
 * Get ref of current value, replaced each rerender.
 */
export const useCurrentRef = <T>(value: T): MutableRefObject<T> => {
  const ref = useRef(value)
  ref.current = value
  return ref
}
