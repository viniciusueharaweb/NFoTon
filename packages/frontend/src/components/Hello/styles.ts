import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.typography.color};
`
