import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.typography.color};
`
