'use client'

import { useFormContext } from "react-hook-form";
import { z } from "zod";

import { FormData } from "@/app/new-goal/page";

import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperPreviousButton } from "../Stepper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


export const additionalCustomizationStepSchema = z.object({
  tags: z.string().min(1),
  additionalNotes: z.string().min(1)
})

export function AdditionalCustomization () {
  const form = useFormContext<FormData>()

  return (
    <div>
      <StepHeader
        title="Additional Customization"
        desciption="Add tags for better organization and any additional notes to provide more context or details."
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="tags">Tags</Label>
          <Input id="tags" {...form.register('additionalCustomizationStep.tags')} />
          {form.formState.errors.additionalCustomizationStep?.tags && (
            <small className="text-destructive">
              {form.formState.errors.additionalCustomizationStep.tags.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalNotes">Additional Notes</Label>
          <Input id="additionalNotes" {...form.register('additionalCustomizationStep.additionalNotes')} />
          {form.formState.errors.additionalCustomizationStep?.additionalNotes && (
            <small className="text-destructive">
              {form.formState.errors.additionalCustomizationStep.additionalNotes.message}
            </small>
          )}
        </div>
      </div>
    
      <StepperFooter>
        <StepperPreviousButton 
          disabled={form.formState.isSubmitting}
        />

        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </StepperFooter>
    </div>
  )
}