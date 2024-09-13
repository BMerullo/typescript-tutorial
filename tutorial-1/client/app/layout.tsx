import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className=" py-4 text-center min-h-screen">
        <Header />
        <main className="flex-grow min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
