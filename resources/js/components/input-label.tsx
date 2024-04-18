import React, { LabelHTMLAttributes } from 'react'

type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement> & { value?: string }

export const InputLabel: React.FC<InputLabelProps> = ({ value, className = '', children, ...props }) => {
  return (
    <label {...props} className={`block font-medium text-sm text-gray-700 ${className}`}>
      {value ? value : children}
    </label>
  )
}
