"use client"

import { PropsWithChildren } from "react"
import Footer from "@components/auth/Footer"
import Header from "@components/auth/Header"

type HomeProps = PropsWithChildren

export default function HomeLayout({ children }: HomeProps) {
  // states and functions
  return (
    <div className="bg-[linear-gradient(to_bottom,theme(colors.brand.400)_0%,theme(colors.brand.600)_50%,transparent_50%)] min-h-screen">
      <div className="grid min-h-screen grid-rows-[auto_auto_1fr] p-8">
        <Header />
        <main className="mx-auto w-lg pt-16">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
