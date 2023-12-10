import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const NewCycleForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(8)};
  width: 100%;
  color: ${({ theme }) => theme.colors.base.text.title};

  * {
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`

export const BaseInput = styled.input`
  height: ${pxToRem(40)};
  padding: 0 ${pxToRem(8)};
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.base.text.placeholder};
  transition: all 0.1s;
  color: ${({ theme }) => theme.colors.base.text.title};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.brand.light};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.base.text.placeholder};
  }
`

export const TaskInput = styled(BaseInput)`
  min-width: ${pxToRem(270)};
`

export const MinutesAmountInput = styled(BaseInput)`
  width: ${pxToRem(75)};
`
