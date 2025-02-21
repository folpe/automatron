"use client"
import { CheckIcon } from "@radix-ui/react-icons"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Checkbox, Form } from "radix-ui"
import { useEffect, useState } from "react"
import { Button } from "@components/Button/Button"
import TextField from "@components/TextField/TextField"

function SignIn() {
  const [isMounted, setIsMounted] = useState(false) // ✅ Évite l'erreur "NextRouter was not mounted"
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    setIsMounted(true) // ✅ Vérifie que le composant est bien monté côté client
  }, [])

  if (!isMounted) return null
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // ✅ Empêche le rechargement de la page

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // 🔥 Simule une API de connexion (remplace par un appel à ton backend)
    const isAuthenticated = email === "admin@mail.com" && password === "admin123"

    if (!isAuthenticated) {
      setErrorMessage("Email ou mot de passe incorrect.")
      return
    }

    // ✅ Stocke l'état de connexion (ex: localStorage, session, cookies, context API)
    localStorage.setItem("isAuthenticated", "true")

    // ✅ Redirection vers `/admin` si la connexion réussit
    router.push("/admin")
  }
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white p-12 shadow-2xl lg:mb-10">
      {/* Sign in section */}
      <div className="w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h3 className="text-navy-700 mb-2.5 text-4xl font-bold dark:text-white">Connexion</h3>
        <p className="mb-9 ml-1 text-base text-gray-600">Entrez votre email et mot de passe pour vous connecter!</p>

        <Form.Root className="flex w-full flex-col gap-6" onSubmit={handleSubmit}>
          {/* Email */}
          <TextField type="email" name="email" label="Email" placeholder="mail@automatron.com" required />
          {/* Password */}
          <TextField
            type="password"
            name="password"
            label="Mot de passe"
            placeholder="Min. 8 caractères"
            required
            minLength={8}
          />

          {/* Checkbox */}
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex items-center">
              <Checkbox.Root
                className="focus:border-brand-100 data-[state=checked]:bg-brand-500 flex aspect-square h-4 w-4 appearance-none items-center justify-center rounded border border-gray-200 bg-white outline-none data-[state=checked]:text-white"
                id="c1"
              >
                <Checkbox.Indicator>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className="pl-2 text-[14px] leading-none font-light text-gray-700" htmlFor="c1">
                Garder ma connexion
              </label>
            </div>
            <Link
              className="text-brand-500 hover:text-brand-600 text-xs font-medium dark:text-white"
              href="/auth/forgot-password"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <Form.Submit asChild>
            <Button className="w-full">Connexion</Button>
          </Form.Submit>
        </Form.Root>
        <div className="mt-2">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-500">Pas encore inscrit ?</span>
          <Link
            href="/auth/sign-up"
            className="text-brand-500 hover:text-brand-600 ml-1 text-xs font-medium dark:text-white"
          >
            Créez un compte
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
