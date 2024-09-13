"use client"
import React from "react"
import styles from "../header/header.module.scss"
import { useRouter } from "next/navigation"
import Image from "next/image"
import hamburger from "../../../images/hamburger-menu-256.png"
import Link from "next/link"

const Header = () => {
  const router = useRouter()

  const navigateToHome = () => {
    router.push("/")
  }
  const navigateToAbout = () => {
    router.push("/about")
  }
  const navigateToTodos = () => {
    router.push("/todo")
  }
  const navigateToFamily = () => {
    router.push("/family")
  }
  const navigateToPokedex = () => {
    router.push("/pokedex")
  }
  const navigateToTailwind = () => {
    router.push("/tailwind")
  }
  return (
    <header>
      <section className="flex justify-between items-center px-10 md:px-20 lg:px-20  pb-5">
        <button onClick={navigateToHome} className="">
          <div className={styles.gradient}>
            <h1 className="text-5xl">Sandbox</h1>
          </div>
        </button>
        <article className="text-xl">
          <div className="hidden md:hidden lg:block">
            <Link href="/about">
              <h3 className={styles.link}>About</h3>
            </Link>

            <button className="px-4" onClick={navigateToPokedex}>
              <div>
                <h3 className={styles.link}>Pokedex</h3>
              </div>
            </button>
            <button className="px-4" onClick={navigateToTodos}>
              <div>
                <h3 className={styles.link}>Todo</h3>
              </div>
            </button>
            <button className="px-4" onClick={navigateToFamily}>
              <div>
                <h3 className={styles.link}>Family</h3>
              </div>
            </button>
            <button className="px-4" onClick={navigateToTailwind}>
              <div>
                <h3 className={styles.link}>Tailwind</h3>
              </div>
            </button>
          </div>
          <div className="w-10 lg:hidden">
            <Image src={hamburger} alt="hamburger icon w-5" />
          </div>
        </article>
      </section>
    </header>
  )
}

export default Header
