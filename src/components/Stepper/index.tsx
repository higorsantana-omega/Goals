'use client'

import React, { useEffect } from 'react'

import { cn } from '@/lib/utils'
import { useStepperStore } from '@/stores/useStepperStore'

import { Button } from '../ui/button'

interface StepperProps {
  initialStep?: number
  steps: {
    label: string
    content: React.ReactNode
  }[]
}

export function Stepper({ initialStep = 0, steps }: StepperProps) {
  const { setCurrentStep, setStepsLength, currentStep } = useStepperStore((state) => state)

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
              'inline-block rounded-md px-3 py-2 text-sm',
              index === currentStep && 'bg-primary text-primary-foreground'
            )}
          >
            {String(index + 1).padStart(2, '0')}. {step.label}
          </li>
        ))}
      </ul>

      <div className="mt-10">{steps[currentStep].content}</div>
    </div>
  )
}

export function StepperPreviousButton({
  size = 'default',
  variant = 'outline',
  type = 'button',
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const prevStep = useStepperStore((state) => state.prevStep)

  return (
    <Button type={type} size={size} variant={variant} onClick={onClick ?? prevStep} {...props}>
      Previous
    </Button>
  )
}

export function StepperNextButton({
  size = 'default',
  variant = 'default',
  type = 'button',
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const nextStep = useStepperStore((state) => state.nextStep)

  return (
    <Button type={type} size={size} variant={variant} onClick={onClick ?? nextStep} {...props}>
      Next
    </Button>
  )
}

export function StepperFooter({ children }: { children: React.ReactNode }) {
  return <footer className="mt-6 flex justify-end gap-2">{children}</footer>
}
