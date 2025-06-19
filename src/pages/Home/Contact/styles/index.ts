import styled from 'styled-components'

import { Margins } from '../../../../constants/margins'

export const StyledContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 3fr;
  gap: ${Margins.M6};
`
