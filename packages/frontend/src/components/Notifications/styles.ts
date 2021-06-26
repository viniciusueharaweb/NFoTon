import styled, { css } from 'styled-components'
import { Dropdown } from './styles/dropdown'
import { NotificationButton } from './styles/notification-button'
import { Notification } from './styles/notification'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0 1rem;

  h2 {
    color: ${({ theme }) => theme.colors.neutrals.black['400']};
    font-size: 2rem;
    letter-spacing: -0.01em;
    transition: 0.5s;
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary.blue};
    color: ${({ theme }) => theme.colors.neutrals.white['400']};
    padding: 12px 16px;
    font-size: 0.875rem;
    border-radius: 90px;
    transition: 0.5s;
  }

  ${({ theme }) =>
    theme.variant === 'dark' &&
    css`
      h2 {
        color: ${({ theme }) => theme.colors.neutrals.white['400']};
      }
    `};
`

const NotificationTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const NotificationTitle = styled.span`
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.neutrals.black['500']};
  ${({ theme }) =>
    theme.variant === 'dark' &&
    css`
      color: ${({ theme }) => theme.colors.neutrals.white['400']};
    `};
`

const NotificationSubtitle = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.neutrals.gray['600']};
  ${({ theme }) =>
    theme.variant === 'dark' &&
    css`
      color: ${({ theme }) => theme.colors.neutrals.white['400']};
    `};
`

const NotificationDate = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.neutrals.gray['500']};
  ${({ theme }) =>
    theme.variant === 'dark' &&
    css`
      color: ${({ theme }) => theme.colors.neutrals.gray['500']};
    `};
`

export {
  Dropdown,
  NotificationButton,
  TitleContainer,
  Notification,
  NotificationTextContent,
  NotificationTitle,
  NotificationSubtitle,
  NotificationDate,
}
