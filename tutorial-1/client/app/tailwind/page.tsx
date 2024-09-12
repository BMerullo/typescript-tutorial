import React from "react"

const page = () => {
  return (
    <section className="flex justify-center items-center">
      <article>
        <h1 className="text-3xl font-bold underline">Tailwind Sandbox</h1>
        <div>
          <button className="dark:md:hover:bg-green-700 p-2 rounded-md  bg-blue-700 mx-8 my-4">
            The Button
          </button>
          <button className="bg-blue-700 hover:bg-lime-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-900 p-2 rounded-md mx-8 my-4">
            Another Button
          </button>
        </div>
      </article>
    </section>
  )
}

export default page
