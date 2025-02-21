"use client"

import { Form } from "radix-ui"
import { Button } from "@components/Button/Button"
import TextField from "@components/TextField/TextField"

function ForgotPassword() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white p-12 shadow-2xl lg:mt-42 lg:mb-10">
      {/* Sign up section */}
      <div className="w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h3 className="text-navy-700 mb-2.5 text-4xl font-bold dark:text-white">Mot de passe oublié ?</h3>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Pas de problème. Entrez votre email, et recevez un lien pour réinitialiser votre mot de passe
        </p>

        <Form.Root className="flex w-full flex-col gap-6">
          {/* Email */}
          <TextField type="email" name="email" label="Email" placeholder="mail@automatron.com" required />

          <Form.Submit asChild>
            <Button className="w-full">Réinitialisation du mot de passe</Button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  )
}

export default ForgotPassword
