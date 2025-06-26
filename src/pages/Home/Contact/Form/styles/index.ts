import styled from 'styled-components'

import { Paddings } from '../../../../../constants/paddings'
import { Theme } from '../../../../../hoc/Theme/types'
import { Margins } from '../../../../../constants/margins'
import { colors } from '../../../../../constants/colors'

export const StyledWrapper = styled.form<{ $theme: Theme }>`
  box-sizing: border-box;
  padding: ${Paddings.P6};
  border-radius: 12px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(15px);
  height: fit-content;
`

export const StyledRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${Margins.M6};
`

export const StyledErrorMessage = styled.span<{ $theme: Theme }>`
  color: red;
  font-size: 18px;
  font-family: 'Roboto';
  margin-top: ${Margins.M4};
  font-weight: 400;
  color: '#FA5C19';
`

export const StyledSuccessMessage = styled.span<{ $theme: Theme }>`
  color: ${(props) =>
    props.$theme === Theme.LIGHT
      ? colors.mainColor[600]
      : colors.mainColor[200]};
  font-size: 18px;
  font-family: 'Roboto';
  margin-top: ${Margins.M4};
  font-weight: 400;
`
