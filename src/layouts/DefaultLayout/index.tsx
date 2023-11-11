import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

import * as S from './styles'

function DefaultLayout() {
  return (
    <S.DefaultLayout>
      <Header />
      <Outlet />
    </S.DefaultLayout>
  )
}

export default DefaultLayout
