import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import Rrssb from '../components/Rrssb';

const Create = ({ action = '/create' }) => {
  const router = useRouter();
  const [ResultUrl] = useState(router.query.original_url);

  function handleChangeResultURL(e) {
    e.preventDefault();
  }

  console.log('결과를 받음 ==> ', router.query);
  return (
    <Layout>
      <Head>
        <title>URL 생성 | URL단축기</title>
      </Head>
      <Jumbotron>
        <Container>
          <h1>URL단축서비스로 만들어주셔서 감사합니다.</h1>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              생성된 URL
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                onChange={handleChangeResultURL}
                value={ResultUrl}
              />
            </Col>
          </Form.Group>
          <hr />
          <Rrssb></Rrssb>
        </Container>
      </Jumbotron>
    </Layout>
  );
};

export default Create;
