import styled from 'styled-components'

export const Container = styled.i`
  svg {
    transition: 0.5s;
  }

  &:hover {
    svg {
      stroke: ${({ theme }) => theme.colors.neutrals.black['400']};
    }
  }
`
