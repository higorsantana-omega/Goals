import { create, createStore } from "zustand";

export type StepperState = {
  stepsLength: number
  currentStep: number
}

export type StepperActions = {
  setStepsLength: (stepsLength: number) => void
  setCurrentStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
}

export type StepperStore = StepperState & StepperActions

export const defaultInitState: Partial<StepperStore> = {
  stepsLength: 0,
  currentStep: 0
}

export const useStepperStore = create<StepperStore>(set => ({
  ...defaultInitState as StepperStore,
  setStepsLength: (stepsLength: number) => set({ stepsLength }),
  setCurrentStep: (step: number) => set({ currentStep: step }),
  nextStep: () => set(state => ({ ...state, currentStep: Math.min(state.currentStep + 1) })),
  prevStep: () => set(state => ({ ...state, currentStep: Math.max(0, state.currentStep - 1) }))
}))
