import styled from 'styled-components'

import { Theme } from '../../../../../hoc/Theme/types'
import { colors } from '../../../../../constants/colors'

export const StyledWrapper = styled.div<{ $theme: Theme }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background-color: ${(props) =>
    props.$theme === Theme.DARK ? colors.mainColor[800] : colors.white[100]};
`
