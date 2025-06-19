import styled from 'styled-components'

import { Margins } from '../../../../../constants/margins'
import { Theme } from '../../../../../hoc/Theme/types'
import { colors } from '../../../../../constants/colors'
import { Paddings } from '../../../../../constants/paddings'

export const StyledSkillsSection = styled.div<{ $theme: Theme }>`
  box-sizing: border-box;
  border-radius: 12px;
  border-color: ${(props) =>
    props.$theme === Theme.LIGHT ? colors.white[50] : colors.mainColor[950]};
  padding: ${Paddings.P6};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  backdrop-filter: blur(10px);
  margin-top: ${Margins.M8};
  background-color: ${props => props.$theme === Theme.LIGHT ? colors.white[100] : colors.mainColor[700]};
`

export const StyledSkillsCardsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${Margins.M7};
  flex-wrap: wrap;
  padding-top: ${Paddings.P6};

  @media all and (max-width: 768px) {
    justify-content: center;
  }
`

export const StyledSkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Margins.M6};
`

export const StyledSkillImg = styled.img`
  height: 120px;

  @media all and (max-width: 768px) {
    height: 60px;
  }
`
