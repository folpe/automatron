"use client"
import { CheckIcon } from "@radix-ui/react-icons"

import Link from "next/link"
import { Checkbox, Form } from "radix-ui"
import { ChangeEvent, FormEvent, useState } from "react"
import { Button } from "@components/Button/Button"
import TextField from "@components/TextField/TextField"
import { nhost } from "app/lib/nhost"

interface SignUpFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  termsAccepted: boolean
}
function SignUp() {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsAccepted: false,
  })

  const [error, setError] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log("ici")
    console.log("🧐 Nhost :", nhost)
    console.log("🧐 Nhost.auth :", nhost.auth)
    e.preventDefault()
    setError("")

    if (!formData.termsAccepted) {
      console.log("accept pls")
      setError("Vous devez accepter les conditions pour vous inscrire.")
      return
    }

    try {
      console.log("coucou")
      const { error } = await nhost.auth.signUp({
        email: formData.email,
        password: formData.password,
        // options: {
        //   userData: {
        //     firstName: formData.firstName,
        //     lastName: formData.lastName,
        //   },
        // },
      })

      console.log("pouet")
      if (error) {
        setError(error.message)
        return
      }
      console.log("yeah")

      // Redirection ou confirmation après inscription réussie
      alert("Inscription réussie ! Vérifiez votre email pour confirmer votre compte.")
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.")
    }
  }
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white p-12 shadow-2xl lg:mb-10">
      {/* Sign up section */}
      <div className="w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h3 className="text-navy-700 mb-2.5 text-4xl font-bold dark:text-white">Inscription</h3>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Entrez vos informations pour vous inscrire et profitez dès maintenant de tous vos avantages !
        </p>

        <Form.Root className="flex w-full flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex w-full gap-4">
            <TextField
              type="text"
              name="firstName"
              label="Prénom"
              placeholder="Prénom"
              required
              onChange={handleChange}
            />
            <TextField type="text" name="lastName" label="Nom" placeholder="Nom" required onChange={handleChange} />
          </div>
          {/* Email */}
          <TextField
            type="email"
            name="email"
            label="Email"
            placeholder="mail@automatron.com"
            required
            onChange={handleChange}
          />
          {/* Password */}
          <TextField
            type="password"
            name="password"
            label="Mot de passe"
            placeholder="Min. 8 caractères"
            required
            minLength={8}
            onChange={handleChange}
          />

          {/* Checkbox */}
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex flex-1 items-center">
              <Checkbox.Root
                className="focus:border-brand-100 data-[state=checked]:bg-brand-500 flex aspect-square h-4 w-4 appearance-none items-center justify-center rounded border border-gray-200 bg-white outline-none data-[state=checked]:text-white"
                id="c1"
                checked={formData.termsAccepted}
                onCheckedChange={(checked: boolean) => setFormData((prev) => ({ ...prev, termsAccepted: checked }))}
              >
                <Checkbox.Indicator>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className="pl-2 text-[14px] leading-none font-light text-gray-700" htmlFor="c1">
                En créant un compte, vous acceptez les Conditions Générales d’Utilisation et notre Politique de
                Confidentialité
              </label>
            </div>
          </div>
          <Form.Submit asChild>
            <Button type="submit" className="w-full">
              Connexion
            </Button>
          </Form.Submit>
        </Form.Root>
        <div className="mt-2">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-500">Déjà inscrit ?</span>
          <Link
            href="/auth/sign-in"
            className="text-brand-500 hover:text-brand-600 ml-1 text-xs font-medium dark:text-white"
          >
            Connexion
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
