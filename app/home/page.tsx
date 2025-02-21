"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated")

    if (authStatus === "true") {
      router.push("/admin") // 🚀 Redirige directement vers `/admin`
    } else {
      router.push("/auth/sign-in")
    }
  }, [router])
  return <div></div>
}

export default Home
