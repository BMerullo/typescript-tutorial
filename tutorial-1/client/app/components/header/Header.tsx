"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import styles from "../header/header.module.scss"
import Image from "next/image"
import Link from "next/link"
import HamburgerMenu from "../Hamburger-Menu/HamburgerMenu"

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  const navigateToHome = () => {
    router.push("/")
  }

  return (
    <header className=" fixed top-0 z-50 bg-black flex justify-between items-center px-10 md:px-20 lg:px-20  pb-5 pt-5 w-full">
      <button onClick={navigateToHome}>
        <div className={styles.gradient}>
          <h1 className="text-5xl">Sandbox</h1>
        </div>
      </button>
      <nav className="text-xl">
        <div
          className=" hidden md:hidden lg:block lg:flex 
            "
        >
          <Link
            href="/"
            className={`px-5 ${pathname === "/" ? styles.active : ""}`}
          >
            <h3 className={styles.link}>Home</h3>
          </Link>
          <Link
            href="/games"
            className={`px-5 ${pathname === "/games" ? styles.active : ""}`}
          >
            <h3 className={styles.link}>Games</h3>
          </Link>
          <Link
            href="/pokedex"
            className={`px-5 ${pathname === "/pokedex" ? styles.active : ""}`}
          >
            <h3 className={styles.link}>Pokedex</h3>
          </Link>
          <Link
            href="/todo"
            className={`px-5 ${pathname === "/todo" ? styles.active : ""}`}
          >
            <h3 className={styles.link}>Todo</h3>
          </Link>
          <Link
            href="/family"
            className={`px-5 ${pathname === "/family" ? styles.active : ""}`}
          >
            <h3 className={styles.link}>Family</h3>
          </Link>
          <Link
            href="/tailwind"
            className={`px-5 ${pathname === "/tailwind" ? styles.active : ""}`}
          >
            <h3 className={styles.link}>Tailwind</h3>
          </Link>
        </div>
      </nav>
      <div className="lg:hidden">
        <HamburgerMenu />
      </div>
    </header>
  )
}

export default Header
