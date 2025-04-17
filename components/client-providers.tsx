'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from 'next-themes'
// add other providers as needed (e.g. SWR, Zustand, etc.)

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
      </ThemeProvider>
    </ClerkProvider>
  )
}
