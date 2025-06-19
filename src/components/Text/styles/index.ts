import styled from 'styled-components'

import { fontSizes } from '../../../constants/fontSizes'
import { Margins } from '../../../constants/margins'
import { Theme } from '../../../hoc/Theme/types'
import { colors } from '../../../constants/colors'

export const StyledWrapper = styled.p<{
  $light?: boolean
  $bold?: boolean
  $big?: boolean
  $noMargin?: boolean
  $theme: Theme
}>`
  font-size: ${(props) => (props.$big ? fontSizes.Small : fontSizes.XS)};
  margin-bottom: ${(props) => (props.$noMargin ? '0' : Margins.M4)};
  color: ${(props) =>
    props.$theme === Theme.LIGHT
      ? props.$light
        ? colors.mainColor[500]
        : colors.mainColor[700]
      : props.$light
      ? colors.white[700]
      : colors.white[100]};
  font-family: 'Roboto';
  line-height: 1.61;
  font-weight: ${(props) => (props.$bold ? 700 : 300)};

  @media all and (max-width: 768px) {
    font-size: ${fontSizes.Small};
  }
`
