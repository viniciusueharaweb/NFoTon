import Image from 'next/image'
import { useRef, useState } from 'react'
import { RiNotificationLine } from 'react-icons/ri'
import { useTheme } from '../../hooks/useTheme'
import {
  Container,
  TitleContainer,
  Dropdown,
  Notification,
  NotificationButton,
  NotificationTextContent,
  NotificationTitle,
  NotificationSubtitle,
  NotificationDate,
} from './styles'

interface NotificationData {
  imgUrl: string
  title: string
  coinReceived: number
  coinType: string
  daysAgo: number
}

interface NotificationsProps {
  notifications: NotificationData[]
}

export default function Notifications({ notifications }: NotificationsProps) {
  const [isNotificationsActive, setIsNotificationsActive] = useState(false)
  const node = useRef<HTMLElement>(null)
  const {
    theme: {
      colors: { neutrals },
    },
  } = useTheme()

  const handleToggleNotifications = () => {
    setIsNotificationsActive(!isNotificationsActive)
  }

  return (
    <Container>
      <NotificationButton
        hasNotifications={notifications.length !== 0}
        onClick={() => handleToggleNotifications()}
      >
        <RiNotificationLine size={20} color={neutrals.gray['500']} />
      </NotificationButton>
      <Dropdown ref={node} isActive={isNotificationsActive}>
        <TitleContainer>
          <h2>Notification</h2>
          <button>See all</button>
        </TitleContainer>
        {/* Change index to some kind of uid */}
        {notifications.map(({ imgUrl, title, coinReceived, coinType, daysAgo }, index) => (
          <Notification key={index}>
            <Image width={64} height={64} src={imgUrl}></Image>
            <NotificationTextContent>
              <NotificationTitle>{title}</NotificationTitle>
              <NotificationSubtitle>{`${coinReceived} ${coinType}`}</NotificationSubtitle>
              <NotificationDate>{`${daysAgo} days ago`}</NotificationDate>
            </NotificationTextContent>
          </Notification>
        ))}
      </Dropdown>
    </Container>
  )
}
