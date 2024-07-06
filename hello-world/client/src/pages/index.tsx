import Head from "next/head"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

console.log("Hello World TEST TEST")
const age: number = 20

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="hello-world" content="Typescript tutorial -Hello world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Hello-World</h1>
      </main>
    </>
  )
}
