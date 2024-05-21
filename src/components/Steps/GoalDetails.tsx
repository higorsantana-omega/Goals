'use client'

import { Controller, useFormContext } from 'react-hook-form'
import { z } from 'zod'

import { FormData } from "@/app/new-goal/page";
import { useStepperStore } from "@/stores/useStepperStore";

import { DatePicker } from "../DatePicker";
import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperNextButton } from "../Stepper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const goalDetailsStepSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  description: z.string()
    .max(250, 'Description must be at most 250 characters')
    .optional(),
  startDate: z.date({ message: 'Please select a valid date' }),
  expectedCompletionDate: z.date({ message: 'Please select a valid date' })
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
          <Label htmlFor="title">Title *</Label>
          <Input id="title" {...form.register('goalDetailsStep.title')} />
          {form.formState.errors.goalDetailsStep?.title && (
            <small className="text-destructive">
              {form.formState.errors.goalDetailsStep.title.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...form.register('goalDetailsStep.description')} />
          {form.formState.errors.goalDetailsStep?.description && (
            <small className="text-destructive">
              {form.formState.errors.goalDetailsStep.description.message}
            </small>
          )}
        </div>

        <div className="space-y-2 flex flex-col">
          <Label htmlFor="startDate">Start Date *</Label>
          <Controller
            control={form.control}
            name='goalDetailsStep.startDate'
            render={({ field: { onChange, value }}) => (
              <DatePicker
                value={value}
                onChange={onChange}
                className="w-full"
              />
            )}
          />

          {form.formState.errors.goalDetailsStep?.startDate && (
            <small className="text-destructive">
              {form.formState.errors.goalDetailsStep.startDate.message}
            </small>
          )}
        </div>

        <div className="space-y-2 flex flex-col">
          <Label htmlFor="expectedCompletionDate">Expected Completion Date *</Label>
          <Controller
            control={form.control}
            name='goalDetailsStep.expectedCompletionDate'
            render={({ field: { onChange, value }}) => (
              <DatePicker
                value={value}
                onChange={onChange}
                className="w-full"
              />
            )}
          />

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