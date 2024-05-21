import { Controller, useFormContext } from 'react-hook-form'
import { z } from 'zod'

import { FormData } from '@/app/new-goal/page'
import { useStepperStore } from '@/stores/useStepperStore'

import { categories, priorities } from '../../../drizzle/schema'
import { StepHeader } from '../StepHeader'
import { StepperFooter, StepperNextButton, StepperPreviousButton } from '../Stepper'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'

export const planningResourcesStepSchema = z.object({
  category: z.enum(categories),
  priority: z.enum(priorities),
  resources: z.string().max(300, 'Resources must be at most 250 characters').optional()
})

export function PlanningResources() {
  const form = useFormContext<FormData>()

  const nextStep = useStepperStore((state) => state.nextStep)

  async function handleNextStep() {
    const isValid = await form.trigger('planningResourcesStep', {
      shouldFocus: true
    })

    if (isValid) {
      nextStep()
    }
  }

  return (
    <div>
      <StepHeader
        title="Planning and Resources"
        desciption="Specify the project's category, prioritize tasks, and list the resources needed to achieve your goals."
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Controller
            control={form.control}
            name="planningResourcesStep.category"
            render={({ field: { onChange, value } }) => (
              <Select onValueChange={onChange} defaultValue={value}>
                <>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </>
                <SelectContent>
                  {categories.map((category, index) => (
                    <SelectItem key={index} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {form.formState.errors.planningResourcesStep?.category && (
            <small className="text-destructive">{form.formState.errors.planningResourcesStep.category.message}</small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <Controller
            control={form.control}
            name="planningResourcesStep.priority"
            render={({ field: { onChange, value } }) => (
              <Select onValueChange={onChange} defaultValue={value}>
                <>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </>
                <SelectContent>
                  {priorities.map((priority, index) => (
                    <SelectItem key={index} value={priority}>
                      {priority}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {form.formState.errors.planningResourcesStep?.priority && (
            <small className="text-destructive">{form.formState.errors.planningResourcesStep.priority.message}</small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="resources">Resources to Achieve the Goal</Label>
          <Textarea id="resources" {...form.register('planningResourcesStep.resources')} />
          {form.formState.errors.planningResourcesStep?.resources && (
            <small className="text-destructive">{form.formState.errors.planningResourcesStep.resources.message}</small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton onClick={handleNextStep} />
      </StepperFooter>
    </div>
  )
}
