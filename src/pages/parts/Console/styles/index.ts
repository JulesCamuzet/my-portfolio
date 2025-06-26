import styled from 'styled-components'

import { Theme } from '../../../../hoc/Theme/types'
import { colors } from '../../../../constants/colors'
import { Paddings } from '../../../../constants/paddings'

export const StyledWrapper = styled.div`
`

export const StyledConsole = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 200;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translateY(${(props) => (props.$isOpen ? '0' : 'calc(100%)')});
  display: flex;
  flex-direction: column;
`

export const StyledContent = styled.label<{ $theme: Theme }>`
  width: 100%;
  flex-grow: 1;
  background-color: ${(props) =>
    props.$theme === Theme.LIGHT ? colors.white[100] : colors.mainColor[950]};
  box-sizing: border-box;
  padding: ${Paddings.P3};
  color: ${(props) =>
    props.$theme === Theme.LIGHT ? colors.mainColor[800] : colors.white[50]};
  overflow: scroll;

  & a:hover {
    text-decoration: underline;
  }
`

export const StyledHiddenInput = styled.input`
  position: absolute;
  z-index: -1000;

  &:focus {
    outline: none;
  }
`

export const StyledInputDisplay = styled.span<{
  $isCursorVisible: boolean
  $cursorIndex: number
  $theme: Theme
}>`
  width: fit-content;
  color: ${(props) =>
    props.$theme === Theme.LIGHT ? colors.mainColor[800] : colors.white[50]};
  display: inline-block;
  font-family: 'Roboto Mono';
  font-size: 16px;

  &::after {
    @keyframes blink {
      0% {
        opacity: 0.5;
      }
      49% {
        opacity: 0.5;
      }
      50% {
        opacity: 0;
      }
      99% {
        opacity: 0;
      }
      100% {
        opacity: 0.5;
      }
    }

    display: inline-block;
    content: '';
    width: calc(16px * 0.6);
    height: 16px;
    background-color: ${(props) =>
      props.$theme === Theme.LIGHT ? colors.mainColor[800] : colors.white[50]};
    margin-left: 2px;
    transform: translateY(2px);
    animation-duration: 1s;
    animation-name: blink;
    animation-iteration-count: infinite;
    transition: none;
    display: ${(props) => (props.$isCursorVisible ? 'inline-block' : 'none')};
    transform: translateX(calc(100% * ${(props) => props.$cursorIndex} - 2px))
      translateY(2px);
  }
`

export const StyledOutput = styled.div`
  font-family: 'Roboto Mono';
`
