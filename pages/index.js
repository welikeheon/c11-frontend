import Head from 'next/head'
import Layout from '../components/Layout'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import ShortenerForm from '../components/ShortenForm'
import styles from '../styles/Home.module.css'
import classnames from 'classnames'

export default function Home() {
  return (
    <Layout>
      <Jumbotron className={styles.Main} fluid="true">
        <Container>
          <Image src="/logo/logo.png" alt="C11 URL 단축서비스" fluid="true" />
          <ShortenerForm />
        </Container>
      </Jumbotron>
    </Layout>
  )
}
