import styled from 'styled-components'

import { Margins } from '../../../constants/margins'
import { colors } from '../../../constants/colors'
import { Theme } from '../../../hoc/Theme/types'

export const StyledWrapper = styled.div<{ $theme: Theme }>`
  position: fixed;
  top: ${Margins.M5};
  right: ${Margins.M5};
  box-sizing: border-box;
  width: 90px;
  height: 40px;
  z-index: 500;
  outline: solid ${colors.white[50]} 3px;
  border-radius: 25px;
  background-color: ${colors.white[50]};
  transition: transform.2s;
  cursor: pointer;
  box-shadow: ${(props) =>
      props.$theme === Theme.DARK ? colors.white[50] : colors.mainColor[800]}
    0px 0px 4px 4px;

  &:active {
    transform: scale(0.9);
  }
`

export const StyledCircle = styled.div<{ $theme: Theme; $width: number }>`
  position: absolute;
  left: ${(props) => (props.$theme === Theme.LIGHT ? '0' : 'unset')};
  right: ${(props) => (props.$theme === Theme.LIGHT ? 'unset' : '0')};
  top: 0;
  background-color: ${colors.mainColor[500]};
  height: 40px;
  transition: width.2s;
  width: ${(props) => props.$width}px;
  border-radius: 32.5px;
  z-index: 100;
`
