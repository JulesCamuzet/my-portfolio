import styled from 'styled-components'

import { Paddings } from '../../../constants/paddings'
import { Theme } from '../../../hoc/Theme/types'
import { colors } from '../../../constants/colors'

export const StyledWrapper = styled.button<{
  $theme: Theme
  $disabled?: boolean
}>`
  width: fit-content;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: ${Paddings.P4} ${Paddings.P6};
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  border: solid 1px;
  border-color: ${(props) =>
    props.$theme === Theme.DARK ? colors.white[50] : colors.mainColor[600]};
  background-color: ${(props) =>
    props.$theme === Theme.LIGHT ? colors.white[50] : colors.mainColor[600]};
  position: relative;
  overflow: hidden;
  opacity: ${(props) => (props.$disabled ? '0.5' : '1')};
  transition: border-color.4s;

  ${(props) =>
    !props.$disabled &&
    `
    &:hover {
      border-color: ${
        props.$theme === Theme.LIGHT ? colors.white[50] : colors.mainColor[600]
      }
    }
    
    &:hover span {
    color: ${
      props.$theme === Theme.LIGHT ? colors.white[50] : colors.mainColor[600]
    };
  }`}

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

  ${(props) =>
    !props.$disabled &&
    `&:hover::after {
    transform: translateX(0);
  }`}
`

export const StyledText = styled.span<{ $theme: Theme }>`
  color: ${(props) =>
    props.$theme === Theme.DARK ? colors.white[50] : colors.mainColor[600]};
  position: relative;
  z-index: 50;
  font-family: MonumentExtended-Regular;
  transition: color.3s;
`
