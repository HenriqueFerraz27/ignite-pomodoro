import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
import {
  addNewCycleAction,
  interruptCycleAction,
  markCurrentCycleAsFineshedAction,
} from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmountInput: number
}

interface CyclesContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  setAmountSecondsPassed: (seconds: React.SetStateAction<number>) => void
  markCurrentCycleAsFineshed: () => void
  handleInterruptCycle: () => void
  createNewCycle: (data: CreateCycleData) => void
}

export const CyclesContext = createContext({} as CyclesContextData)

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const cyclesStateInitial = {
    cycles: [],
    activeCycleId: null,
  }

  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    cyclesStateInitial,
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-pomodoro:cycles-state-1.0.0',
      )

      return storedStateAsJSON
        ? JSON.parse(storedStateAsJSON)
        : cyclesStateInitial
    },
  )
  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    return activeCycle
      ? differenceInSeconds(new Date(), new Date(activeCycle.startDate))
      : 0
  })

  useEffect(() => {
    localStorage.setItem(
      '@ignite-pomodoro:cycles-state-1.0.0',
      JSON.stringify(cyclesState),
    )
  }, [cyclesState])

  const createNewCycle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmountInput,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  const handleInterruptCycle = () => {
    dispatch(interruptCycleAction())
  }

  const markCurrentCycleAsFineshed = () => {
    dispatch(markCurrentCycleAsFineshedAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        amountSecondsPassed,
        setAmountSecondsPassed,
        markCurrentCycleAsFineshed,
        handleInterruptCycle,
        createNewCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
