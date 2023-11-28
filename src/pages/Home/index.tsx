import * as Icon from 'phosphor-react'
import * as S from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1),
  minutesAmount: zod
    .number()
    .min(5, 'O número deve ser maior ou igual a 5')
    .max(60, 'O número deve ser menor ou igual a 60'),
})

export const Home = () => {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

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
            list="task-suggestion"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Projeto 5" />
          </datalist>

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
