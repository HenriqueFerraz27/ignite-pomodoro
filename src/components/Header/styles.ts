import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${pxToRem(40)};

  h1 a img {
    width: 2.5rem;
  }

  nav ul {
    display: flex;
    gap: 0.3125rem;

    a {
      padding: 0.78125rem;
      color: ${({ theme }) => theme.colors.base.text.title};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: all 0.1s;

      &:hover {
        color: ${({ theme }) => theme.colors.brand.light};
        border-bottom: 3px solid ${({ theme }) => theme.colors.brand.light};
      }

      &.active {
        color: ${({ theme }) => theme.colors.brand.light};
      }

      svg {
        width: 1.5625rem;
        height: 1.5625rem;
      }
    }
  }
`
