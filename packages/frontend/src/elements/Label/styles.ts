import styled, { css, DefaultTheme } from 'styled-components'

import { LabelProps } from '.'

const variants = {
  solid: {
    default: (theme: DefaultTheme) => css`
      color: ${theme.colors.neutrals.white[500]};
      background-color: ${theme.colors.neutrals.black[500]};
    `,
    popular: (theme: DefaultTheme) => css`
      color: ${theme.colors.neutrals.white[500]};
      background-color: ${theme.colors.primary.green};
    `,
    new: (theme: DefaultTheme) => css`
      color: ${theme.colors.neutrals.white[500]};
      background-color: ${theme.colors.primary.red};
    `,
    featured: (theme: DefaultTheme) => css`
      color: ${theme.colors.neutrals.white[500]};
      background-color: ${theme.colors.primary.blue};
    `,
    soon: (theme: DefaultTheme) => css`
      color: ${theme.colors.neutrals.white[500]};
      background-color: ${theme.colors.primary.purple};
    `
  },
  outlined: {
    default: (theme: DefaultTheme) => css`
      color: ${theme.colors.neutrals.black[500]};
      border: 0.125rem solid ${theme.colors.neutrals.black[500]};
    `,
    popular: (theme: DefaultTheme) => css`
      color: ${theme.colors.primary.green};
      border: 0.125rem solid ${theme.colors.primary.green};
    `,
    new: (theme: DefaultTheme) => css`
      color: ${theme.colors.primary.red};
      border: 0.125rem solid ${theme.colors.primary.red};
    `,
    featured: (theme: DefaultTheme) => css`
      color: ${theme.colors.primary.blue};
      border: 0.125rem solid ${theme.colors.primary.blue};
    `,
    soon: (theme: DefaultTheme) => css`
      color: ${theme.colors.primary.purple};
      border: 0.125rem solid ${theme.colors.primary.purple};
    `,
  }
} as const

type WrapperProps = Pick<LabelProps, 'variant' | 'color'>

export const Wrapper = styled.div<WrapperProps>`
  width: fit-content;
  padding: ${({ variant }) => variant === 'solid' ? '0.375rem 0.5rem' : '0.25rem 0.375rem'};
  display: flex;
  border-radius: 0.25rem;
  box-sizing: border-box;

  ${({ theme, variant, color }) => variants[variant!][color!](theme)}

  & > span {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`
