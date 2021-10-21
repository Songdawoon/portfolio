import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                안녕하세요 <span>퍼즐'한조각 입니다</span>
              </p>
              <h2 className="about__heading">Web & App developer</h2>
              <div className="about__info">
                <PText>
                  디자인 플랫폼을 만들기 위해 백방으로 뛰며
                  <br />
                  좋은 업체를 찾기위해 꽤 많은 에너지와 자원이 들었습니다.
                  <br />
                  하지만 다들 자신있다는 말과 자신들의 기술력만 늘어놓을 뿐,
                  <br />
                  정작 우리가 무엇을 원하는지 무엇을 기획하고 있는지 꼼꼼히
                  따져주는 업체가 없었습니다.
                  <br />
                  <br />
                  이 불편함에 대한 니즈는 실제 서비스를 운영하면서도
                  <br />
                  계속 저희를 따라 다니게 되었고
                  <br />
                  우리가 가진 조각과 고객님들이 가지고 있는 조각을 가지고
                  <br />
                  퍼즐을 맞추듯이 큰 그림을 함께 고민하면서 조합해 나가는
                  <br />
                  개발업체를 만들어 보면 어떨까? 하는 생각이 모여
                  <br />
                  퍼즐 '한조각 브랜드를 런칭하기 까지 되었습니다
                  <br />
                  <br />
                  저희의 기술력만 말하지 않겠습니다
                  <br />
                  우리가 그리는 그림이 아닌 '고객님이 상상하던'
                  <br />
                  그 완성된 퍼즐을 함께 보며 맞추어 가겠습니다
                  <br />
                  <br />
                  퍼즐'한조각 과 함께 한다는 것은
                  <br />
                  외주 업체와 계약하는 것이 아니라
                  <br />
                  함께 그 서비스를 만들어 가는 '파트너'를 만난다는 것입니다.
                  <br />
                </PText>
              </div>
              {/* <Button btnText="Download CV" btnLink="#" /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Nasirabad Govt. High School, Chattogram']}
              />
              <AboutInfoItem
                title="Collage"
                items={['BAF Shaheen College Chattogram']}
              />
              <AboutInfoItem
                title="Varsity"
                items={['University Of Chitiagong']}
              />
            </div> */}
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT', 'REACT NATIVE']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'MongoDB']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'Illustrator', 'Finalcut']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2015-2016"
                items={['카페24 기반 쇼핑몰 개발 및 스킨 개발']}
              />
              <AboutInfoItem
                title="2016-"
                items={['1AM 쇼핑몰 런칭 및 운영']}
              />
              <AboutInfoItem
                title="2017"
                items={['(예비사회적 기업)더반 협동조합 웹페이지 개발']}
              />
              <AboutInfoItem
                title="2016"
                items={['FRC Korea 모바일 웹 개발']}
              />
              <AboutInfoItem
                title="2017"
                items={['Life Korea 한국 & 중국 쇼핑몰 개발']}
              />
              <AboutInfoItem
                title="2018"
                items={['(주)조은침대 웹 및 모바일 개발']}
              />
              <AboutInfoItem
                title="2018"
                items={['(주)공간 명현 웹, 모바일 개발']}
              />
              <AboutInfoItem
                title="2018"
                items={['꿈의 관광 Hello Vegas 웹 개발']}
              />
              <AboutInfoItem
                title="2019-"
                items={['상품에 옷을 입히다 Fora90 웹 모바일 개발 및 운영']}
              />
              <AboutInfoItem
                title="2020"
                items={['Sushi Loca PDF 모듈 부분 수정 및 교체']}
              />
              <AboutInfoItem
                title="2021-"
                items={['(주)비카스 코리아 쇼핑몰 개발 중']}
              />
              <AboutInfoItem
                title="2021"
                items={['(주)공간 명현 리뉴얼 개발']}
              />
              <AboutInfoItem
                title="2021-"
                items={['AI 딥러닝 AI Painter 앱 개발 중']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
