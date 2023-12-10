import * as S from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../pages'

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <S.NewCycleForm>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        id="task"
        type="text"
        list="task-suggestion"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
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
        min={25}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmountInput', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </S.NewCycleForm>
  )
}
