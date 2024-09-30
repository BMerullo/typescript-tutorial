"use client"
import React from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "../Hamburger-Menu/HamburgerMenu.module.scss"

const HamburgerMenu: React.FC = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }
  return (
    <div className={styles.container}>
      <div>
        <button onClick={toggleMenu} className={styles.hamburger}>
          <div
            className={`${styles.line} ${isOpen ? styles.openLine1 : ""}`}
          ></div>
          <div
            className={`${styles.line} ${isOpen ? styles.openLine2 : ""}`}
          ></div>
          <div
            className={`${styles.line} ${isOpen ? styles.openLine3 : ""}`}
          ></div>
        </button>
      </div>

      {isOpen && (
        <nav className={` ${styles.fullscreenMenu} ${styles.open}`}>
          <ul>
            <li
              className={`${styles.link} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              <Link href="/" onClick={closeMenu}>
                <h3
                  className={`${styles.link} ${
                    pathname === "/" ? styles.active : ""
                  }`}
                >
                  Home
                </h3>
              </Link>
            </li>
            <li
              className={`${styles.link} ${
                pathname === "/games" ? styles.active : ""
              }`}
            >
              <Link href="/games" onClick={closeMenu}>
                <h3
                  className={`${styles.link} ${
                    pathname === "/games" ? styles.active : ""
                  }`}
                >
                  Games
                </h3>
              </Link>
            </li>
            <li
              className={`${styles.link} ${
                pathname === "/pokedex" ? styles.active : ""
              }`}
            >
              <Link href="/pokedex" onClick={closeMenu}>
                <h3
                  className={`${styles.link} ${
                    pathname === "/pokedex" ? styles.active : ""
                  }`}
                >
                  Pokedex
                </h3>
              </Link>
            </li>
            <li
              className={`${styles.link} ${
                pathname === "/todo" ? styles.active : ""
              }`}
            >
              <Link href="/todo" onClick={closeMenu}>
                <h3
                  className={`${styles.link} ${
                    pathname === "/todo" ? styles.active : ""
                  }`}
                >
                  Todo
                </h3>
              </Link>
            </li>
            <li
              className={`${styles.link} ${
                pathname === "/family" ? styles.active : ""
              }`}
            >
              <Link href="/family" onClick={closeMenu}>
                <h3
                  className={`${styles.link} ${
                    pathname === "/family" ? styles.active : ""
                  }`}
                >
                  Family
                </h3>
              </Link>
            </li>
            <li
              className={`${styles.link} ${
                pathname === "/tailwind" ? styles.active : ""
              }`}
            >
              <Link href="/tailwind" onClick={closeMenu}>
                <h3
                  className={`${styles.link} ${
                    pathname === "/tailwind" ? styles.active : ""
                  }`}
                >
                  Tailwind
                </h3>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default HamburgerMenu
