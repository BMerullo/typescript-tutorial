"use client"

import React from "react"
import { PressEvent } from "@/types"

interface ButtonProps {
  name: string
  value: string
  color: string
  textColor: string
  width: string
  handlePress: (e: PressEvent) => void
}

const Button: React.FC<ButtonProps> = ({
  value,
  color,
  textColor,
  width,
  name,
  handlePress,
}) => {
  return (
    <section>
      <button
        className={` ${width} ${color} ${textColor} rounded-xl `}
        onClick={() => handlePress({ value })}
      >
        <h3>{name}</h3>
      </button>
    </section>
  )
}

export default Button
