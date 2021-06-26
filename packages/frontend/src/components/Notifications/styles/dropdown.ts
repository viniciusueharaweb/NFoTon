import styled, { css } from 'styled-components'

interface DropdownProps {
  isActive: boolean
}

export const Dropdown = styled.nav<DropdownProps>`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.neutrals.white['400']};
  box-shadow: 0px 16px 64px -48px rgba(31, 47, 70, 0.4);
  padding: 40px 1rem;
  position: absolute;
  top: 50px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0%);
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  ${({ theme }) =>
    theme.variant === 'dark' &&
    css`
      background-color: ${({ theme }) => theme.colors.neutrals.black['500']};
    `};

  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible;
      opacity: 1;
      pointer-events: all;
    `}

  &:before {
    width: 32px;
    height: 12px;
    content: '';
    position: absolute;
    top: -12px;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0);
    background-image: url('/notification-badge.svg');
  }
`
