"use client"

import { PropsWithChildren } from "react"
import Footer from "@components/auth/Footer"
import Header from "@components/auth/Header"

type AuthProps = PropsWithChildren

export default function AuthLayout({ children }: AuthProps) {
  // states and functions
  return (
    <div className="bg-[linear-gradient(to_bottom,theme(colors.brand.400)_0%,theme(colors.brand.600)_50%,transparent_50%)] relative min-h-screen">
      <div className="grid min-h-screen grid-rows-[auto_auto_1fr] p-2 md:p-8">
        <Header />
        <main className="mx-auto mt-32 md:w-lg">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
