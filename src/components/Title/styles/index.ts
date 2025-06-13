import styled from 'styled-components'

import { Theme } from '../../../hoc/Theme/types'
import { Margins } from '../../../constants/margins'
import { colors } from '../../../constants/colors'
import { fontSizes } from '../../../constants/fontSizes'

export const StyledH1 = styled.h1<{ $bold?: boolean; $theme: Theme }>`
  width: 100%;
  font-size: ${fontSizes.HUGE};
  margin-bottom: ${Margins.M7};
  font-family: ${(props) =>
    props.$bold ? 'MonumentExtended-Ultrabold' : 'MonumentExtended-Regular'};
  color: ${(props) =>
    props.$theme === Theme.DARK ? colors.white[100] : colors.blueViolet[800]};
`

export const StyledH2 = styled.h2<{ $bold?: boolean; $theme: Theme }>`
  width: 100%;
  font-size: ${fontSizes.XXL};
  margin-bottom: ${Margins.M6};
  font-family: ${(props) =>
    props.$bold ? 'MonumentExtended-Ultrabold' : 'MonumentExtended-Regular'};
  color: ${(props) =>
    props.$theme === Theme.DARK ? colors.white[200] : colors.blueViolet[700]};
`
