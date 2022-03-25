import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

export function MainPage() {
  const userName = useSelector((state: RootState) => state.username.name)

  return (
    <div>
      <h2>{userName}</h2>
    </div>
  )
}
