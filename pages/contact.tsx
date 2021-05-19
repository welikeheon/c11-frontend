import {
  FormHTMLAttributes,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import AppFooter from '../components/AppFooter';
import styles from '../styles/Contact.module.scss';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import { Form } from 'react-bootstrap';
import { IContactState } from '../components/interfaces/IContactState';
import escape from 'validator/lib/escape';
import trim from 'validator/lib/trim';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

export default function contact() {
  const [checked, setChecked] = useState<string[]>([]);
  const [contact, setContact] = useState<IContactState>({
    name: '',
    email: '',
    phone: '',
    message: '',
    contact_method: [],
    tos: false,
  });

  const onToggle = (method: string) => () => {
    const clickedContactMethod: number = checked.indexOf(method);
    const all = [...checked];

    if (clickedContactMethod === -1) {
      all.push(method);
    } else {
      all.splice(clickedContactMethod, 1);
    }
    setChecked(all);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name == 'email' && !isEmail(value)) {
    }
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (contact.tos === false) {
      swal({
        title: '잠시만요..!!',
        text: '개인정보처리방침에 동의해주셔야 제출하실 수 있습니다.',
        icon: 'warning',
      });
    } else {
      let sanitized_name = trim(escape(contact.name));
      let sanitized_email = isEmail(contact.email);
      let sanitized_phone = isMobilePhone(contact.phone, 'ko-KR');
      let sanitized_message = trim(escape(contact.message));

      // next.js 전송하는 방법 알아보기!!
    }
  };

  useEffect(() => {}, [contact]);
  useEffect(() => {
    setContact({
      ...contact,
      contact_method: [...checked],
    });
  }, [checked]);
  return (
    <Layout>
      <Head>
        <title>Contact | URL단축기</title>
      </Head>
      <Jumbotron>
        <h2>URL단축서비스와 이야기하기</h2>
        <p>
          저희는 항상 이야기를 듣고 있습니다!
          <br />
          URL단축서비스에 대한 제언, 감사, 궁금한 사항 등이 있다면 아래의 폼을
          작성해주세요! <br />
          24시간 이내에 답변해드립니다.
        </p>
      </Jumbotron>

      <Container>
        <Card className={styles.contact_card}>
          <Form>
            <Card.Body>
              <Form.Group controlId="formEmail">
                <Form.Label>이름</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="이름을 입력해주세요."
                  name="name"
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>이메일</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="이메일을 입력하세요."
                  name="email"
                  onChange={onChange}
                  autoComplete="off"
                />
                <Form.Text className="text-success">
                  {isEmail(contact.email)
                    ? ' ✓ 사용할 수 있는 이메일입니다.'
                    : ''}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>연락처</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="전화번호를 입력하세요."
                  name="phone"
                  onChange={onChange}
                  minLength={9}
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>내용</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="메시지를 입력하세요."
                  name="message"
                  minLength={8}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>어떤 방법으로 연락을 드리면 좋을까요?</Form.Label>
                <div key={`custom-inline-checkbox`} className="mb-3">
                  <Form.Check
                    custom
                    inline
                    name="contact_method"
                    value="email"
                    label="이메일 답변"
                    onChange={onToggle('email')}
                    type="checkbox"
                    id={`custom-inline-checkbox-1`}
                  />
                  <Form.Check
                    custom
                    inline
                    name="contact_method"
                    value="phone"
                    label="전화 연락"
                    onChange={onToggle('phone')}
                    type="checkbox"
                    id={`custom-inline-checkbox-2`}
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="개인정보처리방침에 동의합니다."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setContact({
                      ...contact,
                      tos: e.target.checked,
                    });
                  }}
                  defaultChecked={contact.tos}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                보내기
              </Button>
            </Card.Body>
            {/* <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Form>
        </Card>
      </Container>
      {/* <Jumbotron className={styles.Main} fluid="true">
        <Container>
          <div className="text-center">
            <Image src="/logo/logo.png" alt="C11 URL 단축서비스" fluid="true" />
          </div>
          <ShortenerForm />
        </Container>
      </Jumbotron> */}

      <AppFooter />
    </Layout>
  );
}
