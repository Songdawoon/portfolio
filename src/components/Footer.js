import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">퍼즐 '한조각</h1>
          <PText>
            <p>리액트,리액트 네이티브 개발 전문</p>
            <p>웹개발 및 앱개발</p>
            <p>카페24 기반 쇼핑몰 커스텀 및 스킨개발</p>
            <p>AI화가앱 'AI Painter' 운영</p>
            <p>디자인에 옷을 입히다 플랫폼'Fora90' 운영</p>
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '031-515-1112',
                path: 'tel:0315151112',
              },
              {
                title: 'help@1am.co.kr',
                path: 'mailto:help@1am.co.kr',
              },
              {
                title: 'React, ReactNative, Web, Android, IOS',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/FORA90official?ref=bookmarks',
              },
              // {
              //   title: 'Twitter',
              //   path: 'http://twitter.com',
              // },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/fora90_official/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - 퍼즐'한조각 | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="http://onepuzzle.co.kr">
              퍼즐'한조각
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
