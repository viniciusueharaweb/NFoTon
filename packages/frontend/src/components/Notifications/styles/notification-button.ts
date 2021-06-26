import styled from 'styled-components'

interface NotificationButtonProps {
  hasNotifications?: boolean
}

export const NotificationButton = styled.button<NotificationButtonProps>`
  background-color: transparent;
  font-size: 0;
  position: relative;
  transition: 0.5s;

  &:after {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    content: '';
    display: block;
    position: absolute;
    right: -10px;
    top: -10px;
    background-color: ${({ theme, hasNotifications = false }) =>
      hasNotifications ? theme.colors.primary.green : 'transparent'};
    transition: 0.5s;
  }
`
