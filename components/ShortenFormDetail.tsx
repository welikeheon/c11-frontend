import { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classNames from 'classnames';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import styles from '../styles/ShortenFormDetail.module.css';

export default function ShortenFormDetail(props: any) {
  const fp = useRef();
  const [ShortDetail, setShortDetail] = useState({
    customlink: '',
    link_password: '',
    link_expiry: '',
    statistics_open: 1,
  });

  function onChange(event) {
    const { value, name } = event.target;
    console.log('On Change Short Detail ==> ', ShortDetail);
    setShortDetail({
      ...ShortDetail,
      [name]: value,
    });
    props.onChange(ShortDetail);
  }

  function onExpiryChange(_obj, str, fp) {
    setShortDetail({
      ...ShortDetail,
      link_expiry: _obj,
    });
  }

  useEffect(() => {
    console.log('.....>>>', ShortDetail);
    props.onChange(ShortDetail);
  }, [ShortDetail]);

  const { customlink, link_password, link_expiry } = ShortDetail;

  return (
    <Card className={classNames({ [styles.CardStyle]: true, 'mt-4': true })}>
      <Form.Group as={Row} controlId="customlink" className="mt-4">
        <Form.Label column={true} sm={2} className="text-center">
          커스텀 링크
        </Form.Label>
        <Col sm={9}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>https://c11.kr/</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              name="customlink"
              onChange={onChange}
              value={customlink}
            />
          </InputGroup>
          <Form.Text className="text-muted">
            커스텀 링크로 나만의 링크를 만드세요. 한글도 지원합니다.
          </Form.Text>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="link-password" className="mt-4">
        <Form.Label column={true} sm={2} className="text-center">
          링크 비밀번호
        </Form.Label>
        <Col sm={9}>
          <InputGroup>
            <Form.Control
              type="password"
              name="link_password"
              onChange={onChange}
              placeholder="비밀번호는 암호화되어 관리자도 알 수 없으니 잃어버리지 않게 조심하세요!"
              value={link_password}
            />
          </InputGroup>
          <Form.Text className="text-muted">
            링크에 비밀번호를 부여하고 인가된 사용자만 쓸 수 있게 합니다.
          </Form.Text>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="link-expiry" className="mt-4">
        <Form.Label column={true} sm={2} className="text-center">
          링크 유효기간
        </Form.Label>
        <Col sm={9}>
          <InputGroup>
            <Flatpickr
              className="form-control"
              data-enable-time
              name="link_expiry"
              onChange={onExpiryChange}
              ref={fp}
              options={{
                onReady(_dObj, _dStr, fp) {
                  fp.close();
                },
              }}
            />
            <InputGroup.Append>
              <InputGroup.Text>까지 접속할 수 있게 합니다.</InputGroup.Text>
            </InputGroup.Append>
            {/* <Form.Control
                            type="password"
                            name="link_expiry"
                            onChange={onChange}
                            column={true}
                            sm={8}
                            placeholder="비밀번호는 암호화되어 관리자도 알 수 없으니 잃어버리지 않게 조심하세요!"
                            value={link_password}
                        /> */}
          </InputGroup>
          <Form.Text className="text-muted">
            링크에 비밀번호를 부여하고 인가된 사용자만 쓸 수 있게 합니다.
          </Form.Text>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="link-statistics" className="mt-4">
        <Form.Label column={true} sm={2} className="text-center">
          링크 통계설정
        </Form.Label>
        <Col sm={9}>
          <InputGroup>
            <Form.Check
              type="radio"
              id="statistics_open_yes"
              name="statistics_open"
              value="1"
              onChange={onChange}
              label="네, 링크에 대한 통계를 공개하여 https://c11.kr/+단축링크를 통해 링크의 통계를 공개합니다."
            />
          </InputGroup>
          <InputGroup>
            <Form.Check
              type="radio"
              id="statistics_open_no"
              name="statistics_open"
              value="0"
              onChange={onChange}
              label="아니오, 이 링크에 대한 통계는 로그인하여 저만 볼 수 있게 하겠습니다."
            />
          </InputGroup>
          <Form.Text className="text-muted">
            링크에 비밀번호를 부여하고 인가된 사용자만 쓸 수 있게 합니다.
          </Form.Text>
        </Col>
      </Form.Group>
    </Card>
  );
}
