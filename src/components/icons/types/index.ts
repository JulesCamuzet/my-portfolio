import { CSSProperties } from 'react'

export type IconProps = {
  width?: string
  height?: string
  color?: string
  style?: CSSProperties
  pointer?: boolean
  onClick?: () => void
}
