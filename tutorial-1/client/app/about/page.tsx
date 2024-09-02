import React from "react"
import styles from "./about.module.scss"
import { Family } from "@/types"
import axios from "axios"

const about = () => {
  return (
    <div>
      <h1 className={styles.test}>
        This is the about <span className={styles.gradient}>Page</span>
      </h1>
    </div>
  )
}

export default about
