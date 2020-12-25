import Head from 'next/head'
import Mainlayout from '../../layout/mainlayout'
import { Banner, Product, About, ContactUs } from '../../component/pages'

export default function Home() {
  return (
    <div >
      <Head>
        <title>NRS CHICKEN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Mainlayout>
        <Banner />
        <Product />
        <ContactUs />
        <About />

      </Mainlayout>
    </div>
  )
}
