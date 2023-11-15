import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${pxToRem(40)};

  h1 a img {
    height: ${pxToRem(40)};
  }

  nav ul {
    display: flex;
    gap: ${pxToRem(5)};

    a {
      padding: ${pxToRem(12.5)};
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
        width: ${pxToRem(25)};
        height: ${pxToRem(25)};
      }
    }
  }
`
