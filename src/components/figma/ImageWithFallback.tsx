import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Crect x="10" y="10" width="60" height="60" rx="4" stroke="%23999" stroke-width="2" fill="none"/%3E%3Cpath d="M 10 50 L 30 30 L 70 70" stroke="%23999" stroke-width="2" fill="none"/%3E%3Ccircle cx="55" cy="30" r="5" fill="%23999"/%3E%3C/svg%3E'

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
