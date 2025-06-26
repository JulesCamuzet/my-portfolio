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
    props.$theme === Theme.DARK ? colors.white[100] : colors.mainColor[800]};

    @media all and (max-width: 768px) {
      font-size: ${fontSizes.XXL};
    }
`

export const StyledH2 = styled.h2<{ $bold?: boolean; $theme: Theme }>`
  width: 100%;
  font-size: ${fontSizes.XXL};
  margin-bottom: ${Margins.M6};
  font-family: ${(props) =>
    props.$bold ? 'MonumentExtended-Ultrabold' : 'MonumentExtended-Regular'};
  color: ${(props) =>
    props.$theme === Theme.DARK ? colors.white[200] : colors.mainColor[700]};

    @media all and (max-width: 768px) {
      font-size: ${fontSizes.XL};
    }
`

export const StyledH3 = styled.h3<{ $bold?: boolean; $theme: Theme }>`
  width: 100%;
  font-size: ${fontSizes.L};
  margin-bottom: ${Margins.M5};
  font-family: ${(props) =>
    props.$bold ? 'MonumentExtended-Ultrabold' : 'MonumentExtended-Regular'};
  color: ${(props) =>
    props.$theme === Theme.DARK ? colors.white[200] : colors.mainColor[700]};

    @media all and (max-width: 768px) {
      font-size: ${fontSizes.Medium};
    }
`
