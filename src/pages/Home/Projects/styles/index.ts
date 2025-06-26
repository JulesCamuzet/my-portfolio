import styled from "styled-components"

import { Margins } from "../../../../constants/margins"
import { Paddings } from "../../../../constants/paddings"

export const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Margins.M7};
  padding-top: ${Paddings.P5};
  box-sizing: border-box;

  @media all and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${Margins.M5};
  }
`
