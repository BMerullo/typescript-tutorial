"use Client"
import React from "react"
import HamburgerMenu from "../components/Hamburger-Menu/HamburgerMenu"

const page = () => {
  return (
    <section className="flex justify-center items-center bg-blue-900">
      <article>
        <h1 className="text-3xl font-bold underline">Tailwind Sandbox</h1>
        <div>
          <button className="dark:md:hover:bg-green-700 p-2 rounded-md  bg-blue-700 mx-8 my-4 origin-top">
            The Button
          </button>
          <button className="bg-blue-700 hover:bg-lime-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-900 p-2 rounded-md mx-8 my-4">
            Another Button
          </button>
          <HamburgerMenu />
        </div>
        <div className="flex justify-center items-center ">
          <img
            className="w-64 md:w-96 lg:w-full"
            src="https://media.gq.com/photos/61d618c112a2618938a0340d/16:9/w_2560%2Cc_limit/GettyImages-90264289.jpg"
            alt="Joe Montana"
          />
        </div>
      </article>
    </section>
  )
}

export default page
