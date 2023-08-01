import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import About from "components/About"
import Navbar from "components/Navbar"
import Main from "components/Main"
import Skills from "components/Skills"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div>
      <Head>
      <title>Kai'lani Woodard</title>
    </Head>
  <Navbar />
  <Main />
  <About />
  <Skills />
  </div>
  )
}
