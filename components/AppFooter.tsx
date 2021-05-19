import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/appfooter.module.css';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faArrowUp, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'; // import the icons you need

export default function AppFooter() {
  return (
    <footer
      className={[styles['footer-area'], styles['footer-light']].join(' ')}
    >
      <div className={styles['footer-big']}>
        <Container>
          <Row>
            <Col md={3} sm={12}>
              <div className={styles['footer-widget']}>
                <div className={styles['widget-about']}>
                  <img
                    src="http://placehold.it/250x80"
                    alt=""
                    className={styles['img-fluid']}
                  />
                  <p>C11.kr URL단축서비스</p>
                  <ul className={styles['contact-details']}>
                    {/* <li>
                      <span className={styles['icon-earphones']}></span> 서비스 문의 및 제휴안내:
                      <a href="tel:344-755-111">344-755-111</a>
                    </li> */}
                    <li>
                      <FontAwesomeIcon icon={faEnvelopeOpen} />{' '}
                      <a href="mailto:hello@c11.kr">hello@c11.kr</a>
                      <br />
                      (서비스 관련 문의 안내)
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            {/* <Col md={3} sm={4}>
              <div className={styles['footer-widget']}>
                <div
                  className={[
                    styles['footer-menu'],
                    styles['footer-menu--1'],
                  ].join(' ')}
                >
                  <h4 className={styles['footer-widget-title']}>
                    Popular Category
                  </h4>
                  <ul>
                    <li>
                      <a href="#">Wordpress</a>
                    </li>
                    <li>
                      <a href="#">Plugins</a>
                    </li>
                    <li>
                      <a href="#">Joomla Template</a>
                    </li>
                    <li>
                      <a href="#">Admin Template</a>
                    </li>
                    <li>
                      <a href="#">HTML Template</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col> */}
            <Col md={3} sm={4}>
              <div className={styles['footer-widget']}>
                <div className={styles['footer-menu']}>
                  <h4 className={styles['footer-widget-title']}>
                    URL 단축서비스
                  </h4>
                  <ul>
                    <li>
                      <a href="#">소개합니다</a>
                    </li>
                    {/* <li>
                      <a href="#">URL 단축서비스의 동작원리</a>
                    </li> */}
                    <li>
                      <a href="#">응답소</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <div className={styles['footer-widget']}>
              <div
                className={[styles['footer-menu'], styles['no-padding']].join(
                  ' '
                )}
              >
                <h4 className={styles['footer-widget-title']}>고객센터</h4>
                <ul>
                  <li>
                    <a href="#">지원 포럼</a>
                  </li>
                  <li>
                    <a href="#">이용약관</a>
                  </li>
                  <li>
                    <a href="#">개인정보보호정책</a>
                  </li>
                  <li>
                    <a href="#">자주 묻는 질문(FAQ)</a>
                  </li>
                  <li>
                    <a href="#">개인정보보호와 안전</a>
                  </li>
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </div>

      <div className={styles['mini-footer']}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles['copyright-text']}>
                <p>
                  © 2015 - {DateTime.local().year}{' '}
                  <a href="#">Ebullient Joruney</a>. All rights reserved.
                  Created by <a href="#">Pete Lee</a> in Yangsan, Daejeon, AUS
                  Melbourne, and all over the world.
                </p>
              </div>

              <div className={styles['go_top']}>
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
