'use client'

import { Stepper } from "@/components/Stepper";
import { AdditionalCustomization, additionalCustomizationStepSchema } from "@/components/Steps/AdditionalCustomization";
import { GoalDetails, goalDetailsStepSchema } from "@/components/Steps/GoalDetails";
import { PlanningResources, planningResourcesStepSchema } from "@/components/Steps/PlanningResources";
import { TrackingCommunication, trackingCommunicationStepSchema } from "@/components/Steps/TrackingCommunication";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { createGoal } from "../actions";

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
        description: ''
      },
      planningResourcesStep: {
        category: 'Other',
        priority: 'Low',
        resources: ''
      },
      trackingCommunicationStep: {
        goal: '',
        notification: ''
      },
      additionalCustomizationStep: {
        tags: '',
        additionalNotes: ''
      }
    },
    mode: 'onChange'
  })

  async function onSubmit(data: FormData) {
    await createGoal({
      title: data.goalDetailsStep.title,
      description: data.goalDetailsStep.description,
      startDate: data.goalDetailsStep.startDate.toISOString(),
      expectedCompletionDate: data.goalDetailsStep.expectedCompletionDate.toISOString(),
      category: data.planningResourcesStep.category,
      priority: data.planningResourcesStep.priority,
      resources: data.planningResourcesStep.resources,
      goal: Number(data.trackingCommunicationStep.goal),
      notification: data.trackingCommunicationStep.notification === 'true' ? true : false,
      tags: data.additionalCustomizationStep.tags,
      additionalNotes: data.additionalCustomizationStep.additionalNotes
    })
  }

  return (
    <div className="min-h-screen flex justify-center">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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