import Hello from '../components/Hello'
import { useTheme } from '../hooks/useTheme'

export default function IndexPage() {
  const { themeLoading } = useTheme()
  return !themeLoading && <Hello />
}
