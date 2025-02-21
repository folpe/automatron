"use client"

import { PropsWithChildren } from "react"
import AuthTransition from "@components/auth/AuthTransition"
import Footer from "@components/auth/Footer"
import Header from "@components/auth/Header"

type PublicProps = PropsWithChildren

export default function PublicLayout({ children }: PublicProps) {
  // states and functions
  return (
    <div className="bg-[linear-gradient(to_bottom,theme(colors.brand.400)_0%,theme(colors.brand.600)_50%,transparent_50%)] min-h-screen">
      <div className="grid min-h-screen grid-rows-[auto_auto_1fr] p-2 md:p-8">
        <Header />
        <main className="mx-auto mt-8 md:mt-24 md:w-lg lg:mt-32">
          <AuthTransition>{children}</AuthTransition>
        </main>
        <Footer />
      </div>
    </div>
  )
}
