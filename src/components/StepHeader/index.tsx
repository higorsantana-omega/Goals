interface StepHeaderProps {
  title: string
  desciption: string
}

export function StepHeader ({ title, desciption }: StepHeaderProps) {
  return (
    <header className="space-y-2 mb-6">
      <h1 className="text-2xl font-semibold tracking-tighter">{title}</h1>
      <p className="text-muted-foreground">{desciption}</p>
    </header>
  )
}