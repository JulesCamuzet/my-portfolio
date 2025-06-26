import React from 'react'

import { colors } from '../../constants/colors'
import { IconProps } from './types'

const ExternalLinkIcon = ({
  width = '32px',
  height = '32px',
  color = colors.mainColor[950],
  onClick,
  pointer,
  style,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      className="size-6"
      onClick={onClick}
      style={{ ...style, cursor: pointer ? 'pointer' : 'default' }}
      width={width}
      height={height}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  )
}

export default ExternalLinkIcon
