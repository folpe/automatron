import Link from "next/link"

const Header = () => {
  return (
    <header className="m-2 grid h-full grid-cols-[1fr_auto] items-center px-6 text-white md:m-0 lg:grid-cols-[1fr_auto_1fr] lg:px-0">
      <div className="flex items-center justify-start text-2xl font-black">
        AUTOMA<span className="font-extralight">TRON</span>
      </div>
      <div className="items-center justify-end lg:hidden">Menu</div>
      <div className="hidden justify-center space-x-6 lg:flex">
        <div>Solution</div>
        <div>Fonctionnalités</div>
        <div>Tarifs</div>
        <div>A Propos</div>
      </div>
      <div className="hidden items-center justify-end gap-3 lg:flex">
        <Link
          href="/auth/sign-in"
          className="hover:bg-brand-200 inline-flex h-full min-h-10 min-w-20 items-center justify-center rounded-3xl bg-transparent px-4 py-1.5 text-center text-sm text-white transition-colors delay-50 hover:cursor-pointer hover:enabled:text-white"
        >
          Connexion
        </Link>
        <Link
          href="/auth/sign-up"
          className="hover:bg-brand-600 bg-brand-500 inline-flex h-full min-h-10 min-w-20 items-center justify-center rounded-3xl px-4 py-1.5 text-center text-sm text-white transition-colors delay-50 hover:cursor-pointer hover:enabled:text-white"
        >
          Inscription
        </Link>
      </div>
    </header>
  )
}

export default Header
