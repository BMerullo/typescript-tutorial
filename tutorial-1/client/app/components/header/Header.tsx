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
  return (
    <header className={styles.header}>
      <section className={styles.nav}>
        <button onClick={navigateToHome}>
          <h1 className={styles.title}>
            BOB'S INTERNET{" "}
            <span className={styles.gradient}>EXTRAVAGANZA!</span>
          </h1>
        </button>
        <article className={styles.linkContainer}>
          <button onClick={navigateToAbout}>
            <div className={styles.link}>
              <h3>About</h3>
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
        </article>
      </section>
    </header>
  )
}

export default Header
