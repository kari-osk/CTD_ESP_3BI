import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router"
import { NextSeo } from 'next-seo';

import content from "../strings/content"
import PageLayout from "@/layouts/Page"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {locale, locales, defaultLocale, pathname, asPath, push } = useRouter()

 const string = content[locale as "pt-BR" | "en-US"]

 console.log(string)

 const handleLanguage = (locale: string) => {
  push(pathname, asPath, {locale:locale})

 }

  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="descrição da pagina index" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <PageLayout title="titulo da pagina" description="descrição da pag" thumbnail="aqui vai o endereço da imagem"/>
      <main className={styles.main}>
        <h1>{string.text}</h1>
        <select name="" id="" onChange={(event) => handleLanguage(event.target.value)}>
          <option value="pt-BR">Português</option>
          <option value="en-US">Inglês</option>
        </select>
      </main>
    </>
  )
}
