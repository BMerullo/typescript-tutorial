"use client"
import React from "react"
import styles from "../header/header.module.scss"

const Header = () => {
  return (
    <header>
      <section className={styles.nav}>
        <h1 className={styles.title}>
          BOB'S INTERNET <span className={styles.gradient}>EXTRAVAGANZA!</span>
        </h1>
        <article className={styles.linkContainer}>
          <div className={styles.link}>
            <h3>About</h3>
          </div>
          <div className={styles.link}>
            <h3>Todo</h3>
          </div>
          <div className={styles.link}>
            <h3>Family</h3>
          </div>
        </article>
      </section>
    </header>
  )
}

export default Header
