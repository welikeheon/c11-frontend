import {
  FormHTMLAttributes,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { GetStaticProps } from 'next';

import Head from 'next/head';
import Layout from '../../components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import AppFooter from '../../components/AppFooter';
import styles from '../styles/Contact.module.scss';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import { Table } from 'react-bootstrap';
import { IContactState } from '../../components/interfaces/IContactState';
import {
  INoticePosts,
  INoticeContents,
} from '../../components/interfaces/INoticePosts';
import escape from 'validator/lib/escape';
import trim from 'validator/lib/trim';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch();
  // const posts = await res.json();

  const posts: INoticeContents[] = [
    {
      id: 34,
      title: '서비스에 대한 문의사항은 이메일로 연락주세요.',
      createdAt: '2021.03.03',
    },
    {
      id: 33,
      title: '[알립니다] 지금부터 커스텀링크를 70자리까지 사용할 수 있습니다.',
      createdAt: '2021.01.15',
    },
    {
      id: 32,
      title: '[작업공지] 데이터베이스 구조 변경 작업 안내 (점검취소)',
      createdAt: '2021.01.11',
    },
    {
      id: 31,
      title:
        '[서버 추가점검 안내] 1일 오전 1시 서버 추가 점검이 예정되어 있습니다.',
      createdAt: '2020.09.30',
    },
    {
      id: 30,
      title:
        '[서버 점검 안내] 9월 30일 오전 1시부터 데이터베이스 점검이 예정되어 있습니다.',
      createdAt: '2020.09.28',
    },
    {
      id: 29,
      title:
        '[알림] 지면의 70% 이상을 차지하는 사이트의 경우 차단대상이 될 수 있습니다.',
      createdAt: '2020.06.15',
    },
    {
      id: 28,
      title: '[기능개선 안내] 링크 복사 기능이 생겼습니다.',
      createdAt: '2020.05.24',
    },
    {
      id: 27,
      title: 'C11 URI 단축서비스는 동시에 수십만의 접속을 처리할 수 있습니다.',
      createdAt: '2020.03.27',
    },
    {
      id: 26,
      title: '이제 링크 옵션에서 국문, 언더바, 대시를 사용할 수 있습니다.',
      createdAt: '2020.03.26',
    },
    {
      id: 25,
      title: '[완료] 서버 순단 현상 발생 안내',
      createdAt: '2020.03.05',
    },
    {
      id: 24,
      title: '[서버 점검 완료] 서버 점검 완료되었습니다.',
      createdAt: '2020.02.23',
    },
    {
      id: 23,
      title: '[공지] 서버 자원 교체 작업 안내 (2월 23일 오전 1시부터 계획됨)',
      createdAt: '2020.02.21',
    },
    {
      id: 22,
      title: '[완료] 서버 점검 안내 (12월 6일 오전 2시)',
      createdAt: '2019.12.05',
    },
    {
      id: 21,
      title: '[주의] 카카오톡 사칭 사기성 재태크 사이트를 주의하세요',
      createdAt: '2019.10.18',
    },
  ];

  return {
    props: {
      posts,
    },
  };
};

function Notice({ posts }: INoticePosts) {
  return (
    <Layout>
      <Head>
        <title>공지사항 | URL단축기</title>
      </Head>
      <Jumbotron>
        <Container>
          <h2>공지사항</h2>
          <p>URL단축서비스의 공지사항을 확인하세요!</p>
        </Container>
      </Jumbotron>

      <Container>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>게시일</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: INoticeContents) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <AppFooter />
    </Layout>
  );
}

export default Notice;
