import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Mymodal from '../components/Mymodal'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Training</title>
        <meta name="description" content="Tailwind training" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Mymodal />
      <Features />
      <Testimonials />
      <Cta />
      <Footer />


    </div>
  )
}
