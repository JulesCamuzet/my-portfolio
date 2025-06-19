import styled from "styled-components"

export const StyledWrapper = styled.div`
  width: 100%;
`

export const StyledMapContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  border-radius: 16px;
  overflow: hidden;

  & a {
    display: none;
  }

  & button {
    border: none;
  }
`
