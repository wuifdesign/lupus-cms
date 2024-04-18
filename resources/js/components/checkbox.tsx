import React, { InputHTMLAttributes } from 'react'

export const Checkbox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => {
  return (
    <input
      {...props}
      type="checkbox"
      className={`rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ${className}`}
    />
  )
}
