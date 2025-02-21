"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function AuthTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [showContent, setShowContent] = useState(true)

  useEffect(() => {
    setShowContent(false) // 🔥 Cache le contenu avant le changement de page
    const timeout = setTimeout(() => setShowContent(true), 300) // ⏳ Attend la fin de l'animation (0.3s)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      {showContent && (
        <motion.div
          key={pathname} // 🔑 Change pour forcer l'animation entre pages
          initial={{ opacity: 0, scale: 0.95, y: 10 }} // 🔹 Animation plus douce
          animate={{ opacity: 1, scale: 1, y: 0 }} // ✅ Arrivée fluide
          exit={{ opacity: 0, scale: 0.95, y: -10 }} // 🚪 Sortie subtile
          transition={{ duration: 0.25, ease: "easeOut" }} // ⏳ Réduit la durée
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
