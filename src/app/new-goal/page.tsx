import { Stepper } from "@/components/Stepper";
import { AdditionalCustomization } from "@/components/Steps/AdditionalCustomization";
import { GoalDetails } from "@/components/Steps/GoalDetails";
import { PlanningResources } from "@/components/Steps/PlanningResources";
import { TrackingCommunication } from "@/components/Steps/TrackingCommunication";

export default function NewGoalPage () {
  return (
    <div className="min-h-screen flex justify-center">
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
    </div>
  )
}