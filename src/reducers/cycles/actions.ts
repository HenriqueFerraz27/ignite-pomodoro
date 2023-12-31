import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export const addNewCycleAction = (newCycle: Cycle) => {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export const interruptCycleAction = () => {
  return {
    type: ActionTypes.INTERRUPT_CYCLE,
  }
}

export const markCurrentCycleAsFineshedAction = () => {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}