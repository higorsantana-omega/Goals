interface StepHeaderProps {
  title: string
  desciption: string
}

export function StepHeader({ title, desciption }: StepHeaderProps) {
  return (
    <header className="mb-6 space-y-2">
      <h1 className="text-2xl font-semibold tracking-tighter">{title}</h1>
      <p className="text-muted-foreground">{desciption}</p>
    </header>
  )
}
