"use client"
import React from "react"
import styles from "../header/header.module.scss"
import { useRouter } from "next/navigation"

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
    <header className={styles.header}>
      <section className={styles.nav}>
        <button onClick={navigateToHome}>
          <h1 className={styles.gradient}>Sandbox</h1>
        </button>
        <article className={styles.linkContainer}>
          <button onClick={navigateToAbout}>
            <div className={styles.link}>
              <h3>About</h3>
            </div>
          </button>
          <button onClick={navigateToPokedex}>
            <div className={styles.link}>
              <h3>Pokedex</h3>
            </div>
          </button>
          <button onClick={navigateToTodos}>
            <div className={styles.link}>
              <h3>Todo</h3>
            </div>
          </button>
          <button onClick={navigateToFamily}>
            <div className={styles.link}>
              <h3>Family</h3>
            </div>
          </button>
          <button onClick={navigateToTailwind}>
            <div className={styles.link}>
              <h3>Tailwind</h3>
            </div>
          </button>
        </article>
      </section>
    </header>
  )
}

export default Header
