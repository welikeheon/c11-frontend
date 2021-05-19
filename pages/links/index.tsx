import Head from 'next/head';
import Layout from '../../components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import ShortenerForm from '../../components/ShortenForm';
import AppFooter from '../../components/AppFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.scss';

export default function Links() {
  return (
    <Layout>
      <Head>
        <title>링크 | URL단축기</title>
      </Head>

      <AppFooter />
    </Layout>
  );
}
