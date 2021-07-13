import styled, { css, DefaultTheme } from 'styled-components'
import { InputProps } from '.'

const variants = {
  default: (theme: DefaultTheme) => css`
    border-color: ${theme.variant === 'light'
      ? theme.colors.neutrals.white['600']
      : theme.colors.neutrals.gray['600']};
  `,
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.primary.red};
    background-color: ${theme.variant === 'light'
      ? theme.colors.neutrals.white['400']
      : theme.colors.neutrals.gray['600']};

    & ~ button {
      background-color: ${theme.colors.neutrals.gray['400']};
      margin-left: 14px;
    }
    & ~ svg {
      fill: ${theme.colors.neutrals.gray['500']};
      position: absolute;
      right: 50px;
    }
  `,
  sending: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.primary.blue};
  `,
  sent: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.primary.green};
    & ~ button {
      background-color: ${theme.colors.primary.green};
    }
  `,
} as const

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

type WrapperProps = Pick<InputProps, 'variant'>

export const InputWrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;

  & input {
    color: ${({ theme }) => theme.colors.neutrals.black['400']};
    ${({ theme }) =>
      theme.variant === 'dark' &&
      css`
        color: ${({ theme }) => theme.colors.neutrals.white['400']};
      `};
    font-size: 14px;
    line-height: 24px;
    width: 300px;
    background-color: transparent;
    outline: none;
    height: 48px;
    padding: 14px 58px 14px 16px;
    border: 2px solid white;
    border-radius: 50px;
    ${({ theme, variant }) => variant && variants[variant!](theme)}

    &:focus {
      border-color: ${({ theme, variant }) => variant === 'default' && theme.colors.primary.blue};
      &::placeholder {
        ${({ theme }) =>
          theme.variant === 'light' &&
          css`
            color: ${({ theme }) => theme.colors.neutrals.gray['400']};
          `};
      }
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutrals.gray['500']};
    }
  }
`

export const SubmitButton = styled.button<WrapperProps>`
  background-color: ${({ theme }) => theme.colors.primary.blue};
  position: absolute;
  right: 8px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ variant }) =>
    variant === 'error' &&
    css`
      &,
      & * {
        cursor: default;
      }
    `}
`

export const ErrorLabel = styled.div`
  width: 100%;
  position: absolute;
  top: 52px;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${({ theme }) => theme.colors.neutrals.white['400']};
  color: ${({ theme }) => theme.colors.primary.red};
  padding: 5px 16px;
  border-radius: 50px;
`
