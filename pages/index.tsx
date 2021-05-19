import Head from 'next/head';
import Layout from '../components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import ShortenerForm from '../components/ShortenForm';
import AppFooter from '../components/AppFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>홈 | URL단축기</title>
      </Head>
      <Jumbotron className={styles.Main} fluid={true}>
        <Container>
          <div className="text-center">
            <Image src="/logo/logo.png" alt="C11 URL 단축서비스" fluid={true} />
          </div>
          <ShortenerForm />
        </Container>
      </Jumbotron>
      <Jumbotron
        className={['bg-light', styles['shadow-sm'], styles['mb-0']].join(' ')}
      >
        <Container>
          <Row>
            <Col md={10} className="mx-auto">
              <Row>
                <Col md={4} className="ml-auto">
                  <h2>
                    속도 &amp; 안정성으로
                    <br />
                    안정적으로 운영된
                    <br />
                    URL단축서비스
                  </h2>
                </Col>
                <Col md={6} className="mr-auto">
                  <p className={['lead', 'text-dark'].join(' ')}>
                    속도와 안정성을 바탕으로 안정적으로 운영되어온 대한민국의
                    URL단축서비스로 매일 <b>최소 80만 건</b> 이상의 링크가
                    연결되는 안정적인 서비스입니다.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron className={styles.introduce_urlshorter}>
        <Container>
          <Row>
            <Col sm={4} className={['mb-4', 'mb-sm-0'].join(' ')}>
              <div className={['h1', 'text-dark', 'mb-1'].join(' ')}>
                377.80M+
              </div>
              <div
                className={[
                  'h5',
                  'text-dark',
                  'fw-normal',
                  'opacity-70',
                  'mb-2',
                ].join(' ')}
              >
                누적 링크 연결
              </div>
            </Col>
            <Col sm={4} className={['mb-4', 'mb-sm-0'].join(' ')}>
              <div className={['h1', 'text-dark', 'mb-1'].join(' ')}>2.5K+</div>
              <div
                className={[
                  'h5',
                  'text-dark',
                  'fw-normal',
                  'opacity-70',
                  'mb-2',
                ].join(' ')}
              >
                매일 단축되는 링크 수
              </div>
            </Col>
            <Col sm={4} className={['mb-4', 'mb-sm-0'].join(' ')}>
              <div className={['h1', 'text-dark', 'mb-1'].join(' ')}>800K+</div>
              <div
                className={[
                  'h5',
                  'text-dark',
                  'fw-normal',
                  'opacity-70',
                  'mb-2',
                ].join(' ')}
              >
                위험한 링크로부터 차단 된 연결 수
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <AppFooter />
    </Layout>
  );
}
