import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.neutrals.white['400']};
  color: ${({ theme: { colors } }) => colors.neutrals.black['400']};
  ${({ theme }) =>
    theme.variant === 'dark' &&
    css`
      background-color: ${theme.colors.neutrals.black['400']};
      color: ${theme.colors.neutrals.white['400']};
    `};
`
