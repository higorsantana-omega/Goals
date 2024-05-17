import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperPreviousButton } from "../Stepper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function AdditionalCustomization () {
  return (
    <div>
      <StepHeader
        title="Additional Customization"
        desciption="Add tags for better organization and any additional notes to provide more context or details."
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="tags">Tags</Label>
          <Input id="tags" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalNotes">Additional Notes</Label>
          <Input id="additionalNotes" />
        </div>
      </div>
    
      <StepperFooter>
        <StepperPreviousButton />
        <Button>
          Submit
        </Button>
      </StepperFooter>
    </div>
  )
}