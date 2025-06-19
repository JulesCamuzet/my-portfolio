import styled from 'styled-components'

import { Paddings } from '../../../constants/paddings'
import { Theme } from '../../../hoc/Theme/types'
import { colors } from '../../../constants/colors'

export const StyledWrapper = styled.button<{ $theme: Theme }>`
  width: fit-content;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: ${Paddings.P4} ${Paddings.P6};
  cursor: pointer;
  border: solid 1px;
  border-color: ${(props) =>
    props.$theme === Theme.DARK ? colors.white[50] : colors.mainColor[600]};
  background-color: ${(props) =>
    props.$theme === Theme.LIGHT ? colors.white[50] : colors.mainColor[600]};
  position: relative;
  overflow: hidden;

  &:hover span {
    color: ${(props) =>
      props.$theme === Theme.LIGHT ? colors.white[50] : colors.mainColor[600]};
  }

  &::after {
    display: block;
    content: '';
    background-color: ${(props) =>
      props.$theme === Theme.DARK ? colors.white[50] : colors.mainColor[600]};
    transition: transform.3s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    transform: translateX(-100%);
    border-radius: 25px;
  }

  &:hover::after {
    transform: translateX(0);
  }
`

export const StyledText = styled.span<{ $theme: Theme }>`
  color: ${(props) =>
    props.$theme === Theme.DARK ? colors.white[50] : colors.mainColor[600]};
  position: relative;
  z-index: 50;
  font-family: MonumentExtended-Regular;
  transition: color.3s;
`
