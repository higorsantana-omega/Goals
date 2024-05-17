import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperNextButton, StepperPreviousButton } from "../Stepper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function PlanningResources () {
  return (
    <div>
      <StepHeader
        title="Planning and Resources"
        desciption="Specify the project's category, prioritize tasks, and list the resources needed to achieve your goals."
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input id="category" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <Input id="priority" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="resources">Resources to Achieve the Goal</Label>
          <Input id="resources" />
        </div>
      </div>
  
      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton />
      </StepperFooter>
    </div>
  )
}


