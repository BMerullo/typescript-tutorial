"use client"

import React, { useState } from "react"
import Button from "../button"
import { PressEvent } from "@/types"

const Shell: React.FC = () => {
  const [output, setOutput] = useState<string[]>([])
  const color = "bg-slate-500"
  const textColor = "text-black"
  const smWidth = "w-[40px]"
  const lgWidth = "w-[60px]"

  const handlePress = (e: PressEvent) => {
    if (e.value === "=") {
      const expression = output.join("")
      const result = eval(expression)
      setOutput([result.toString()])
    } else {
      const newArray = [...output, e.value]
      setOutput(newArray)
      console.log(e.value)
    }
  }

  const clear = () => {
    setOutput([])
  }

  return (
    <section className="h-[380px] w-[300px] bg-black border border-gray-400 rounded-lg">
      <div className="flex h-[50px] bg-slate-600 m-5">
        <input
          className="bg-slate-500 h-full w-full text-black pl-2"
          type="text"
          id="output"
          value={output.join("")}
          readOnly
        />
      </div>

      <div className="flex justify-around flex-row m-5 mt-11 ">
        <Button
          handlePress={clear}
          name="AC"
          value="AC"
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="+/-"
          value="+/-"
          color="bg-black"
          textColor={textColor}
          width={smWidth}
          
        ></Button>
        <Button
          handlePress={handlePress}
          name="%"
          value="%"
          color="bg-black"
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="/"
          value="/"
          color="bg-orange-500"
          textColor={textColor}
          width={smWidth}
        ></Button>
      </div>
      <div className="flex justify-around flex-row m-5">
        <Button
          handlePress={handlePress}
          name="1"
          value="1"
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="2"
          value="2"
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="3"
          value="3"
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="x"
          value="x"
          color="bg-orange-500"
          textColor={textColor}
          width={smWidth}
        ></Button>
      </div>
      <div className="flex justify-around flex-row m-5">
        <Button
          handlePress={handlePress}
          name="4"
          value="4"
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="5"
          value="5"
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="6"
          value="6"
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="-"
          value="-"
          color="bg-orange-500"
          textColor={textColor}
          width={smWidth}
        ></Button>
      </div>
      <div className="flex justify-around flex-row m-5">
        <Button
          handlePress={handlePress}
          name="7"
          value="7"
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="8"
          value="8"
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="9"
          value="9"
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="+"
          value="+"
          color="bg-orange-500"
          textColor={textColor}
          width={smWidth}
        ></Button>
      </div>
      <div className="flex justify-around flex-row m-5">
        <Button
          handlePress={handlePress}
          name=""
          value=""
          color="bg-black"
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="0"
          value="0"
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="."
          value="."
          color={color}
          textColor={textColor}
          width={smWidth}
        ></Button>
        <Button
          handlePress={handlePress}
          name="="
          value="="
          color="bg-orange-500"
          textColor={textColor}
          width={smWidth}
        ></Button>
      </div>
    </section>
  )
}

export default Shell
