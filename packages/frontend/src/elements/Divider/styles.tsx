import styled, { css } from 'styled-components'
import { DividerProps } from '.'

const heights = {
  'light': 1,
  'thin': 2
}

export const Divider = styled.hr<DividerProps>`
  ${({ theme, height }) => css`
    border: 0;
    height: ${heights[height]}px;
    background: ${theme.colors.neutrals.white[600]};
  `}
`
