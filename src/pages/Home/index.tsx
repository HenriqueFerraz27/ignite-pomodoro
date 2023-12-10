import * as S from './styles'
import * as Icon from 'phosphor-react'
import * as zod from 'zod'
import { createContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Countdown, NewCycleForm } from '../../components'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextData {
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  setAmountSecondsPassed: (seconds: React.SetStateAction<number>) => void
  markCurrentCycleAsFineshed: () => void
}

export const CyclesContext = createContext({} as CyclesContextData)

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1),
  minutesAmountInput: zod
    .number()
    .min(0.15, 'O número deve ser maior ou igual a 5')
    .max(60, 'O número deve ser menor ou igual a 60'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const Home = () => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const NewCycleFormContext = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmountInput: 25,
    },
  })

  const { handleSubmit, watch, reset } = NewCycleFormContext

  const task = watch('task')
  const minutesAmountInput = watch('minutesAmountInput')
  const isSubmitDisable = !task || !minutesAmountInput

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmountInput,
      startDate: new Date(),
    }

    setCycles(state => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  const handleInterruptCycle = () => {
    setCycles(state =>
      state.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  const markCurrentCycleAsFineshed = () => {
    setCycles(state =>
      state.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  return (
    <S.Home>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <CyclesContext.Provider
          value={{
            activeCycle,
            markCurrentCycleAsFineshed,
            amountSecondsPassed,
            setAmountSecondsPassed,
          }}
        >
          <FormProvider {...NewCycleFormContext}>
            <NewCycleForm />
          </FormProvider>

          <Countdown />
        </CyclesContext.Provider>

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
