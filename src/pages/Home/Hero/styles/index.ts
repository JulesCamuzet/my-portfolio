import styled from 'styled-components'

import { Margins } from '../../../../constants/margins'
import { colors } from '../../../../constants/colors'
import { Theme } from '../../../../hoc/Theme/types'
import { Paddings } from '../../../../constants/paddings'

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  gap: ${Margins.M10};
  justify-content: space-between;
  position: relative;
  z-index: 100;

  @media all and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: ${Margins.M6};
  }
`

export const StyledTextPart = styled.div`
  flex-grow: 1;
`

export const StyledPicturePart = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  margin: 0 auto;
`

export const StyledImg = styled.img`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 1000px;
  box-shadow: 0 0 16px 16px white inset;

  box-shadow: 0 0 10px ${colors.mainColor[200]},
    0 0 20px ${colors.mainColor[400]}, 0 0 40px ${colors.mainColor[600]};
`

export const StyledNetworksContainer = styled.div<{ $theme: Theme }>`
  display: flex;
  align-items: center;
  gap: ${Margins.M7};
  border-radius: 4px;
  box-sizing: border-box;
  padding: ${Paddings.P4};
  background-color: ${(props) =>
    props.$theme === Theme.LIGHT ? colors.white[50] : colors.mainColor[950]};
  width: fit-content;
`
