import { ReactNode } from 'react'

interface SectionProps {
  theme: 'black' | 'white'
  children: ReactNode
  id?: string
}

export default function Section({ theme, children, id }: SectionProps) {
  const isDark = theme === 'black'
  return (
    <section
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-32 border-t relative overflow-hidden ${
        isDark
          ? 'bg-black text-white border-white/10'
          : 'bg-white text-black border-black/10'
      }`}
    >
      {children}
    </section>
  )
}
