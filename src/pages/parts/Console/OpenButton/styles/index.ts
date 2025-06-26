import styled from 'styled-components'

import { Margins } from '../../../../../constants/margins'
import { Paddings } from '../../../../../constants/paddings'
import { colors } from '../../../../../constants/colors'

export const StyledWrapper = styled.div`
  position: fixed;
  bottom: ${Margins.M6};
  right: ${Margins.M6};
  z-index: 500;
`

export const StyledButton = styled.button`
  border: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: ${Paddings.P3};
  
  &:hover {
    background-color: ${colors.mainColor[100]};
  }
`
