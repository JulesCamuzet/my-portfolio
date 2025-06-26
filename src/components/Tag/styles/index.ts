import styled from "styled-components"

import { Theme } from "../../../hoc/Theme/types"
import { colors } from "../../../constants/colors"
import { Paddings } from "../../../constants/paddings"
import { fontSizes } from "../../../constants/fontSizes"

export const StyledWrapper = styled.span<{ $theme: Theme }>`
  font-family: MonumentExtended-Regular;
  background-color: ${props => props.$theme === Theme.LIGHT ? colors.white[50] : colors.mainColor[800]};
  color: ${props => props.$theme === Theme.LIGHT ? colors.mainColor[600] : colors.white[100]};
  border: solid 1px;
  border-color: ${props => props.$theme === Theme.LIGHT ? colors.mainColor[600] : colors.mainColor[600]};
  box-sizing: border-box;
  padding: ${Paddings.P2} ${Paddings.P4};
  border-radius: 100px;
  font-size: ${fontSizes.XXS};
`
