import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(55)};
    margin-top: ${pxToRem(50)};
    margin-bottom: ${pxToRem(150)};
  }
`

export const FormContainer = styled.div`
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

export const Pomodoro = styled.div`
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

export const PomodoroButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(8)};
  width: 100%;
  padding: ${pxToRem(16)};
  border-radius: ${pxToRem(8)};
  color: ${({ theme }) => theme.colors.base.text.title};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  background-color: ${({ theme }) => theme.colors.brand.light};

  svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.brand.dark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
