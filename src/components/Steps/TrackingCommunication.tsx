import { z } from "zod";
import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperNextButton, StepperPreviousButton } from "../Stepper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useFormContext } from "react-hook-form";
import { useStepperStore } from "@/stores/useStepperStore";
import { FormData } from "@/app/new-goal/page";

export const trackingCommunicationStepSchema = z.object({
  progress: z.string().min(1),
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
          <Label htmlFor="progress">Progress</Label>
          <Input id="progress" {...form.register('trackingCommunicationStep.progress')} />
          {form.formState.errors.trackingCommunicationStep?.progress && (
            <small className="text-destructive">
              {form.formState.errors.trackingCommunicationStep.progress.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="notification">Notification</Label>
          <Input id="notification" {...form.register('trackingCommunicationStep.notification')} />
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