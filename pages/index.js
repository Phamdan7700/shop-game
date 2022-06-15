import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Home/slider'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Slider/>
    </Layout>
  )
}
