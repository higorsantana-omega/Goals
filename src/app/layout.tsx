import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goals",
  // icons: {
  //   icon: {
  //     url: "/favicon.ico",
  //   }
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-6">
              {children}
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
