import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Navbar from '../../components/Navbar'
import CallToAction from '../../components/CallToAction'
import Destaques from '../../components/Destaques'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Venda from '../../components/Venda'
import Locacao from '../../components/Locacao'
import Footer from '../../components/footer'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
      <Head>
        <title>Real Smart - AN ESTATE COMPANY</title>
        <meta name="title" content="Real House - AN ESTATE COMPANY"/>
        <meta name="description" content="Descrição Real House - AN ESTATE COMPANY"/>
        <meta name="keywords" content="Keywords Real House - AN ESTATE COMPANY"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Portuguese"/>
        <meta name="revisit-after" content="15 days"/>
        <meta name="author" content="SisProf"/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1"/>
      </Head>
      <Navbar/>
      <main className={styles.main}>
          <div className={styles.SectionSession}>
              <div className={styles.SectionSessionContainer}> 

              </div>
          </div>
          
      </main>
      <CallToAction/>
      <Destaques/>
      <Banner/>
      <Venda/>
      <Locacao/>
      <Footer/>
    </>
  )
}
