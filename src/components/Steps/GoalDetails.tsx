import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperNextButton } from "../Stepper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function GoalDetails () {
  return (
    <div>
      <StepHeader
        title="Goal Details"
        desciption="Provide the fundamental information about your project, including its title, a brief description, and key dates."
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input id="description" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input id="startDate" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="expectedCompletionDate">Expected Completion Date</Label>
          <Input id="expectedCompletionDate" />
        </div>
      </div>

      <StepperFooter>
        <StepperNextButton />
      </StepperFooter>
    </div>
  )
}