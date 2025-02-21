"use client"

import Footer from "components/footer/Footer"
// Layout components
// import { usePathname } from "next/navigation"
// import { useContext, useState } from "react"
// import routes from "routes"
// import { getActiveNavbar, getActiveRoute, isWindowAvailable } from "utils/navigation"
// import Navbar from "components/navbar"
// import Sidebar from "components/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // states and functions
  // const [open, setOpen] = useState(false)
  // const pathname = usePathname()
  return (
    <div className="bg-background-100 dark:bg-background-900 flex h-full w-full">
      {/* <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin" /> */}
      {/* Navbar & Main Content */}
      <div className="font-dm dark:bg-navy-900 h-full w-full">
        {/* Main Content */}
        <main className={`dark:bg-navy-900 mx-2.5 flex-none transition-all md:pr-2 xl:ml-[323px]`}>
          {/* Routes */}
          <div>
            {/* <Navbar
              onOpenSidenav={() => setOpen(!open)}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
            /> */}
            <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">{children}</div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
