import * as Icon from 'phosphor-react'
import * as S from './styles'
import { useForm } from 'react-hook-form'

export const Home = () => {
  const { register, handleSubmit, watch } = useForm()

  const handleCreateNewCycle = (data: any) => {
    console.log(data)
  }

  const task = watch('task')
  const minutesAmount = watch('minutesAmount')
  const isSubmitDisable = !task || !minutesAmount

  return (
    <S.Home>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <S.PomodoroButton type="submit" disabled={isSubmitDisable}>
          <Icon.Play weight="bold" /> Começar
        </S.PomodoroButton>
      </form>
    </S.Home>
  )
}
