import styled from 'styled-components'

import { Paddings } from '../../../constants/paddings'
import { Theme } from '../../../hoc/Theme/types'
import { colors } from '../../../constants/colors'
import { Margins } from '../../../constants/margins'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${Margins.M4};
  width: 100%;
`

export const StyledLabel = styled.label`
  width: 100%;
`

export const StyledInput = styled.input<{ $theme: Theme; $hasError: boolean }>`
  width: 100%;
  box-sizing: border-box;
  padding: ${Paddings.P3};
  border: none;
  border-radius: 4px;
  font-family: Roboto;
  font-size: 16px;
  color: ${(props) =>
    props.$theme === Theme.LIGHT ? colors.mainColor[700] : colors.white[200]};
  background-color: transparent;
  border: solid 1px;
  border-color: ${(props) =>
    props.$hasError
      ? '#FA5C19'
      : props.$theme === Theme.LIGHT
      ? colors.mainColor[600]
      : colors.mainColor[600]};

  &::placeholder {
    font-style: italic;
    opacity: 0.5;
    color: ${(props) =>
      props.$theme === Theme.LIGHT ? colors.mainColor[800] : colors.white[100]};
  }

  &:focus {
    outline: solid 2px ${colors.mainColor[200]};
  }
`

export const StyledErrorMessage = styled.span`
  font-size: 12px;
  color: #fa5c19;
  font-family: Roboto;
  margin-top: ${Margins.M1};
`
