import Head from 'next/head';
import Layout from '../components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import ShortenerForm from '../components/ShortenForm';
import AppFooter from '../components/AppFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../styles/Home.module.scss';
import loginStyles from '../styles/login.module.scss';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>로그인 | URL단축기</title>
      </Head>
      <div
        className={[
          'd-flex',
          'align-items-center',
          'min-vh-100',
          'py-3',
          'py-md-0',
        ].join(' ')}
      >
        <Container>
          <Card className={loginStyles['login-card']}>
            <Row noGutters={true}>
              <Col md={5}>
                <Image
                  src="/login/login.jpg"
                  alt=""
                  className={loginStyles['login-card-img']}
                />
              </Col>
              <Col md={7}>
                <Card.Body className={loginStyles['card-body']}>
                  {/* <div className={loginStyles['brand-wrapper']}>
                    <img
                      src="/login/logo.svg"
                      alt="logo"
                      className={loginStyles.logo}
                    />
                  </div> */}
                  <p className={loginStyles['login-card-description']}>
                    안녕하세요! 계속하시려면 로그인해주세요.
                  </p>
                  <Form>
                    <Form.Group>
                      <Form.Label htmlFor="email" srOnly={true}>
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="이메일을 입력하세요"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label htmlFor="password" srOnly={true}>
                        password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                      />
                    </Form.Group>
                    <Form.Control
                      name="login"
                      id={loginStyles.login}
                      className={[
                        'btn',
                        'btn-block',
                        loginStyles['login-btn'],
                        'mb-4',
                      ].join(' ')}
                      type="button"
                      value="Login"
                    />
                  </Form>
                  <Link href="">
                    <a className={loginStyles['forgot-password-link']}>
                      비밀번호를 잃어버리셨나요?
                    </a>
                  </Link>
                  <p className={loginStyles['login-card-footer-text']}>
                    계정이 없으신가요?{' '}
                    <Link href="">
                      <a className="text-reset">하나 만들러 가기</a>
                    </Link>
                  </p>
                  <Nav className={loginStyles['login-card-footer-nav']}>
                    <Link href="#">이용약관이 적용됩니다.</Link>
                    <Link href="">개인정보보호정책</Link>
                  </Nav>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>

      <AppFooter />
    </Layout>
  );
}
