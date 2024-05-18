'use client'

import { useEffect } from "react";
import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperNextButton } from "../Stepper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { FormData } from "@/app/new-goal/page";
import { useStepperStore } from "@/stores/useStepperStore";

export const goalDetailsStepSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  startDate: z.string().min(1),
  expectedCompletionDate: z.string().min(1)
})

export function GoalDetails () {
  const form = useFormContext<FormData>()

  const nextStep = useStepperStore(state => state.nextStep)

  async function handleNextStep () {
    const isValid = await form.trigger('goalDetailsStep', {
      shouldFocus: true
    })

    if (isValid) {
      nextStep()
    }  
  }

  return (
    <div>
      <StepHeader
        title="Goal Details"
        desciption="Provide the fundamental information about your project, including its title, a brief description, and key dates."
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...form.register('goalDetailsStep.title')} />
          {form.formState.errors.goalDetailsStep?.title && (
            <small className="text-destructive">
              {form.formState.errors.goalDetailsStep.title.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input id="description" {...form.register('goalDetailsStep.description')} />
          {form.formState.errors.goalDetailsStep?.description && (
            <small className="text-destructive">
              {form.formState.errors.goalDetailsStep.description.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input id="startDate" {...form.register('goalDetailsStep.startDate')} />
          {form.formState.errors.goalDetailsStep?.startDate && (
            <small className="text-destructive">
              {form.formState.errors.goalDetailsStep.startDate.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="expectedCompletionDate">Expected Completion Date</Label>
          <Input id="expectedCompletionDate" {...form.register('goalDetailsStep.expectedCompletionDate')} />
          {form.formState.errors.goalDetailsStep?.expectedCompletionDate && (
            <small className="text-destructive">
              {form.formState.errors.goalDetailsStep.expectedCompletionDate.message}
            </small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperNextButton
          onClick={handleNextStep}
        />
      </StepperFooter>
    </div>
  )
}