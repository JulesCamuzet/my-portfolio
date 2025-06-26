import styled from 'styled-components'

import { Paddings } from '../../../../../../constants/paddings'
import { colors } from '../../../../../../constants/colors'
import { Theme } from '../../../../../../hoc/Theme/types'

export const StyledWrapper = styled.div<{ $theme: Theme }>`
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }

  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(calc(-100% - 16px));
  background-color: ${(props) =>
    props.$theme === Theme.LIGHT ? colors.white[50] : colors.white[900]};
  box-sizing: border-box;
  padding: ${Paddings.P3};
  border-radius: 4px;
  width: 300px;
  animation-name: appear;
  animation-duration: .4s;
  animation-delay: 2s;
  opacity: 0;
  animation-fill-mode: forwards;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    bottom: 0;
    right: 24px;
    transform: translateY(5px) translateX(50%) rotate(45deg);
    background-color: ${(props) =>
      props.$theme === Theme.LIGHT ? colors.white[50] : colors.white[900]};
    transition: .4s;
  }
`
