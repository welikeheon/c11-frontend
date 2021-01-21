import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './navbar.module.css'

export default function Navigation({children}) {
    return (
        <Navbar
            bg="light"
            expend="lg"
            className={styles['navbar-bg-shadow']}
        >
            <Navbar.Brand href="#home">
                <img className={styles.logo} src="/logo/logo_title.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="c11-navbar-nav" />
            <Navbar.Collapse id="c11-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">홈</Nav.Link>
                    <Nav.Link href="#home">URL 단축서비스</Nav.Link>
                    <Nav.Link href="#home">고객센터</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}