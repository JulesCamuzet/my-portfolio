import styled from 'styled-components'

import { fontSizes } from '../../../constants/fontSizes'
import { Margins } from '../../../constants/margins'
import { Theme } from '../../../hoc/Theme/types'
import { colors } from '../../../constants/colors'

export const StyledWrapper = styled.p<{
  $light?: boolean
  $bold?: boolean
  $big?: boolean
  $theme: Theme
}>`
  font-size: ${(props) => (props.$big ? fontSizes.Medium : fontSizes.Small)};
  margin-bottom: ${Margins.M4};
  color: ${(props) =>
    props.$theme === Theme.LIGHT
      ? props.$light
        ? colors.blueViolet[500]
        : colors.blueViolet[700]
      : props.$light
      ? colors.white[700]
      : colors.white[100]};
  font-family: ${(props) =>
    props.$bold ? 'MonumentExtended-Ultrabold' : 'MonumentExtended-Regular'};
  line-height: 1.61;
`
