import { forwardRef, InputHTMLAttributes, useEffect, useImperativeHandle, useRef } from 'react'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isFocused?: boolean
}

export type TextInputHandles = {
  focus: () => void
}

export const TextInput = forwardRef<TextInputHandles, TextInputProps>(
  ({ type = 'text', className = '', isFocused = false, ...props }, ref) => {
    const localRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
      focus: () => localRef.current?.focus(),
    }))

    useEffect(() => {
      if (isFocused) {
        localRef.current?.focus()
      }
    }, [isFocused])

    return (
      <input
        {...props}
        type={type}
        className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ${className}`}
        ref={localRef}
      />
    )
  },
)
TextInput.displayName = 'TextInput'
