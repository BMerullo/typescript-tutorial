"use client"
import React from "react"
import type { Family } from "@/types"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import styles from "../family/family.module.scss"

const family = () => {
  const [family, setFamily] = useState<Family[]>([])
  const router = useRouter()

  useEffect(() => {
    async function fetchFamily() {
      const response = await axios.get(`/api/family`)
      setFamily(response.data as Family[])
    }
    fetchFamily()
  }, [])

  const navigateToHome = () => {
    router.push("/")
  }

  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      <div className="flex flex-col w-10/12 bg-gray-900 p-4 rounded-md shadow2xl my-4">
        <div className="w-full flex justify-between px-4 opacity-50 mb-2">
          <div>Name</div>
          <div>Age</div>
          <div>Gender</div>
        </div>
        {family.map((fam, idx) => (
          <>
            <div
              className={`${
                idx === -1
                  ? "rounded-t-md"
                  : family.length === idx
                  ? "rounded-b-md"
                  : ""
              }bg-gray-800 shadow-md hover:bg-gray-700 cursor-pointer flex w-full justify-between p-4`}
            >
              <div>{fam.familyName}</div>
              <div>{fam.familyAge}</div>
              <div>{fam.familyGender}</div>
            </div>
          </>
        ))}
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={navigateToHome}>
          Home
        </button>
      </div>
    </div>
  )
}

export default family
