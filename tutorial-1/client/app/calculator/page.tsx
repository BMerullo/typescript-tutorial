"use Client"
import React from "react"
import Shell from "../components/calculator/shell"

const calculator = () => {
  return (
    <>
      <section className="flex justify-center items-center h-[100vh] w-full bg-slate-600 text-red-700 text-2xl mt-100px">
        <Shell />
        {/* <div className=" w-[100px] h-[100px] bg-red-100">
          <div className="w-[20px] h-[20px] bg-testGreen"></div>
        </div> */}
      </section>
    </>
  )
}

export default calculator
