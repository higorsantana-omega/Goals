import { Controller, useFormContext } from "react-hook-form";
import { z } from "zod";

import { FormData } from "@/app/new-goal/page";
import { useStepperStore } from "@/stores/useStepperStore";

import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperNextButton, StepperPreviousButton } from "../Stepper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export const trackingCommunicationStepSchema = z.object({
  goal: z.string().min(1),
  notification: z.string().min(1)
})

export function TrackingCommunication () {
  const form = useFormContext<FormData>()

  const nextStep = useStepperStore(state => state.nextStep)

  async function handleNextStep () {
    const isValid = await form.trigger('trackingCommunicationStep', {
      shouldFocus: true
    })

    if (isValid) {
      nextStep()
    }  
  }

  return (
    <div>
      <StepHeader
        title="Tracking and Communication"
        desciption="Monitor the project's progress and set up notifications to stay informed about important updates."
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="goal">Goal</Label>
          <Input type="number" id="goal" {...form.register('trackingCommunicationStep.goal')} />
          {form.formState.errors.trackingCommunicationStep?.goal && (
            <small className="text-destructive">
              {form.formState.errors.trackingCommunicationStep.goal.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="notification">Notification</Label>
          <Controller
            control={form.control}
            name='trackingCommunicationStep.notification'
            render={({ field: { onChange, value }}) => (
              <RadioGroup
                onValueChange={onChange}
                defaultValue={value}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-3 space-y-0">
                  <RadioGroupItem value='true' />
                  <span>Yes, I want to receive notifications about my goals</span>
                </div>
                <div className="flex items-center space-x-3 space-y-0">
                  <RadioGroupItem value='false' />
                  <span>No, I don&apos;t want to receive notifications about my goals</span>
                </div>
              </RadioGroup>
            )}
          />
          {form.formState.errors.trackingCommunicationStep?.notification && (
            <small className="text-destructive">
              {form.formState.errors.trackingCommunicationStep.notification.message}
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