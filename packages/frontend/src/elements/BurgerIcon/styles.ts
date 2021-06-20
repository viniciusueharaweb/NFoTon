import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  font-size: 0;
  svg {
    transition: 0.5s;
  }
  &:hover {
    svg {
      stroke: ${({ theme }) => theme.background.hover};
    }
  }
`
