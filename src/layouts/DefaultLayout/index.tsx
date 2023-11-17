import * as S from './styles'
import { Header } from '../../components'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <S.DefaultLayout>
      <Header />
      <Outlet />
    </S.DefaultLayout>
  )
}
