import styled, { css } from 'styled-components'

interface ContainerProps {
  isVertical?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  img {
    margin-right: 8px;
  }
  ${({ isVertical }) =>
    isVertical &&
    css`
      flex-direction: column;
      img {
        margin: 0;
      }
    `}
`

export const LogoName = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.typography.color};
`
