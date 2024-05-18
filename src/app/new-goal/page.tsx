'use client'

import { Stepper } from "@/components/Stepper";
import { AdditionalCustomization, additionalCustomizationStepSchema } from "@/components/Steps/AdditionalCustomization";
import { GoalDetails, goalDetailsStepSchema } from "@/components/Steps/GoalDetails";
import { PlanningResources, planningResourcesStepSchema } from "@/components/Steps/PlanningResources";
import { TrackingCommunication, trackingCommunicationStepSchema } from "@/components/Steps/TrackingCommunication";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  goalDetailsStep: goalDetailsStepSchema,
  planningResourcesStep: planningResourcesStepSchema,
  trackingCommunicationStep: trackingCommunicationStepSchema,
  additionalCustomizationStep: additionalCustomizationStepSchema
})

export type FormData = z.infer<typeof schema>

export default function NewGoalPage () {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      goalDetailsStep: {
        title: '',
        description: '',
        startDate: '',
        expectedCompletionDate: ''
      },
      planningResourcesStep: {
        category: '',
        priority: '',
        resources: ''
      },
      trackingCommunicationStep: {
        progress: '',
        notification: ''
      },
      additionalCustomizationStep: {
        tags: '',
        additionalNotes: ''
      }
    },
    mode: 'onChange'
  })

  const handleSubmit = form.handleSubmit(formData => {
    console.log({ formData })
  })

  return (
    <div className="min-h-screen flex justify-center">
      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          <Stepper 
            steps={[
              {
                label: 'Goal Details',
                content: <GoalDetails />
              },
              {
                label: 'Planning and Resources',
                content: <PlanningResources />
              },
              {
                label: 'Tracking and Communication',
                content: <TrackingCommunication />
              },
              {
                label: 'Additional Customization',
                content: <AdditionalCustomization />
              }
            ]}
          />
        </form>
      </FormProvider>
    </div>
  )
}