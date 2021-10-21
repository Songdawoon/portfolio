import { v4 as uuidv4 } from 'uuid';
import Project_01 from '../images/project_01.png';
import Project_02 from '../images/project_02.png';
import Project_03 from '../images/project_03.png';
import Project_04 from '../images/project_04.png';
import Project_05 from '../images/project_05.png';
import Project_06 from '../images/project_06.png';
import Project_07 from '../images/project_07.png';


const projects = [
  {
    id: uuidv4(),
    name: 'Fora90',
    desc:
      '디자인에 옷을 입히다 디자인 플랫폼 Fora90 개발 및 운영중',
    img: Project_01,
    url:'https:fora90.com',
  },
  {
    id: uuidv4(),
    name: '공간 명현',
    desc:
      '디자인 그룹 공간 명현 반응형 웹페이지 컨설팅 및 개발',
    img: Project_02,
  },
  {
    id: uuidv4(),
    name: '더반 협동조합',
    desc:
      '예비적 사회적 기업 더반 협동조합 기업 웹사이트 및 모바일 사이트 개발',
    img: Project_03,
  },
  {
    id: uuidv4(),
    name: "Sushi Loca",
    desc:
      '라스베가스에 위치한 대형 스시 식당 sushi loca 웹 및 모바일 개발',
    img: Project_04,
  },
  {
    id: uuidv4(),
    name: '심리테스트 앱 개발',
    desc:
      '구매자의 스타일을 파악 어버이날 선물을 추천해주는 앱 개발',
    img: Project_05,
  },
  {
    id: uuidv4(),
    name: '조은 침대',
    desc:
      '국내 유일 통철제 프레임사용 조은 침대 쇼핑몰 개발',
    img: Project_06,
  },
  {
    id: uuidv4(),
    name: '내게 가까운 카페 Hello I am',
    desc:
      '내게 가까운 카페 Hello I am 웹페이지 및 모바일 페이지 기획 및 개발',
    img: Project_07,
  },
];

export default projects;
