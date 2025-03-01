import type React from "react"
import type { Metadata } from "next"
import { Inter, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { Logo } from "@/components/ui/logo"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AI Research Journal",
  description: "A leading journal for artificial intelligence research and innovation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSans.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <Logo />
              <nav className="hidden md:flex gap-6">
                <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </a>
                <a href="/articles" className="text-sm font-medium transition-colors hover:text-primary">
                  Articles
                </a>
                <a href="/archive" className="text-sm font-medium transition-colors hover:text-primary">
                  Archive
                </a>
                <a href="/submit" className="text-sm font-medium transition-colors hover:text-primary">
                  Submit
                </a>
                <a href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                  About
                </a>
              </nav>
              <div className="flex items-center gap-4">
                <a
                  href="/submit"
                  className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Submit Research
                </a>
                <button className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                  <span className="sr-only">Toggle menu</span>
                </button>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t bg-muted/40">
            <div className="container py-8 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <Logo />
                  <p className="text-sm text-muted-foreground mt-2">
                    Advancing the field of artificial intelligence through rigorous research and innovation.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading text-sm font-bold">Quick Links</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/editorial-board"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Editorial Board
                      </a>
                    </li>
                    <li>
                      <a href="/submit" className="text-muted-foreground hover:text-foreground transition-colors">
                        Submit Research
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading text-sm font-bold">Resources</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a
                        href="/author-guidelines"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Author Guidelines
                      </a>
                    </li>
                    <li>
                      <a
                        href="/review-process"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Review Process
                      </a>
                    </li>
                    <li>
                      <a href="/ethics" className="text-muted-foreground hover:text-foreground transition-colors">
                        Ethics Statement
                      </a>
                    </li>
                    <li>
                      <a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading text-sm font-bold">Subscribe</h4>
                  <form className="flex flex-col gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                    <button
                      type="submit"
                      className="h-9 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} AI Research Journal. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <a href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                  <a
                    href="/accessibility"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Accessibility
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'