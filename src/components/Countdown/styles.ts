import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const Countdown = styled.div`
  * {
    font-family: ${({ theme }) => theme.typography.family.robotoMono};
    font-size: ${({ theme }) => theme.typography.size['2xl']};
  }

  display: flex;
  gap: ${pxToRem(16)};
  color: ${({ theme }) => theme.colors.base.text.title};

  span {
    padding: 0 ${pxToRem(16)};
    background-color: ${({ theme }) => theme.colors.base.shape.secondary};
    border-radius: ${pxToRem(8)};
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.brand.light};
  overflow: hidden;
`
