import { Header } from "@/components/Header";
import { MotivationalPhrase } from "@/components/MotivationalPhrase";

export default function Layout ({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      <MotivationalPhrase />
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            {children}
          </div>
        </div>
      </section>
    </main>
  )
}