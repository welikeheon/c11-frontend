import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar bg="light" expand="lg" className={styles['navbar-bg-shadow']}>
        <Navbar.Brand href="#home">
          <Link href="/">
            <img className={styles.logo} src="/logo/logo_title.png" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="c11-navbar-nav" />
        <Navbar.Collapse id="c11-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="/notice">공지사항</Nav.Link>
            <Nav.Link href="/contact">악용사례신고</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/login">로그인</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <div>{children}</div>
    </div>
  );
}
