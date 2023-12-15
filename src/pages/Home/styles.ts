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

export const BaseCountdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(8)};
  width: 100%;
  padding: ${pxToRem(16)};
  border-radius: ${pxToRem(8)};
  color: ${({ theme }) => theme.colors.base.text.title};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme.colors.brand.light};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.brand.dark};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme.colors.feedback.interrupt.light};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.feedback.interrupt.dark};
  }
`
