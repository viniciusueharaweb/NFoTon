import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NotificationButton = styled.button`
  background-color: transparent;
  font-size: 0;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0 1rem;

  h2 {
    color: ${({ theme }) => theme.typography.color};
    font-size: 2rem;
    letter-spacing: -0.01em;
  }

  button {
    background-color: ${({ theme }) => theme.buttons.primary.backgroundColor};
    color: ${({ theme }) => theme.buttons.primary.color};
    padding: 12px 16px;
    font-size: 0.875rem;
    border-radius: 90px;
  }
`

interface DropdownProps {
  isActive: boolean
}

export const Dropdown = styled.nav<DropdownProps>`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.background.primary};
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
    background-color: ${({ theme }) => theme.notifications.hover};
  }

  > img {
    margin-right: 1.5rem;
    border-radius: 16px;
  }
`

export const NotificationTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const NotificationTitle = styled.span`
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.notifications.typography.color.title};
`
export const NotificationSubtitle = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.notifications.typography.color.subtitle};
`
export const NotificationDate = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.notifications.typography.color.date};
`
