'use client'

import { cn } from "@/lib/utils"
import { useState } from "react"

interface StepperProps {
  initialStep?: number
  steps: {
    label: string
    content: React.ReactNode
  }[]
}

export function Stepper ({ initialStep = 0, steps }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep)

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