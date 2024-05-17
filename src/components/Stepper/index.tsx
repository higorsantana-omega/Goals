'use client'

import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { Button } from "../ui/button"
import { useStepperStore } from "@/stores/useStepperStore"

interface StepperProps {
  initialStep?: number
  steps: {
    label: string
    content: React.ReactNode
  }[]
}

export function Stepper ({ initialStep = 0, steps }: StepperProps) {
  const { setCurrentStep, setStepsLength, currentStep } = useStepperStore(state => state)
  
  useEffect(() => {
    setCurrentStep(initialStep)
    setStepsLength(steps.length)
  }, [initialStep, setCurrentStep, setStepsLength, steps.length])

  return (
    <div>
      <ul className="space-x-6">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className={cn(
              "inline-block text-sm px-3 py-2 rounded-md",
              index === currentStep && 'bg-primary text-primary-foreground'
            )}
          >
            {String(index + 1).padStart(2, '0')}. {step.label}
          </li>
        ))}
      </ul>

      <div className="mt-10">
        {steps[currentStep].content}
      </div>
    </div>
  )
}

export function StepperPreviousButton () {
  const prevStep = useStepperStore(state => state.prevStep)

  return (
    <Button
      variant='outline'
      type="button"
      onClick={() => prevStep()}
    >
      Previous
    </Button>
  )
}

export function StepperNextButton () {
  const nextStep = useStepperStore(state => state.nextStep)

  return (
    <Button
      type="button"
      onClick={() => nextStep()}
    >
      Next
    </Button>
  )
}

export function StepperFooter ({ children }: { children: React.ReactNode }) {
  return (
    <footer className="flex justify-end mt-6 gap-2">
      {children}
    </footer>
  )
}