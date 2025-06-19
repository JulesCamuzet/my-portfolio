import styled from 'styled-components'

import { Theme } from '../../../hoc/Theme/types'
import { colors } from '../../../constants/colors'
import { Paddings } from '../../../constants/paddings'
import { Margins } from '../../../constants/margins'

export const StyledWrapper = styled.div<{ $theme: Theme }>`
  width: 100%;
  background-color: ${(props) =>
    props.$theme === Theme.LIGHT ? colors.white[50] : colors.mainColor[700]};
  border-radius: 10px;
  box-sizing: border-box;
  padding: ${Paddings.P5};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 25px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  flex-direction: column;
`

export const StyledMain = styled.div`
  width: 100%;
`

export const StyledImg = styled.img`
  border-radius: 6px;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-position: center;
  object-fit: cover;
  margin-bottom: ${Margins.M5};
`

export const StyledSkillsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: ${Margins.M3};
  flex-wrap: wrap;
  padding-top: ${Paddings.P2};
  margin-bottom: ${Margins.M4};
`

export const StyledLinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: ${Margins.M5};
  margin-top: auto;
`

export const StyledLinkContainer = styled.a`
  display: flex;
  gap: ${Margins.M1};
  display: flex;
  align-items: start;
  cursor: pointer;
  padding-top: ${Paddings.P3};
  transition: transform.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.97);
  }
`
