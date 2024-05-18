import { z } from "zod";
import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperNextButton, StepperPreviousButton } from "../Stepper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useFormContext } from "react-hook-form";
import { FormData } from "@/app/new-goal/page";
import { useStepperStore } from "@/stores/useStepperStore";

export const planningResourcesStepSchema = z.object({
  category: z.string().min(1),
  priority: z.string().min(1),
  resources: z.string().min(1)
})

export function PlanningResources () {
  const form = useFormContext<FormData>()

  const nextStep = useStepperStore(state => state.nextStep)

  async function handleNextStep () {
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
          <Input id="category" {...form.register('planningResourcesStep.category')} />
          {form.formState.errors.planningResourcesStep?.category && (
            <small className="text-destructive">
              {form.formState.errors.planningResourcesStep.category.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <Input id="priority" {...form.register('planningResourcesStep.priority')} />
          {form.formState.errors.planningResourcesStep?.priority && (
            <small className="text-destructive">
              {form.formState.errors.planningResourcesStep.priority.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="resources">Resources to Achieve the Goal</Label>
          <Input id="resources" {...form.register('planningResourcesStep.resources')} />
          {form.formState.errors.planningResourcesStep?.resources && (
            <small className="text-destructive">
              {form.formState.errors.planningResourcesStep.resources.message}
            </small>
          )}
        </div>
      </div>
  
      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton
          onClick={handleNextStep}
        />
      </StepperFooter>
    </div>
  )
}


