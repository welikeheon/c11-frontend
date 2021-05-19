import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import styles from '../styles/ShortenForm.module.css';
import Button from 'react-bootstrap/Button';
import ShortenFormDetail from './ShortenFormDetail';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { useRouter } from 'next/router';
import { IShorterState } from './interfaces/IShorterState';

export default function ShortenForm() {
  const [options, setLinkOptions] = useState<boolean>(true);
  const router = useRouter();

  const [shorterState, setShorterState] = useState<IShorterState>({
    original_url: '',
    link_password: '',
    customlink: '',
    link_expiry: new Date(),
    statistics_open: 1,
  });

  const onChange = (event: any) => {
    const { value, name } = event.target;
    setShorterState({
      ...shorterState,
      [name]: value,
    });
  };

  const handleToggle = () => {
    setLinkOptions((prev) => !prev);
  };

  const handleSubmit = (e: any): any => {
    e.preventDefault();
    router.push({
      pathname: '/Create',
      query: {
        original_url: shorterState.original_url,
      },
    });
  };

  useEffect(() => {}, [shorterState]);

  return (
    <div>
      <Row>
        <Col md={12}>
          <Form>
            <FormGroup controlId="original_url">
              <Form.Control
                type="text"
                placeholder="https://"
                name="original_url"
                size="lg"
                className={styles['form-rounded']}
                onChange={onChange}
                value={shorterState.original_url}
              />
              <Form.Text className="text-center">
                <small className={styles['original-link-Helper']}>
                  링크 단축서비스를 사용하시면 서비스 이용약관에 동의하시는
                  것으로 간주됩니다.
                </small>
              </Form.Text>
            </FormGroup>
            <SlideDown closed={options}>
              <ShortenFormDetail
                onChange={(value: IShorterState) =>
                  setShorterState({ ...shorterState, ...value })
                }
              />
            </SlideDown>
            <div
              className={['text-center', styles['ShortenButtons']].join(' ')}
            >
              <Button
                variant="primary"
                size="lg"
                disabled={shorterState.original_url.length < 5}
                onClick={handleSubmit}
              >
                단축하기
              </Button>
              <div className={styles.Divider} />
              <Button variant="secondary" size="lg" onClick={handleToggle}>
                단축옵션
              </Button>
            </div>
            {/* CSRF 추가해야함. */}
          </Form>
        </Col>
      </Row>
    </div>
  );
}
