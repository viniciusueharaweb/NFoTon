import styled from 'styled-components'

export const Container = styled.i`
  svg {
    transition: 0.5s;
  }

  &:hover {
    svg {
      stroke: ${({ theme }) => theme.background.hover};
    }
  }
`
