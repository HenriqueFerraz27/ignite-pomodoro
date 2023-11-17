import * as Icon from 'phosphor-react'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Home>
      <form action="">
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
          />

          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </S.FormContainer>

        <S.Pomodoro>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.Pomodoro>

        <S.PomodoroButton type="submit">
          <Icon.Play weight="bold" /> Começar
        </S.PomodoroButton>
      </form>
    </S.Home>
  )
}
