/* eslint-disable import/no-absolute-path */

import { NavLink } from 'react-router-dom'
import * as S from './styles'
import logoIgniteIcon from '/logos/ignite-icon.svg'
import * as Icon from 'phosphor-react'

export const Header = () => {
  return (
    <S.Header>
      <h1>
        <NavLink to="/" title="Ignite Pomodoro">
          <img src={logoIgniteIcon} alt="Ignite Pomodoro" />
        </NavLink>
      </h1>

      <nav>
        <ul>
          <li>
            <NavLink to="/" title="Pomodoro">
              <Icon.Timer />
            </NavLink>
          </li>

          <li>
            <a href="/history" title="Histórico">
              <Icon.Scroll />
            </a>
          </li>
        </ul>
      </nav>
    </S.Header>
  )
}

export default Header
