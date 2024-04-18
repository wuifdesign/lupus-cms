import React, { HTMLAttributes } from 'react'

type InputErrorProps = HTMLAttributes<HTMLParagraphElement> & {
  message?: string
}

export const InputError: React.FC<InputErrorProps> = ({ message, className = '', ...props }) => {
  return message ? (
    <p {...props} className={`text-sm text-red-600 ${className}`}>
      {message}
    </p>
  ) : null
}
