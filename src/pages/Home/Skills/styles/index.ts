import styled from 'styled-components'

import { Paddings } from '../../../../constants/paddings'
import { Margins } from '../../../../constants/margins'
import { Theme } from '../../../../hoc/Theme/types'
import { colors } from '../../../../constants/colors'

export const StyledSkillsCardsContainer = styled.div`
  display: grid;
  gap: ${Margins.M9};
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 100%;
  padding-top: ${Paddings.P5};

  @media all and (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${Margins.M8};
  }

  @media all and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${Margins.M7};
  }
`

export const StyledSkillCard = styled.div<{ $theme: Theme }>`
  box-sizing: border-box;
  padding: ${Paddings.P9} ${Paddings.P8};
  /* border: solid; */
  display: flex;
  flex-direction: column;
  gap: ${Margins.M8};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) =>
    props.$theme === Theme.LIGHT ? colors.white[50] : colors.mainColor[900]};

  box-shadow: 0 0 10px ${colors.mainColor[200]},
    0 0 20px ${colors.mainColor[400]}, 0 0 40px ${colors.mainColor[600]},
    0 0 80px ${colors.mainColor[800]};

  @media all and (max-width: 768px) {
    padding: ${Paddings.P7} ${Paddings.P6};
  }
`

export const StyledSkillPicture = styled.img<{ $index: number }>`
  @keyframes floating {
    0% {
      transform: translateY(-6px);
    }
    50% {
      transform: translateY(6px);
    }
    100% {
      transform: translateY(-6px);
    }
  }

  animation: floating ${(props) => props.$index * 0.2 + 2 + 's'} ease-in-out 0s
    infinite;
  width: 100%;
`
