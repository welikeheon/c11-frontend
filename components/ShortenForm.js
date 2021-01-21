import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import styles from '../styles/ShortenForm.module.css'
import Button from "react-bootstrap/Button"
import ShortenFormDetail from "./ShortenFormDetail"
import { useEffect, useState } from "react";
import classnames from 'classnames'
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'


export default function ShortenForm() {
    const [options, setLinkOptions] = useState("false");

    const [shorterState, setShorterState] = useState({
        original_url: '',
        link_password: '',
        customlink: '',
        link_expiry: '',
        statistics_open: ''
    });

    const onChange = event => {
        const {value, name} = event.target;
        setShorterState({
            ...shorterState,
            [name]: value
        });
    }

    const handleToggle = () => {
        setLinkOptions(prev=> !prev)
    }

    useEffect(() => {}, [shorterState])
    

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
                                size='lg'
                                className={styles['form-rounded']}
                                onChange={onChange}
                                value={shorterState.original_url}
                            />
                            <Form.Text className="text-center"><small className={styles['original-link-Helper']}>링크 단축서비스를 사용하시면 서비스 이용약관에 동의하시는 것으로 간주됩니다.</small></Form.Text>
                        </FormGroup>
                        <SlideDown closed={options}>
                            <ShortenFormDetail onChange={value => setShorterState({...shorterState, ...value})}/>
                        </SlideDown>
                        <div className='text-center'>
                            <Button variant="primary" size="lg">단축하기</Button>
                            <div className={styles.Divider} />
                            <Button variant="secondary" size="lg" onClick={handleToggle}>단축옵션</Button>
                        </div>
                        {/* CSRF 추가해야함. */}
                    </Form>
                </Col>
            </Row>
        </div>
    )
}