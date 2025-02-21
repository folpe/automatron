"use client"

import { NhostProvider } from "@nhost/nextjs"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { nhost } from "app/lib/nhost"
import { Home } from "components/home/Home"

const Dashboard = () => {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // 🔥 Vérifie si l'utilisateur est connecté (via localStorage)
    const authStatus = localStorage.getItem("isAuthenticated")

    if (authStatus !== "true") {
      router.push("/auth/sign-in") // 🚀 Redirige vers la page de connexion
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  if (!isAuthenticated) return <p>Redirection en cours...</p>

  return (
    <NhostProvider nhost={nhost}>
      <section className="bg-white dark:bg-gray-900">
        <Home />
      </section>
    </NhostProvider>
  )
}

export default Dashboard
