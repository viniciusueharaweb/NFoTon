import styled, { css } from 'styled-components'

export const Notification = styled.button`
  display: flex;
  height: 6.25rem;
  align-items: center;
  background-color: transparent;
  border-radius: 16px;
  transition: 0.5s;
  padding: 0 1rem;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    background-color: #3772ff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutrals.white['500']};
    ${({ theme }) =>
      theme.variant === 'dark' &&
      css`
        background-color: ${({ theme }) => theme.colors.neutrals.black['400']};
      `};
  }

  > img {
    margin-right: 1.5rem;
    border-radius: 16px;
  }
`
