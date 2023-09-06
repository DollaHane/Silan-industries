import "@/styles/globals.css"

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/Toaster"
import BackgroundColor from "@/components/BackgroundColor"
import Providers from "@/components/global/Providers"
import { TailwindIndicator } from "@/components/theme/tailwind-indicator"
import { ThemeProvider } from "@/components/theme/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel&family=Cinzel+Decorative&family=Fauna+One&family=Open+Sans&family=Prompt:wght@400;600&family=Urbanist:ital,wght@0,400;1,600&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          className={cn("min-h-screen bg-background font-opensans antialiased")}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Providers>
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">{children}</div>
                <BackgroundColor />
              </div>
              <TailwindIndicator />
            </Providers>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
