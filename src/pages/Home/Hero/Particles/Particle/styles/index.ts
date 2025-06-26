import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-200px) translateX(100px); }
  100% { transform: translateY(0) translateX(0); }
`

export const StyledWrapper = styled.div<{
  $color: string
  $size: number
  $top: number
  $left: number
}>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  aspect-ratio: 1 / 1;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;
  background: ${({ $color }) => $color};
  border-radius: 50%;
  filter: blur(5px);
  opacity: 0.6;
  animation: ${float} ${({ $size }) => 10 + ($size % 6)}s ease-in-out infinite;
`
