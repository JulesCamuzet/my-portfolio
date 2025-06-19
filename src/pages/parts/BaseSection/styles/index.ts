import styled from 'styled-components'

import { maxWidth } from '../../../../constants/width'
import { Paddings } from '../../../../constants/paddings'

export const StyledWrapper = styled.div<{
  $background?: string
  $isFirst?: boolean
  $tall?: boolean
}>`
  background: ${(props) => props.$background};
  box-sizing: border-box;
  padding: ${(props) => (props.$tall ? Paddings.P9 : Paddings.P8)} ${Paddings.P5};
  width: 100%;
  position: relative;

  @media all and (max-width: 768px) {
    padding: ${(props) => (props.$tall ? Paddings.P8 : Paddings.P5)} ${Paddings.P5};
  }
`

export const StyledContent = styled.div`
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;
`
