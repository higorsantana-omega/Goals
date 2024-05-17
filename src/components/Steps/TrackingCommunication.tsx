import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperNextButton, StepperPreviousButton } from "../Stepper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function TrackingCommunication () {
  return (
    <div>
      <StepHeader
        title="Tracking and Communication"
        desciption="Monitor the project's progress and set up notifications to stay informed about important updates."
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="progress">Progress</Label>
          <Input id="progress" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notification">Notification</Label>
          <Input id="notification" />
        </div>
      </div>
  
      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton />
      </StepperFooter>
    </div>
  )
}