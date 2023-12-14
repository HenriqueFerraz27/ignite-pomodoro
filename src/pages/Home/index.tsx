import * as S from './styles'
import * as Icon from 'phosphor-react'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Countdown, NewCycleForm } from '../../components'
import { CyclesContext } from '../../contexts'
import { useContext } from 'react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1),
  minutesAmountInput: zod
    .number()
    .min(0.15, 'O número deve ser maior ou igual a 5')
    .max(60, 'O número deve ser menor ou igual a 60'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const Home = () => {
  const { activeCycle, createNewCycle, handleInterruptCycle } =
    useContext(CyclesContext)

  const NewCycleFormContext = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmountInput: 25,
    },
  })

  const { handleSubmit, watch, reset } = NewCycleFormContext

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const minutesAmountInput = watch('minutesAmountInput')
  const isSubmitDisable = !task || !minutesAmountInput

  return (
    <S.Home>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...NewCycleFormContext}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <S.StopCountdownButton type="button" onClick={handleInterruptCycle}>
            <Icon.HandPalm weight="bold" /> Interromper
          </S.StopCountdownButton>
        ) : (
          <S.StartCountdownButton type="submit" disabled={isSubmitDisable}>
            <Icon.Play weight="bold" /> Começar
          </S.StartCountdownButton>
        )}
      </form>
    </S.Home>
  )
}
