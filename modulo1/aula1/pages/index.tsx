import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from "react"
import axios from "axios"

const inter = Inter({ subsets: ['latin'] })


interface IPost {
  id: number,
  title: string,
  body: string,
}


export default function Home() {
  
  const [response, setResponse] = useState<IPost | null>()

  async function fetchData() {
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setResponse(result.data)
   
  }


  useEffect(() => {
    fetchData()
  }, [])



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {
          response.map((response) => (
            <div key={response.id}>
            <ul>
              <li>{response.body}</li>
            </ul>
          </div>
          ))
        }

      </main>
    </>
  )
}
