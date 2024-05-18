'use client'

import { cn } from "@/lib/utils"
import React, { useEffect } from "react"
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

export function StepperPreviousButton ({
  size = 'default',
  variant = 'outline',
  type = 'button',
  preventDefault = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Button>, 'onClick'> & { preventDefault?: boolean }) {
  const prevStep = useStepperStore(state => state.prevStep)

  const prevStepHandler = !preventDefault ? prevStep : undefined

  return (
    <Button
      type={type}
      size={size}
      variant={variant}
      onClick={prevStepHandler}
      {...props}
    >
      Previous
    </Button>
  )
}

export function StepperNextButton ({
  size = 'default',
  variant = 'default',
  type = 'button',
  preventDefault = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Button>, 'onClick'> & { preventDefault?: boolean }) {
  const nextStep = useStepperStore(state => state.nextStep)

  const nextStepHandler = !preventDefault ? nextStep : undefined

  return (
    <Button
      type={type}
      size={size}
      variant={variant}
      onClick={nextStepHandler}
      {...props}
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