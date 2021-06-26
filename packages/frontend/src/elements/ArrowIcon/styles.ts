import styled, { css } from 'styled-components'
import { ArrowIconProps } from '.'

const variants = {
  right: 0,
  down: 90,
  left: 180,
  up: 270,
}

export const Container = styled.button<ArrowIconProps>`
  background-color: transparent;
  font-size: 0;
  ${({ variant }) =>
    css`
      svg {
        transform: rotate(${variants[variant!]}deg);
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      svg {
        fill: ${({ theme }) => theme.colors.neutrals.white['600']};
      }
      cursor: default;
    `}
`