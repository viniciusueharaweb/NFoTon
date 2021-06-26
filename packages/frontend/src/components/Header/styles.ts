import styled from 'styled-components'

export const Container = styled.header`
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid transparent;
  transition: 0.5s;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: 5rem;
    margin-top: 0;
    border-color: ${({ theme }) => theme.colors.neutrals.white['600']};
  }
`

export const BurgerButton = styled.button`
  background-color: transparent;
  font-size: 0;
`
