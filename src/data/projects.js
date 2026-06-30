export const profile = {
  brand: "CHL's",
  name: 'LEECHANHEE',
  title: '개발자 포트폴리오',
  headline: '서비스를 분석하고 구조를 이해한 뒤 구현하는 개발자',
  description:
    '문서와 데이터 흐름을 바탕으로 서비스 구조를 빠르게 파악하고, 그 이해를 구현과 발표까지 연결하는 강점이 있습니다.',
  intro:
    '프로젝트를 진행할 때 요구사항과 데이터 구조, 사용자 흐름을 먼저 이해하고 핵심 기능을 정리하는 편입니다. 구현 과정에서도 단순히 화면을 만드는 데서 끝내지 않고, 왜 이런 구조가 필요한지 설명할 수 있는 상태까지 가져가는 것을 중요하게 생각합니다.',
  shortIntro: '분석과 구조 이해를 바탕으로 구현 방향을 정리하는 개발자입니다.',
  strengths: ['요구사항과 흐름 분석', '서비스 구조 이해', '문서 기반 정리와 발표'],
  workflow: ['문제와 구조를 먼저 분석', '데이터 흐름과 예외를 이해', '구현 후 문서와 발표로 정리'],
  summaryKeywords: ['분석', '구조 이해', '문서 기반 정리'],
  education: [
    {
      period: '2024 ~ 현재',
      title: '방송통신대학교 컴퓨터과학과',
      description: '재학 중',
    },
    {
      period: '2025.10 ~ 2026.04',
      title: '휴먼교육센터 풀스택 개발 과정',
      description: '실무 중심 웹 개발 과정 수강',
    },
    {
      period: '2013 ~ 2018',
      title: '고려직업전문학교 게임과',
      description: '전공 과정 이수',
    },
  ],
  certifications: ['SQLD', 'ITQ 엑셀'],
  email: 'kdtlch3650@gmail.com',
  github: 'https://github.com/kdtlch3650-ctrl',
};

const asset = (path) => {
  const base = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
};

export const projectCategories = [
  { id: 'all', label: '전체' },
  { id: 'java', label: 'JAVA' },
  { id: 'react', label: 'REACT' },
  { id: 'ai', label: 'AI' },
  { id: 'infra', label: '인프라' },
];

const learningGoalSection = ({
  title,
  description,
  focusPoints,
  items,
  documentTitle,
  documentDescription,
  documentImage,
  referenceLinks = [],
}) => ({
  id: 'learning-goals',
  label: '학습 목표',
  title,
  description,
  focusPoints,
  items,
  documentTitle,
  documentDescription,
  documentImage,
  referenceLinks,
});

const doctorLinkSections = [
  learningGoalSection({
    title: 'React 기반 의료 서비스 화면 흐름 학습',
    description:
      'DoctorLink는 건강 기록, 사전 문진, 병원 예약 흐름을 React 화면 안에서 자연스럽게 연결하는 경험을 목표로 진행한 프로젝트입니다.',
    focusPoints: ['React 화면 구성', '사용자 입력 흐름', '의료 서비스 UX'],
    items: [
      {
        title: '사전 문진 입력 흐름',
        image: asset('/media/docs/doctorlink-overview.png'),
        points: [
          '진료 전 건강 상태와 생활 기록을 미리 정리하면 환자와 의료진 모두에게 도움이 된다는 문제의식에서 출발했습니다.',
          '의료 서비스처럼 입력 단계가 많은 화면에서 사용자가 이탈하지 않도록 흐름을 나누는 방법을 학습하고자 했습니다.',
        ],
      },
      {
        title: '예약과 캘린더 연동',
        image: asset('/media/docs/doctorlink-planning.png'),
        points: [
          'React 컴포넌트 기반으로 예약, 문진, 복약 체크, 캘린더 화면을 연결하는 방식을 경험했습니다.',
          '백엔드가 없는 환경에서 localStorage와 이벤트 흐름으로 화면 간 상태를 맞추는 방법을 익혔습니다.',
        ],
      },
      {
        title: '로컬 상태 관리 구조',
        image: asset('/media/docs/doctorlink-engineering.png'),
        points: [
          'React 페이지 컴포넌트를 중심으로 사용자 입력 흐름을 나누고, 캘린더와 사이드바 상태를 로컬 저장소에 연결했습니다.',
          '배포된 정적 React 프로젝트에서 사용자가 바로 확인할 수 있는 서비스 화면을 구성했습니다.',
        ],
      },
    ],
    documentTitle: 'DoctorLink 학습 목표',
    documentDescription: '의료 서비스 화면 흐름과 React 상태 관리 학습 방향을 요약했습니다.',
    documentImage: asset('/media/docs/doctorlink-engineering.png'),
    referenceLinks: [
      {
        label: '서비스 프로세스 흐름도 원본',
        href: 'https://drive.google.com/file/d/17sfOpinnojs19LjRU_cjDvLLl_T3tri4/view?usp=drive_link',
      },
      {
        label: '배포 페이지',
        href: 'https://kdtlch3650-ctrl.github.io/DoctorLink/',
      },
    ],
  }),
  {
    id: 'overview',
    label: '메인 소개',
    title: '지속적인 건강 기록 기반 사전 문진 서비스',
    description:
      'DoctorLink는 식단, 운동, 컨디션 기록을 바탕으로 문진 공백을 줄이고 환자와 의료진 모두가 활용할 수 있는 건강 관리 서비스로 기획되었습니다.',
    focusPoints: ['문제 정의', '서비스 메시지', '내 기여 범위'],
    items: [
      {
        title: '프로젝트 배경과 문제 정의',
        points: [
          '병원 방문 사이 공백이 길어질수록 문진은 환자의 기억에 의존하게 됩니다.',
          '제한된 진료 시간, 불충분한 정보 수집, 환자 기억 의존으로 인한 부정확한 정보 전달이 문제였습니다.',
          '대기 시간 증가와 반복 질문으로 인해 진료 효율이 떨어지는 상황을 개선하는 것이 목표였습니다.',
        ],
      },
      {
        title: 'DoctorLink 서비스 소개',
        points: [
          '환자의 상태 기록과 사전 문진을 연결해 지속적인 건강 기록을 만드는 서비스입니다.',
          '문진을 기록으로, 기록을 진료로 연결하는 구조를 핵심 메시지로 설정했습니다.',
          '환자와 의료진 모두에게 도움이 되는 건강 관리 서비스를 지향했습니다.',
        ],
      },
    ],
    documentTitle: 'DoctorLink PDF 보고서',
    documentDescription: '사용자가 전달한 DoctorLink PDF 원본을 바로 열어 볼 수 있습니다.',
    documentImage: asset('/media/docs/doctorlink-overview.png'),
  },
  {
    id: 'planning',
    label: '기획 / UX',
    title: '팀 구성, WBS, 핵심 기능 흐름',
    description:
      'PDF에 포함된 팀 역할과 WBS, 기능 흐름을 기준으로 프로젝트가 어떤 순서로 설계되고 구현되었는지 정리했습니다.',
    focusPoints: ['팀 역할 분담', '초기 기획 흐름', '기능 우선순위'],
    items: [
      {
        title: '팀 구성과 담당 역할',
        points: [
          '팀명은 Alt F4이며, 프로젝트 총괄·기획, 데이터 수집·모델링, 프론트엔드 구현으로 역할을 나눠 진행했습니다.',
          '내 담당 범위는 프론트엔드 개발 및 최종 발표, 병원 예약 기능 구현, 캘린더 기능 정리였습니다.',
          '헤더/사이드바/메인화면, 환자 관리 페이지, 로그인 및 커뮤니티 기능 등도 팀 단위로 분담해 구현했습니다.',
        ],
      },
      {
        title: 'WBS와 사용자 흐름',
        points: [
          '요구사항 분석, 기술 스택 설정, 메뉴트리, 사용자 시나리오, 스토리보드/와이어프레임, WBS 작성 순으로 초기 기획을 진행했습니다.',
          '메인 페이지, 건강기록, 병원예약, 캘린더, 커뮤니티, 설정, 로그인 화면을 중심으로 기능을 나눴습니다.',
          '건강정보 입력 단계부터 의사 진료까지 이어지는 전체 서비스 프로세스를 하나의 플로우로 설계했습니다.',
        ],
      },
    ],
    documentTitle: 'WBS 및 기획 자료',
    documentDescription: '팀 구성, 일정표, 기획 흐름이 포함된 DoctorLink PDF 자료입니다.',
    documentImage: asset('/media/docs/doctorlink-planning.png'),
    referenceLinks: [
      {
        label: 'WBS 원본 스프레드시트',
        href: 'https://docs.google.com/spreadsheets/d/1Te2k-kIHp2tZyP7RMNhDuw4vwSXvpsKxGbv_vNvArjw/edit?gid=2053249259#gid=2053249259',
      },
    ],
  },
  {
    id: 'engineering',
    label: '개발 / 설계',
    title: '기술 스택과 메인 구성 요소',
    description:
      '프론트엔드 중심 프로젝트이지만 사용자 건강 문진, 의료진 환자 관리, 피드백 루프까지 서비스 구조를 연결하는 관점으로 설명할 수 있습니다.',
    focusPoints: ['예약-캘린더 연동', 'localStorage 상태 관리', '문진 흐름 연결'],
    items: [
      {
        title: '기술 스택',
        points: [
          '마크업과 스타일링은 HTML5, CSS를 사용했습니다.',
          '프론트엔드는 React.js와 JavaScript(ES6+) 기반으로 구현했습니다.',
          '개발 도구는 VS Code, 협업 도구는 Git과 GitHub를 사용했습니다.',
        ],
      },
      {
        title: '실제 구현 기능과 연결 구조',
        points: [
          '병원 상세 페이지에서 예약 모달을 열고 날짜와 시간을 입력하면 localStorage 기반으로 캘린더 일정이 저장되도록 연결했습니다.',
          '캘린더 페이지에서는 예약 이벤트와 복약 이벤트를 함께 관리하고, 수정·삭제·초기화와 오늘 복용 완료 처리를 구현했습니다.',
          '사이드바의 빠른 작업 영역에서 약 복용 체크를 누르면 캘린더 상태와 동기화되도록 CustomEvent와 localStorage 흐름을 맞췄습니다.',
        ],
      },
    ],
    documentTitle: '기술 스택 및 프로세스 자료',
    documentDescription: '기술 스택, 메인 구성 요소, 서비스 프로세스 흐름도가 포함된 DoctorLink PDF입니다.',
    documentImage: asset('/media/docs/doctorlink-engineering.png'),
    referenceLinks: [
      {
        label: '서비스 프로세스 흐름도 원본',
        href: 'https://drive.google.com/file/d/17sfOpinnojs19LjRU_cjDvLLl_T3tri4/view?usp=drive_link',
      },
    ],
  },
  {
    id: 'trouble',
    label: '트러블 슈팅',
    title: '구현과 협업 과정에서 얻은 교훈',
    description:
      'PDF에는 직접적인 에러 로그보다 협업과 개발 과정에서 얻은 인사이트가 정리되어 있어, 이를 트러블슈팅과 개선 관점으로 재구성했습니다.',
    focusPoints: ['상태 동기화', '로컬 저장 제약 대응', '배포 마감 점검'],
    items: [
      {
        title: '협업 과정에서 드러난 이슈',
        points: [
          '초기 소통과 범위 설정이 명확하지 않으면 전체 개발 효율에 영향을 준다는 점을 체감했습니다.',
          '핵심 기능 우선순위를 먼저 정의하지 않으면 불필요한 구현과 코드 정리가 발생할 수 있음을 배웠습니다.',
          'GitHub 협업 과정에서 버전 관리와 커뮤니케이션 규칙의 중요성을 실제로 경험했습니다.',
        ],
      },
      {
        title: '구현 중 맞닥뜨린 제약과 해결 방식',
        points: [
          '백엔드가 없는 환경이어서 예약과 복약 상태를 localStorage에 저장하고, 페이지 간 상태 차이는 CustomEvent와 focus 이벤트로 보완했습니다.',
          '배포 단계에서는 GitHub Pages 경로와 이미지 누락, 게스트 접근 흐름까지 다시 손보며 실제 공개용 동작을 점검했습니다.',
        ],
      },
    ],
    documentTitle: '협업 인사이트 및 개선 방향',
    documentDescription: '협업 과정 인사이트와 향후 확장 방향이 포함된 DoctorLink PDF 원본입니다.',
    documentImage: asset('/media/docs/doctorlink-trouble.png'),
  },
  {
    id: 'retrospective',
    label: '느낀점',
    title: '기대효과와 프로젝트 회고',
    description:
      '환자 관점과 의료진 관점의 기대효과, 그리고 팀 프로젝트로서 얻은 인사이트를 회고로 연결할 수 있습니다.',
    focusPoints: ['환자 가치', '의료진 가치', '협업 회고'],
    items: [
      {
        title: '환자 / 의료진 관점 기대효과',
        points: [
          '환자는 문진 부담 감소, 건강 상태 기록, 진료 흐름 이해 측면에서 가치를 얻습니다.',
          '의료진은 사전 정리된 문진 데이터와 핵심 변화 포인트를 바탕으로 효율적인 진료 시간을 확보할 수 있습니다.',
          '결국 지속적인 건강 기록 기반 사전 문진 서비스는 환자와 의료기관 모두에게 가치를 제공하는 방향으로 정리되었습니다.',
        ],
      },
      {
        title: '프로젝트를 통해 얻은 인사이트',
        points: [
          '초기 소통과 방향 설정, 기능 우선순위 관리가 프로젝트 품질과 속도에 직접 영향을 준다는 점을 배웠습니다.',
          '협업 도구 활용 경험과 백엔드 필요성 인식을 통해 화면 구현을 넘어 서비스 구조를 함께 보게 되었습니다.',
          '문진을 기록으로, 기록을 진료로 연결하는 서비스라는 한 문장 메시지를 중심으로 프로젝트를 설명할 수 있게 되었습니다.',
        ],
      },
    ],
    documentTitle: '결론 및 마무리',
    documentDescription: '기대효과, 협업 인사이트, 결론이 정리된 DoctorLink PDF 문서입니다.',
    documentImage: asset('/media/docs/doctorlink-retrospective.png'),
  },
];

const oneulFarmSections = [
  learningGoalSection({
    title: '커머스 흐름과 외부 API 연결 구조 학습',
    description:
      'OneulFarm은 농산물 시세, 레시피, 주문, 결제, 배송 흐름이 하나의 커머스 서비스 안에서 어떻게 연결되는지 학습하기 위해 진행한 프로젝트입니다.',
    focusPoints: ['풀스택 커머스 흐름', '외부 API 연동', '주문/배송 상태 관리'],
    items: [
      {
        title: '공공 API 연동',
        image: asset('/media/docs/oneulfarm-engineering.png'),
        points: [
          '공공 시세 데이터를 단순 정보가 아니라 실제 구매 판단과 절약 경험으로 연결하는 구조를 확인하고자 했습니다.',
          '사용자 계정, 상품, 주문, 결제, 배송이 이어지는 커머스 흐름을 프로젝트 단위로 경험하는 것이 목표였습니다.',
        ],
      },
      {
        title: '커머스 주문 흐름',
        image: asset('/media/docs/oneulfarm-overview.png'),
        points: [
          'React와 Spring Framework, MyBatis, OracleDB를 연결해 화면과 데이터가 이어지는 풀스택 구조를 학습했습니다.',
          'KAMIS, 레시피 API, PortOne, OpenAI API처럼 외부 서비스를 실제 기능에 붙일 때 필요한 예외 흐름을 경험했습니다.',
        ],
      },
      {
        title: '데이터 기준 정리',
        image: asset('/media/docs/oneulfarm-trouble.png'),
        points: [
          'React 화면에서 Spring API를 호출하고, MyBatis를 통해 OracleDB의 회원, 주문, 배송 데이터를 다루는 구조로 구현했습니다.',
          '시세 데이터와 레시피, 장바구니, 결제, 배송 상태를 연결해 사용자가 구매 흐름을 끝까지 따라갈 수 있게 설계했습니다.',
        ],
      },
    ],
    documentTitle: 'OneulFarm 학습 목표',
    documentDescription: '커머스 서비스 구조와 외부 API 연동에서 학습한 핵심 방향을 요약했습니다.',
    documentImage: asset('/media/docs/oneulfarm-engineering.png'),
    referenceLinks: [
      {
        label: '시스템 아키텍처 원본',
        href: 'https://www.figma.com/board/3DA1PbA0J58eG2HIPOTEnX/%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90?node-id=0-1&t=rDDYZlpcM89BqaS7-1',
      },
      {
        label: '프로젝트 GitHub',
        href: 'https://github.com/kdtlch3650-ctrl/oneulFarm',
      },
    ],
  }),
  {
    id: 'overview',
    label: '메인 소개',
    title: '시세 데이터와 레시피, 구매 흐름을 연결한 농산물 커머스',
    description:
      'OneulFarm은 공공 시세 데이터를 실제 구매 판단에 연결하고, 레시피와 식단 추천까지 이어서 사용자가 절약 가치를 체감하도록 설계한 농산물 직거래 프로젝트입니다.',
    focusPoints: ['서비스 방향 재정의', '절약 가치 경험', '내 구현 범위'],
    items: [
      {
        title: '서비스 방향을 다시 좁힌 과정',
        points: [
          '초기에는 시세 분석 기능을 넓게 가져가려 했지만, 발표 피드백을 거치며 상품과 레시피, 소비자 이익을 한 흐름으로 묶는 방향이 더 중요하다는 점을 확인했습니다.',
          '기획이 진행될수록 단순 시세 정보 제공보다 시세 기반 레시피 재료 판매와 식단 제안처럼 실제 구매 행동으로 이어지는 구조가 서비스 핵심이라는 판단을 내렸습니다.',
          '결과적으로 OneulFarm은 시세에서 식탁까지 이어지는 경험을 만드는 서비스라는 한 문장으로 정리할 수 있게 되었습니다.',
        ],
      },
      {
        title: '프로젝트 목표와 핵심 가치',
        points: [
          '공공 시세 데이터를 사용자 구매 판단에 연결해 가격 비교와 절약 효과를 더 직관적으로 전달하는 것을 목표로 했습니다.',
          '레시피 콘텐츠와 상품을 연결해 재료 활용도를 높이고, 레시피 탐색이 실제 장바구니와 결제로 이어지도록 설계했습니다.',
          'AI 챗봇을 통해 사용자 상황에 맞는 식단을 제안하고, 그 식단이 다시 재료 구매 흐름과 연결되는 구조를 프로젝트 차별점으로 잡았습니다.',
        ],
      },
    ],
    documentTitle: 'OneulFarm 프로젝트 개요',
    documentDescription: '서비스 배경, 목표, 방향성 변화가 정리된 OneulFarm 최종 보고서 페이지입니다.',
    documentImage: asset('/media/docs/oneulfarm-overview.png'),
  },
  {
    id: 'planning',
    label: '기획 / UX',
    title: '요구사항, 메뉴트리, 유스케이스와 스토리보드',
    description:
      '요구사항 명세서부터 메뉴트리, 사용자 시나리오, 스토리보드까지 문서 흐름을 연결해 서비스 구조를 설계했습니다.',
    focusPoints: ['요구사항 정리', '메뉴 구조와 사용자 흐름', '스토리보드 상세 링크'],
    items: [
      {
        title: '요구사항과 사용자 흐름 설계',
        points: [
          '메인, 회원, 시세 분석, 상품, 주문, 레시피, 추천, 마이페이지, 관리자 기능을 큰 축으로 나누고 사용자 사이트와 관리자 사이트를 분리해 요구사항을 정리했습니다.',
          '사용자는 메인에서 레시피를 보고 장바구니와 결제, 주문 관리, 리뷰 작성까지 이어지고, 관리자는 주문 접수와 취소를 처리하는 흐름으로 유스케이스를 구성했습니다.',
          '이 구조 덕분에 화면을 개별 페이지가 아니라 하나의 구매 여정으로 바라보며 UX 우선순위를 잡을 수 있었습니다.',
        ],
      },
      {
        title: '일정 관리와 내 작업 계획',
        points: [
          '프로젝트는 기획/설계, 컴포넌트 개발, 로직 고도화, 안정화/테스트, 최종 발표 순으로 진행되었고, WBS와 역할 분담을 기준으로 단계별 작업을 나눴습니다.',
          '내 일정표에는 사용자 구매 행동 분석 모듈, 개인별 절약 가치 리포트 생성, 성과 지표 시각화와 발표 전략이 잡혀 있었고, 실제 구현도 이 흐름에 맞춰 확장되었습니다.',
          '문서와 구현을 따로 두지 않고, 기획 단계에서 정의한 사용자 흐름을 화면과 발표 자료까지 연결하는 방식으로 정리했습니다.',
        ],
      },
      {
        title: '스토리보드를 통해 정리한 화면 구조',
        points: [
          '스토리보드에서는 메인, 레시피, 장바구니, 결제 흐름을 중심으로 어떤 정보가 먼저 보여야 하는지와 주요 액션이 어디로 연결되는지를 시각적으로 정리했습니다.',
          '포트폴리오 안에서는 요약 이미지를 먼저 보여주고, 별도 상세 페이지 링크로 전체 스토리보드 문서를 바로 확인할 수 있도록 구성했습니다.',
        ],
      },
    ],
    documentTitle: '스토리보드 및 기획 자료',
    documentDescription: '기획 단계에서 정리한 메인, 레시피, 장바구니 흐름과 스토리보드 요약 화면입니다.',
    documentImage: asset('/media/docs/oneulfarm-planning.png'),
    referenceLinks: [
      {
        label: '요구사항 명세서',
        href: 'https://docs.google.com/spreadsheets/d/1WY09qSqDNetawfsRKkiTWXQAq53MvXQbMHVZ7GdSnwI/edit?gid=156209505#gid=156209505',
      },
      {
        label: '메뉴트리 원본',
        href: 'https://app.diagrams.net/#G1PXGSQnIA-cZc4hoNHSX20dN91GqD2O-n#%7B%22pageId%22%3A%22VyNLXTkTrnrqFs4obHL-%22%7D',
      },
      {
        label: '유스케이스 원본',
        href: 'https://canva.link/ybwv6zijiuyx6zc',
      },
      {
        label: 'WBS 원본 문서',
        href: 'https://docs.google.com/spreadsheets/d/1WY09qSqDNetawfsRKkiTWXQAq53MvXQbMHVZ7GdSnwI/edit?gid=1172811657#gid=1172811657',
      },
      {
        label: '스토리보드 상세 페이지',
        href: 'https://docs.google.com/presentation/d/1WBMeRCixzqa4nG1pfya41ygAKmS3dcvj9Ws5LGwn-uw/edit?usp=sharing',
      },
      {
        label: '스토리보드 Figma 원본',
        href: 'https://www.figma.com/design/iQTANKc3lEyPhdvgSBkaIt/%EC%98%A4%EB%8A%98%ED%8C%9C-%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C?node-id=5-210&t=aRiUODQ0Mv5yYgCD-1',
      },
      {
        label: '스토리보드 PDF',
        href: asset('/media/oneulfarm-storyboard.pdf'),
      },
    ],
  },
  {
    id: 'engineering',
    label: '개발 / 설계',
    title: 'React · Spring · Oracle 구조와 주문/배송 흐름 구현',
    description:
      '프론트엔드와 백엔드를 함께 연결하며 마이페이지, 대시보드, 주문/배송 흐름, 관리자 화면까지 구조적으로 확장한 과정입니다.',
    focusPoints: ['React + Spring 구조', '주문/배송 상태 관리', 'DFD 상세 링크'],
    items: [
      {
        title: '기술 스택과 시스템 아키텍처',
        points: [
          '프론트엔드는 React와 JavaScript, 백엔드는 Java Spring Framework와 MyBatis, 데이터베이스는 OracleDB를 사용했습니다.',
          'KAMIS 시세 데이터, 식품의약품안전처 레시피, PortOne 결제, OpenAI API, OAuth 로그인, 메일 전송 등 외부 서비스가 Spring API 서버와 연결되는 구조로 설계했습니다.',
          '시스템 아키텍처와 ERD, AI 챗봇 DFD를 함께 정리해 데이터가 어떤 경로로 흐르고 어디에서 구매 경험으로 이어지는지 설명할 수 있게 했습니다.',
        ],
      },
      {
        title: '직접 구현한 사용자 계정·대시보드 기능',
        points: [
          '회원정보 조회/수정, 비밀번호 변경, 프로필 사진 업로드, 배송지 추가·삭제·기본 배송지 관리 같은 마이페이지 기능을 프론트와 백엔드까지 연결했습니다.',
          '마이페이지 주문관리와 대시보드 요약 API를 연동하고, 월별 절약 흐름 카드와 핵심 절약 금액 강조, 구매 패턴 시각화처럼 절약 가치가 보이는 화면을 다듬었습니다.',
          '내 활동 탭에서는 찜한 상품, 리뷰 관리, 별점 버튼, 다중 이미지 업로드, 상품 상세 연결까지 이어지는 흐름을 구현해 계정 경험을 넓혔습니다.',
        ],
      },
      {
        title: '주문·배송·관리자 흐름 고도화',
        points: [
          '주문 취소 요청, 운영자 취소 처리, 구매 확정, 주문 상세 이력, 배송 추적 이력, 배송사 전용 관리 화면까지 주문과 배송 상태를 분리해 구조적으로 정리했습니다.',
          '고객·관리자·배송사 화면에서 같은 주문 데이터를 서로 다른 관점으로 보여주기 위해 주문 상태 이력과 배송 추적 타임라인을 DB와 화면에 함께 연결했습니다.',
          '시연을 위해 관리자 주문 접수 후 자동 배송 전환 흐름과 관련 문서, 테스트 기준까지 정리해 발표 상황에서도 서비스 흐름이 자연스럽게 이어지도록 만들었습니다.',
        ],
      },
    ],
    documentTitle: 'AI 챗봇 DFD 및 시스템 설계',
    documentDescription: 'AI 챗봇, 장바구니, 결제, 로그인 흐름을 세부적으로 정리한 DFD 이미지입니다.',
    documentImage: asset('/media/docs/oneulfarm-engineering.png'),
    referenceLinks: [
      {
        label: '시스템 아키텍처 원본',
        href: 'https://www.figma.com/board/3DA1PbA0J58eG2HIPOTEnX/%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90?node-id=0-1&t=rDDYZlpcM89BqaS7-1',
      },
      {
        label: 'ERD 원본',
        href: 'https://mermaid.live/edit#pako:eNrdW21v2zgS_iuGgQVaoC1iO2_ON0aibcLWSyk6bYoAgtbWJcbGds6x29tt-t-PpF4sShxKdrIH7OVDgWSeociZZ4YzI_Vne7aex-2rdryxF9H9JlrerVr8xxuwcBpgGrR-Jn8QP-7Uucb0Xaf_viVkoeu1_PFefIOoNUK0--7sJAUQWyPtnHAxdhCZaITds7P3LR8FwReP2sDSLrHGLnKwTp2L_ZHnQjLqTSBRwBCbBnuhkLzrvG8x7PhhtqPw1t0jGHEw13L8lkUxYtgOEdNJp75tkNp4gsvSwnHFgag3IBMcEgcNcTilsN0UoMlEChB_ZZCbVKDDNx2yWx9XKVHBBuRbAXY98a5LAG4TlAB-3a1U0oWBZxE0CZFleVOXARRUQWUyarg6GMPmuCE2pgYrSHlYQ-ocV2L3sURRDMMXt6cWCy0OGXr0FrBKJjYG5x6kcATep24nwAayfcL-KG5R65PMmMk6ehpLjEfJkLiAV6cuYRqihl2RYKyx4OAXTIYjCBQgzlWfEktP94B51jj8zG4LKUOw3MaBRYnPiOdWkwkJwgCjwHPRBEpD4qnlXPQmBJLkRbZNcQBl9VR6bCwJalFsEZ9gl5nyzx4EJWth4W_EDy3PxlC6S3fbqZF3tW6w8QBNJ-xtsrligdyIwPnF1njSJzeYhwBfNeBM1LiLYeoEIRpSjB0MJsFc_hqfJY9SE3vBVPIZts4WicScr2S2B3afXlTgzgu5RJ-8hS1rb7vaW858r4H3WfkeK-idieuJspCXDMVrpWBUfkO4h2feqdh2gMNrxKwRYFQpO9yo__sEnZ_GlKkzjJJoM0hXgQC5WoIoHmCKXSt5WEMo8xgvMEpYEf0FTOAiPxh5TPAAIuCQIhssO6e-PyE8QPX8kztCFpvyjdTuPMXlBkGOqIwA8MQbkoARK-A5NqiCzgTG8hyHBAG_ykKqHE9ZqYDSLpWgPDbip8z3Bj_UJoGFeKmtf-JJEaIlRXJ548kEXU-wAUJFleYSd2jgVsoA46YV2wtE6PODjoclyuSLAESR8ZKzwZDOmhcHau5Ia54R9zpcPmYoOH3k6WVwVHo5yZ9hcl8OMVZoiXf49WYfUcJ1988RHHC45ShJPViL5tzyaAO25woG6IC4EHFMuNREABh_9bEluCCbrkRDn2ZVeJbyhNJxFWruOm2BJG9s19NFtqZSKRUUpJBvoaYwS8em9ofwnh6qLGUYSoAhBB1Ex5iVUnbT5gPdDMG2Qsgd4prl6CsgT3L2CLk8gNXsKTNQ3VWVZCCP5yn8qsYw9ZQwMA8rH_AUl7ym8qv1Qid3dFbNQL1EDSMEY8bEtWHG7LdLkTs24eSoorKVrCy0PJc3BYynAGXOBHCTZ3KXGehXkhcLeovx7uNvmk8kzncMBarz6gK1GOXaSyYtS3xEZQqEgynZ7RD5-mAK0I3I3lQfML0TcR3aw3Lz0DBcZBcMtUaJEExjyRD1K7-zxKWQguHJVLaaEtXwuEIdFnneOBRHArhmk8GAWLyXhi5zC014H4ADaL5pmmu-OifxOpGBozJ6aNv8JpEinzuk3tQ3bUwCjFM0CqfHTtJ2iBXG-BZsS4Rc33coDIR7wHSTDR1zqI1EqjOZKEmFB1kItPLR1eznKXIZKZL_TQwgJwfQnE4KXzPxSRbQ5oteLi7XeJrOyNhhii5NjubNqGwUNsDYWPmWV_nnjB33LpeGfQUhTCGxBxiYkTNncFzdZZj8KDnfNKvQBo3i8GB6LfkFVsCy8DMU0t308hbG1JMPvt4b99O3hrlsKj3UE0oUZms4mI08uwZUDtaSx1KUchmUeltStVWxqyMQa41WyqIbMFMe_MfaKSlQptQwM5EGYJS3pcLXrgcYMt8K3NoGI-L7phe5YgF8lJ2-kGA0IQFEp0x8YM6vD-yDStWQG5Cfj8C03wMMO21SWBQX0rtVvmoB-drkNAHDUAUmRAefoDD7F-oB_tyk1j58z8ZXKnuAYf_Z8YCQ0tfk5lcbB44I0uO88XigsYuSW0S0obxEoce0bjcEfwFbNyF881BterhqLaAD8UUQ41FWoqjluQy77O_-yEVjTCOrixBjXGaW_794XdiQjJJODnfcaJLcXlDboGCO4-dp8v4hCG8xohVpN5PKJ2nNkzDTMjQEzV5f6Yu7N2m9xGuh8Bq5LqbgK1YhNA9neHk7wf8IEqqZf0Lc8SGJv9Fckf9LYW9g1z68avrttxaNH6PtYr16flg8PZe_W3x5-fhx_RP8puyqddd-iJ7v2nV62RczTRTK32wIneh-E8dmtfKrOaG2jFbRfY2enG0J8PrHyoxMpwkC-_QYzWrWzYtRgf8jjp_M8PQyFOAfm8U2bmBUNVsJzU08W2_m8by1WAl1w3dvRcOlX6KJBWbr1TZaqHYw6qrfUsglom18v94s_kqOUP3irfro9NbSkEOnU33k024z44r83N8XUZ26hiZP0ewPzpN5q_7h-pczCdeenlvbdUt8CnzQKs7edOvlU7SJn1P3GVbYT_ZkdMyFz7frGqXC8EPynTNl08hmCpUbPkxTowrt3XPOToNyIRg4pePF9wqXVBLU-Pc-XsWbaFslpPIutIGDltF29sAP8GOxfVDXSl9DlF2UDKjlHjbrnZoCqirVBjGxwL93i03cTFe2Y5pAqioADhIpZLmMV_Pa59W4qLgh_T4LYb94fNw9b4WP5q3f_1QXkgkaNqwuZRUgYNAU9SoTYzhqFqvZ426ueqOg9PKizLWS7LKoBFlVI5_xCJV5_MgNWghO7QRTbvKl7I1ZtGr9Hrc28fdF_COel50icRU_6jNw-wOn7WLevtpudvGH9jLeLCPxa1sWdHft7UO85Lku2fG_ot3jVmj-4mpP0erber3MNDn37x-yX3ZPc-7n9D9K5AjOuHhjrXerbfuq0-vIJdpXP9v_aV997F1efuqd9i77l_1O_-Ti9Pz8Q_vP9lW_--nyot_tn51enJ_3Lk4vfn1o_yWf2vl02ut1zi9O-v3-Wfe8f3H567_C279N',
      },
      {
        label: '테이블 명세서',
        href: 'https://docs.google.com/spreadsheets/d/1WY09qSqDNetawfsRKkiTWXQAq53MvXQbMHVZ7GdSnwI/edit?gid=1576334451#gid=1576334451',
      },
      {
        label: 'DFD 상세 페이지',
        href: 'https://www.figma.com/board/dB9kASLgFZPd8cGuFF5Tgu/AI%EC%B1%97%EB%B4%87-DFD?node-id=0-1&t=HQfqB1TTgG9DzuYk-1',
      },
      {
        label: '프로젝트 GitHub',
        href: 'https://github.com/kdtlch3650-ctrl/oneulFarm',
      },
    ],
  },
  {
    id: 'trouble',
    label: '트러블 슈팅',
    title: '데이터 기준 불일치와 외부 API 안정성 이슈 해결',
    description:
      'OneulFarm에서는 가격 비교 기준과 외부 연동 구조처럼 서비스 신뢰도에 직접 연결되는 문제를 먼저 다뤘습니다.',
    focusPoints: ['비교 기준 통일', '외부 API 안정성', '상태 흐름 정리'],
    items: [
      {
        title: '가격 비교 데이터 불일치 해결',
        points: [
          '판매 단위와 평균가 산정 단위가 달라 화면마다 다른 비교값이 보이면서 사용자가 절약 금액을 신뢰하기 어려운 문제가 있었습니다.',
          '이를 해결하기 위해 가격 비교 기준값을 하나로 통일하고, 절약률과 절약 금액 계산도 동일한 기준으로 맞췄습니다.',
          '프로젝트를 진행하면서 데이터 기준이 한 번만 어긋나도 시세 기반 서비스의 설득력이 크게 떨어진다는 점을 체감했습니다.',
        ],
      },
      {
        title: '외부 API 연동 속도와 안정성 보완',
        points: [
          '외부 API를 직접 여러 번 호출하는 구조에서는 응답 지연, 타임아웃, 연결 오류 때문에 로딩 속도와 기능 안정성이 함께 흔들렸습니다.',
          '예외 처리, 재시도, fallback, 캐시 도입을 통해 급한 장애를 막고, 중복 호출과 불필요한 연산을 줄이는 방향으로 구조를 정리했습니다.',
          '이 경험을 통해 외부 연동은 기능 추가보다 실패 상황 설계가 먼저라는 점을 확실히 배우게 되었습니다.',
        ],
      },
      {
        title: '주문과 배송 상태 흐름 충돌 정리',
        points: [
          '실제 구현 과정에서는 주문 상태와 배송 상태가 섞여 고객·관리자 화면 문구와 처리 순서가 어색해지는 문제가 반복적으로 발생했습니다.',
          '주문 이력, 취소 이력, 배송 추적 이력을 분리하고 공통 파생 로직을 유틸로 정리해 각 화면에서 같은 데이터를 일관되게 해석하도록 개선했습니다.',
        ],
      },
    ],
    documentTitle: '트러블 슈팅 자료',
    documentDescription: '가격 비교 기준 통일과 외부 API 안정성 보완 과정을 정리한 OneulFarm 보고서 페이지입니다.',
    documentImage: asset('/media/docs/oneulfarm-trouble.png'),
    referenceLinks: [
      {
        label: '테스트 케이스',
        href: 'https://docs.google.com/spreadsheets/d/1WY09qSqDNetawfsRKkiTWXQAq53MvXQbMHVZ7GdSnwI/edit?gid=651143941#gid=651143941',
      },
    ],
  },
  {
    id: 'retrospective',
    label: '느낀점',
    title: '기능 수보다 서비스 목적과 초기 계획의 중요성을 배운 프로젝트',
    description:
      '프로젝트가 커질수록 화면 수보다 서비스 목적과 데이터 기준, 그리고 초반 설계가 더 중요하다는 점을 크게 느낀 작업이었습니다.',
    focusPoints: ['서비스 목적 중심 사고', '초기 계획의 중요성', '다음 버전 보완'],
    items: [
      {
        title: '프로젝트를 통해 느낀 점',
        points: [
          '주제를 처음에는 넓게 잡았지만 피드백을 통해 방향을 구체화하는 과정에서, 화면 구성과 기능 설계 역시 서비스 목적 위에서 결정된다는 점을 실감했습니다.',
          '기능을 많이 넣는 것보다 문제 정의와 핵심 가치가 먼저 정리되어야 화면과 데이터 설계가 더 단단해진다는 점을 배우게 되었습니다.',
          '이번 프로젝트를 통해 꼼꼼한 초기 계획과 프로토타입, 발표 전 메시지 정리가 실제 구현만큼 중요하다는 점을 확실히 체감했습니다.',
        ],
      },
      {
        title: '다음 단계에서 보완하고 싶은 점',
        points: [
          '가격 비교와 할인율처럼 여러 화면에서 쓰는 데이터는 더 명확한 공통 기준으로 묶어 사용자 혼란을 줄이고 싶습니다.',
          '레시피 재료와 판매 상품을 연결하는 매핑 정확도를 높이고, 실패·취소 같은 예외 흐름 테스트도 더 촘촘하게 보완하고 싶습니다.',
          '외부 API 의존 구간은 캐시와 예외 처리 구조를 더 강화해 실제 서비스 환경에서도 안정적으로 운영할 수 있도록 개선하고 싶습니다.',
        ],
      },
    ],
    documentTitle: '회고 및 보완사항',
    documentDescription: '팀 회고와 개인 느낀점, 앞으로의 보완 방향이 정리된 OneulFarm 자료입니다.',
    documentImage: asset('/media/docs/oneulfarm-retrospective.png'),
  },
];

const hashTripSections = [
  learningGoalSection({
    title: 'Java 기반 추천 서비스 구조 학습',
    description:
      'hashTrip은 사용자 성향과 공공데이터를 연결해 여행지를 추천하고, 추천 결과를 일정 작성 흐름으로 이어가는 Java 웹 서비스 구조를 학습한 프로젝트입니다.',
    focusPoints: ['Spring MVC 구조', '추천 데이터 흐름', 'DB/API 연결'],
    items: [
      {
        title: '공공데이터 추천 흐름',
        image: asset('/media/docs/hashtrip-overview.png'),
        points: [
          '많은 여행 정보 중 사용자 취향에 맞는 장소를 빠르게 찾도록 돕는 추천 흐름을 구현하고자 했습니다.',
          '성향 분석 결과가 실제 추천 결과와 일정 작성 화면으로 이어지는 서비스 구조를 경험하는 것이 목표였습니다.',
        ],
      },
      {
        title: 'Spring MVC 데이터 구조',
        image: asset('/media/docs/hashtrip-engineering.png'),
        points: [
          'Java Spring MVC, JSP, MyBatis, OracleDB 기반의 전통적인 웹 서비스 구조를 학습했습니다.',
          '성향 태그, 장소 데이터, 추천 조건을 DB와 API 흐름 안에서 어떻게 연결하는지 경험했습니다.',
        ],
      },
      {
        title: '일정 작성과 지도 UX',
        image: asset('/media/docs/hashtrip-planning.png'),
        points: [
          'Spring MVC 컨트롤러와 JSP 화면, MyBatis 매퍼, OracleDB를 연결해 추천 결과와 여행 일정 데이터를 다뤘습니다.',
          '공공데이터와 내부 장소 데이터를 활용해 성향 기반 추천 결과를 만들고, 일정 작성 화면으로 연결했습니다.',
        ],
      },
    ],
    documentTitle: 'hashTrip 학습 목표',
    documentDescription: 'Java 기반 웹 서비스와 추천 데이터 흐름에서 학습한 방향을 요약했습니다.',
    documentImage: asset('/media/docs/hashtrip-engineering.png'),
    referenceLinks: [
      {
        label: '프로젝트 GitHub',
        href: 'https://github.com/kdtlch3650-ctrl/hifive.git',
      },
      {
        label: 'ERD 원본',
        href: 'https://www.erdcloud.com/d/wHzr3PvNt2YFQscJW',
      },
    ],
  }),
  {
    id: 'overview',
    label: '메인 소개',
    title: '공공데이터를 활용한 여행지 추천 및 여행 기록 공유 서비스',
    description:
      'hashTrip은 사용자의 취향을 해시태그처럼 분석하고, 그 결과를 장소 추천과 여행 일정 작성 흐름에 연결하는 맞춤형 여행 큐레이션 프로젝트입니다.',
    focusPoints: ['기획 배경', '서비스 플로우', '기대 효과'],
    items: [
      {
        title: '기획 배경과 문제 정의',
        points: [
          '수많은 여행 정보 속에서 나에게 정말 맞는 장소를 찾는 데 시간이 많이 걸린다는 문제를 출발점으로 잡았습니다.',
          '유명한 장소 위주로 반복되는 일정은 사용자 만족도를 떨어뜨리고, 개인 취향을 반영한 여행 추천 니즈는 계속 커지고 있었습니다.',
          'MBTI처럼 사용자의 성향을 구조화해 취향에 맞는 장소와 루트를 제안하는 서비스를 목표로 삼았습니다.',
        ],
      },
      {
        title: '핵심 서비스 프로세스',
        points: [
          '10가지 성향 질문으로 여행 스타일을 분석하고, 분석 결과를 태그 형태로 정리합니다.',
          '분석된 태그를 API와 서비스 내부 장소 데이터에 매핑해 사용자에게 맞는 여행지 후보를 추천합니다.',
          '추천 결과를 여행 일정 작성과 기록 공유 흐름까지 연결해 하나의 사용자 여정을 완성하도록 설계했습니다.',
        ],
      },
    ],
    documentTitle: 'hashTrip 프로젝트 개요',
    documentDescription: '프로젝트 개요, 문제 정의, 서비스 플로우가 정리된 hashTrip PDF 자료입니다.',
    documentImage: asset('/media/docs/hashtrip-overview.png'),
  },
  {
    id: 'planning',
    label: '기획 / UX',
    title: '팀 역할, WBS, 메뉴트리와 사용자 흐름',
    description:
      '팀원별 역할 분담과 WBS, 그리고 메뉴트리와 유저 플로우를 기반으로 서비스 구조를 어떻게 설계했는지 정리합니다.',
    focusPoints: ['팀 역할 분담', 'WBS', 'MenuTree / UserFlow'],
    items: [
      {
        title: '팀 구성과 내 역할',
        points: [
          '5인 팀 프로젝트로 진행되었고, 추천 루트 페이지, 메인/관리자 페이지, 마이페이지/상세 페이지, 로그인/회원가입 페이지 등으로 역할을 분담했습니다.',
          '기획 단계에서는 유저 플로우와 스토리보드를 작성했고, 구현 단계에서는 여행 일정 작성 페이지를 중심으로 지도 상세 흐름과 장소 추가 인터랙션을 맡았습니다.',
          '일정 일차 추가, 장소 개별 추가 버튼, 모달 상단 고정, 루트 카드 UI 개선, 지도 상세 여닫기, 태그-홈 연동 같은 기능을 직접 반영했습니다.',
        ],
      },
      {
        title: '메뉴 구조와 사용자 흐름',
        points: [
          '메인 페이지에서 성향 분석 페이지로 진입하고, 결과를 바탕으로 여행 추천 페이지와 추천 장소 상세 페이지로 이어지도록 설계했습니다.',
          '사용자는 로그인 이후 여행 일정 페이지에서 나의 여행 계획과 여행 기록을 관리할 수 있도록 구성했습니다.',
          '관리자 페이지, 마이페이지, 로그인/회원가입, 아이디/비밀번호 찾기까지 공통 흐름을 분리해 서비스 구조를 정리했습니다.',
        ],
      },
    ],
    documentTitle: '메뉴트리 및 기획 자료',
    documentDescription: '메뉴트리와 사용자 흐름을 중심으로 hashTrip 구조를 한눈에 볼 수 있는 페이지입니다.',
    documentImage: asset('/media/docs/hashtrip-planning.png'),
    referenceLinks: [
      {
        label: 'WBS 원본 문서',
        href: 'https://docs.google.com/spreadsheets/d/1W-YvX-o7zpSEqAcT387E-WURf6PBVS7eEtNUlfYEgSY/edit?gid=767084977#gid=767084977',
      },
      {
        label: 'StoryBoard 원본',
        href: 'https://www.figma.com/design/T1ysqNP4EpwCRVKzT911Oc/2%ED%8C%80-%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C?node-id=0-1&p=f',
      },
    ],
  },
  {
    id: 'engineering',
    label: '개발 / 설계',
    title: 'Java 기반 구조와 데이터 설계',
    description:
      'Spring MVC 기반 구조, 사용 기술 스택, ERD 중심의 데이터 설계를 통해 맞춤형 여행 추천 기능을 구현한 과정을 정리합니다.',
    focusPoints: ['Java Spring MVC', 'Oracle / MyBatis', 'ERD와 구현 연결'],
    items: [
      {
        title: '기술 스택',
        points: [
          'Java 11, Spring 5.3.27, MyBatis, JSP, HTML5/CSS3, JavaScript, Oracle 19c를 사용했습니다.',
          '협업과 버전 관리는 Git을 사용했고, 개발 환경은 Eclipse와 VS Code를 병행했습니다.',
          '공공데이터와 내부 데이터를 연결해 추천 결과를 구성하는 구조를 목표로 했습니다.',
        ],
      },
      {
        title: '데이터 구조와 구현 관점',
        points: [
          'ERD에서는 사용자 기본 정보, 성향 태그 저장용 매핑 테이블, 사용자 인증, 주소 등 핵심 엔티티를 분리해 설계했습니다.',
          '성향 분석 결과를 태그로 저장하고, 이 태그를 장소 데이터와 연결해 추천 결과를 만드는 흐름이 핵심이었습니다.',
          '여행 일정 작성 화면에서는 지도 모달과 장소 상세 정보, 일정 일차, 작성/수정 시간 연동을 함께 다루며 DB와 API가 연결되는 흐름을 더 체계적으로 이해하게 되었습니다.',
        ],
      },
      {
        title: '직접 구현한 세부 기능',
        points: [
          '여행 일정 페이지에서 루트 카드 UI 변경, 작성일 추가, 여행 루트 일차 추가, 장소 개별 추가 버튼과 일자별 장소 추가 버튼을 구현했습니다.',
          '지도 영역에서는 중복 이미지 제거, 깨진 이미지 예외 처리, 장소 변경 지도 디테일, 상세 여닫기 기능을 반영해 화면 완성도를 높였습니다.',
          '새로운 태그 생성 후 홈과 연동하는 기능, 다른 사람 메모 분리, 루트를 여러 번 불러오는 흐름 개선까지 이어서 작업했습니다.',
        ],
      },
    ],
    documentTitle: '기술 스택 및 ERD 자료',
    documentDescription: 'hashTrip에서 사용한 기술 스택과 설계 구조를 보여주는 PDF 자료입니다.',
    documentImage: asset('/media/docs/hashtrip-engineering.png'),
    referenceLinks: [
      {
        label: '프로젝트 GitHub',
        href: 'https://github.com/kdtlch3650-ctrl/hifive.git',
      },
      {
        label: 'ERD 원본',
        href: 'https://www.erdcloud.com/d/wHzr3PvNt2YFQscJW',
      },
    ],
  },
  {
    id: 'trouble',
    label: '트러블 슈팅',
    title: '추천 로직과 데이터 처리 성능 이슈 해결',
    description:
      'hashTrip에서는 추천 정확도와 데이터 로딩 속도 측면에서 실제적인 기술 이슈가 있었고, 이를 로직 개선과 병렬 처리로 해결했습니다.',
    focusPoints: ['추천 로직 보정', 'SQL 충돌 해소', '병렬 처리 성능 개선'],
    items: [
      {
        title: '태그 추천 로직 충돌 해결',
        points: [
          '여행지 태그와 성향 분석 결과를 1:1 단순 비교했을 때, 다중 태그 선택 시 SQL 구문 충돌과 중복 코드 생성 문제가 발생했습니다.',
          '모든 질문의 중요도를 동일하게 처리하면 사용자의 핵심 취향이 희석되어 추천 신뢰도도 낮아졌습니다.',
          '이를 해결하기 위해 단순 태그 유무 비교에서 벗어나 질문별 가중치 기반 합산 방식으로 추천 로직을 전면 수정했습니다.',
        ],
      },
      {
        title: '상세 데이터 로딩 속도 개선',
        points: [
          '여행지 상세 정보를 가져오는 과정에서 데이터를 순차적으로 호출하면서 전체 페이지 로딩이 느려지는 문제가 있었습니다.',
          '한 번에 하나의 작업만 수행하는 구조 때문에 Blocking 현상이 생기고, 전체 처리 효율이 낮아졌습니다.',
          'CompletableFuture 또는 Parallel Stream 기반 병렬 처리 구조를 도입해 기존 순차 처리 대비 약 70~80% 수준의 성능 향상을 얻었습니다.',
        ],
      },
    ],
    documentTitle: '트러블 슈팅 자료',
    documentDescription: '추천 로직과 성능 개선 과정이 정리된 hashTrip PDF 자료입니다.',
    documentImage: asset('/media/docs/hashtrip-trouble.png'),
  },
  {
    id: 'retrospective',
    label: '느낀점',
    title: 'DB와 API 흐름을 체계적으로 이해한 프로젝트',
    description:
      '프로젝트를 통해 서비스 전체 구조를 보는 시야가 넓어졌고, 데이터가 실제 화면과 기능으로 연결되는 흐름을 더 명확하게 이해하게 되었습니다.',
    focusPoints: ['서비스 구조 이해', 'DB와 API 연결 경험', '다음 단계로의 확장'],
    items: [
      {
        title: '프로젝트를 통해 얻은 인사이트',
        points: [
          '서비스의 전체 구성을 체계적으로 익히며, 기획과 구현이 하나의 흐름으로 연결된다는 점을 체감했습니다.',
          '특히 DB와 API를 직접 연결해 보면서 데이터가 흐르는 구조를 명확히 이해하게 되어 큰 보람을 느꼈습니다.',
          '문제 해결 과정에서 공식 문서의 중요성과 구조를 차근차근 분석하는 습관의 필요성을 배울 수 있었습니다.',
        ],
      },
      {
        title: '앞으로의 보완 방향',
        points: [
          '성향 기반 추천 정확도를 더 높이기 위해 태그 체계와 가중치 모델을 세분화할 수 있습니다.',
          '추천 결과와 여행 기록을 더 긴 사용자 여정으로 연결해 커뮤니티 경험을 강화할 여지가 있습니다.',
          '현재 프로젝트 경험을 바탕으로 완성도 높은 추천 서비스와 데이터 기반 화면 설계를 계속 발전시키고자 합니다.',
        ],
      },
    ],
    documentTitle: '회고 및 향후 계획',
    documentDescription: '팀원 회고와 향후 계획이 정리된 hashTrip PDF 자료입니다.',
    documentImage: asset('/media/docs/hashtrip-retrospective.png'),
  },
];

const csasSections = [
  learningGoalSection({
    title: 'AI 분석 서버와 클라우드 배포 구조 학습',
    description:
      'CSAS는 시설물 이미지에서 균열을 감지하는 AI 기능을 서비스 형태로 연결하면서, 프론트엔드, Spring Boot API, FastAPI AI 서버, EKS 배포 흐름을 분리해 이해하는 것을 목표로 한 프로젝트입니다.',
    focusPoints: ['AI 추론 서버 분리', 'Spring Boot와 FastAPI 연동', 'Docker/ECR/EKS 배포 흐름'],
    items: [
      {
        title: 'AI 균열 감지 파이프라인',
        image: asset('/media/docs/csas-ai-pipeline.svg'),
        points: [
          '사용자가 업로드한 시설물 이미지를 단순 파일 저장으로 끝내지 않고, AI 서버로 전달해 분석 결과를 다시 서비스 응답으로 연결하는 흐름을 학습했습니다.',
          '모델 자체보다 먼저 이미지 업로드, 분석 요청, 결과 반환의 책임을 나누어야 서비스 구조가 유지된다는 점을 확인했습니다.',
        ],
      },
      {
        title: 'Spring Boot와 FastAPI 역할 분리',
        image: asset('/media/docs/csas-api-boundary.svg'),
        points: [
          'Spring Boot는 사용자 요청, 이미지 메타데이터, 서비스 API 흐름을 담당하고 FastAPI는 AI 모델 추론에 집중하도록 역할을 나누는 구조를 학습했습니다.',
          'AI 기능을 백엔드 안에 모두 넣기보다 별도 서버로 분리하면 모델 교체와 API 책임이 명확해진다는 장점을 확인했습니다.',
        ],
      },
      {
        title: 'Docker, ECR, EKS 배포 흐름',
        image: asset('/media/docs/csas-infra-flow.svg'),
        points: [
          '프론트엔드, 백엔드, Python AI 서버를 각각 컨테이너 이미지로 만들고 ECR을 거쳐 EKS 워크로드로 배포하는 흐름을 정리했습니다.',
          '로컬 실행과 클라우드 배포의 차이를 문서화하면서 환경 변수, 이미지 태그, Kubernetes 매니페스트의 역할을 구분했습니다.',
        ],
      },
    ],
    referenceLinks: [
      {
        label: 'GitHub 저장소',
        href: 'https://github.com/YuYoungKwang/CSAS',
      },
      {
        label: 'Kubernetes 설정',
        href: 'https://github.com/YuYoungKwang/CSAS/tree/main/k8s',
      },
      {
        label: 'EKS 배포 워크플로',
        href: 'https://github.com/YuYoungKwang/CSAS/blob/main/.github/workflows/deploy-eks.yml',
      },
    ],
  }),
  {
    id: 'overview',
    label: '메인 소개',
    title: 'AI 기반 시설물 균열 감지 서비스',
    description:
      'CSAS는 사용자가 시설물 이미지를 업로드하면 AI 서버가 균열 여부를 분석하고, 서비스 서버가 분석 결과를 관리하는 구조의 프로젝트입니다.',
    focusPoints: ['이미지 업로드', 'AI 분석 결과', '서비스 API와 배포 구조'],
    items: [
      {
        title: '프로젝트 목적',
        points: [
          '시설물 점검 이미지를 사람이 직접 확인하는 흐름을 보조하기 위해 AI 분석 기능을 서비스에 연결하는 것을 목표로 했습니다.',
          '단순 모델 실행 예제가 아니라 사용자가 이미지를 올리고 결과를 확인할 수 있는 서비스 흐름까지 포함해 설계했습니다.',
        ],
      },
      {
        title: '구성 방식',
        points: [
          '프론트엔드는 이미지 업로드와 결과 확인 화면을 담당하고, Spring Boot는 서비스 API와 데이터 흐름을 관리합니다.',
          'FastAPI 서버는 AI 모델 추론 역할을 맡고, 인프라 영역에서는 Docker 이미지와 EKS 배포 구조를 정리했습니다.',
        ],
      },
    ],
    documentTitle: 'CSAS 프로젝트 개요',
    documentDescription: 'AI 분석 기능을 실제 서비스 흐름과 배포 구조에 연결한 프로젝트입니다.',
    documentImage: asset('/media/thumb-csas.svg'),
    referenceLinks: [
      {
        label: 'GitHub 저장소',
        href: 'https://github.com/YuYoungKwang/CSAS',
      },
    ],
  },
  {
    id: 'planning',
    label: '기획 / 구조',
    title: 'AI 모델 실행보다 먼저 서비스 책임을 나누는 구조 설계',
    description:
      'AI 결과를 보여주는 화면만 만드는 것이 아니라, 어떤 서버가 어떤 책임을 가져야 유지보수하기 쉬운지에 초점을 맞춰 구조를 나누었습니다.',
    focusPoints: ['요청 흐름 정리', '서버 책임 분리', '결과 데이터 관리'],
    items: [
      {
        title: '서비스 흐름 정리',
        points: [
          '사용자는 이미지를 업로드하고, 서비스는 업로드된 이미지 정보를 기준으로 AI 분석 요청을 생성합니다.',
          'AI 서버는 분석 결과를 반환하고, 백엔드는 이 결과를 사용자에게 보여줄 수 있는 응답 형태로 정리합니다.',
        ],
      },
      {
        title: '역할 분리 기준',
        points: [
          'Spring Boot는 사용자 요청과 서비스 데이터 관리에 적합하고, FastAPI는 Python 기반 AI 모델을 실행하기에 적합하다고 판단했습니다.',
          '두 서버를 분리하면 AI 모델이 변경되어도 서비스 API 전체를 크게 바꾸지 않아도 되는 장점이 있습니다.',
        ],
      },
    ],
    documentTitle: '서비스 구조 학습',
    documentDescription: '프론트엔드, Spring Boot, FastAPI 사이의 책임 분리를 정리했습니다.',
    documentImage: asset('/media/docs/csas-api-boundary.svg'),
  },
  {
    id: 'engineering',
    label: '개발 / 인프라',
    title: 'Spring Boot, FastAPI, Docker, EKS를 연결한 배포 구조',
    description:
      'AI 기능을 로컬에서만 실행하는 데서 끝내지 않고, 컨테이너 이미지와 Kubernetes 매니페스트를 통해 배포 가능한 구조로 정리했습니다.',
    focusPoints: ['컨테이너 분리', 'ECR 이미지 관리', 'EKS 워크로드 배포'],
    items: [
      {
        title: '기술 스택',
        points: [
          '프론트엔드는 React, 백엔드는 Spring Boot, AI 서버는 Python FastAPI와 PyTorch 기반으로 구성했습니다.',
          '각 서버를 독립적인 컨테이너로 다루면서 실행 환경과 배포 단위를 명확히 나누었습니다.',
        ],
      },
      {
        title: 'EKS 배포 흐름',
        points: [
          'Docker 이미지를 ECR에 올리고, EKS에서는 frontend, backend, python AI 서버를 각각 Kubernetes 리소스로 배포하는 흐름을 정리했습니다.',
          '배포 문서와 워크플로를 통해 어떤 단계에서 이미지 빌드, 푸시, 매니페스트 적용이 일어나는지 확인할 수 있게 했습니다.',
        ],
      },
      {
        title: '외부 리소스 관리',
        points: [
          'AI 모델 파일과 이미지 저장소처럼 크거나 민감한 리소스는 애플리케이션 코드와 분리해 관리하는 방향을 검토했습니다.',
          'S3, OpenSearch, Kubernetes Secret처럼 배포 환경에서 필요한 요소를 프로젝트 구조 안에서 구분했습니다.',
        ],
      },
    ],
    documentTitle: 'CSAS 인프라 흐름',
    documentDescription: 'Docker, ECR, EKS로 이어지는 배포 단계를 시각화했습니다.',
    documentImage: asset('/media/docs/csas-infra-flow.svg'),
    referenceLinks: [
      {
        label: 'Kubernetes 설정',
        href: 'https://github.com/YuYoungKwang/CSAS/tree/main/k8s',
      },
      {
        label: 'EKS 배포 워크플로',
        href: 'https://github.com/YuYoungKwang/CSAS/blob/main/.github/workflows/deploy-eks.yml',
      },
    ],
  },
  {
    id: 'trouble',
    label: '트러블 슈팅',
    title: 'AI 서버와 배포 환경을 연결할 때 생기는 경계 문제 정리',
    description:
      'AI 기능은 모델 코드만으로 끝나지 않기 때문에, 파일 전달 방식, 서버 간 API 계약, 배포 환경 설정을 함께 맞추는 과정이 중요했습니다.',
    focusPoints: ['파일 전달 방식', '서버 간 API 계약', '배포 설정 관리'],
    items: [
      {
        title: '이미지 전달 경계',
        points: [
          '프론트엔드에서 업로드한 이미지가 Spring Boot를 거쳐 FastAPI까지 전달될 때, 파일 자체와 이미지 메타데이터를 구분해야 했습니다.',
          'AI 서버가 필요한 입력 형식과 서비스 서버가 관리해야 하는 데이터 형식이 다르기 때문에 API 계약을 명확히 잡는 것이 중요했습니다.',
        ],
      },
      {
        title: '배포 환경 차이',
        points: [
          '로컬 Docker Compose에서는 쉽게 연결되던 서버도 EKS에서는 서비스 이름, 포트, Secret, 이미지 태그를 명확히 맞춰야 합니다.',
          '배포 자동화는 편리하지만, 먼저 수동 배포 흐름을 이해해야 문제가 생겼을 때 어느 단계에서 실패했는지 찾을 수 있습니다.',
        ],
      },
    ],
    documentTitle: 'CSAS 트러블 슈팅 관점',
    documentDescription: 'AI 서버 연동과 EKS 배포에서 확인해야 하는 경계 문제를 정리했습니다.',
    documentImage: asset('/media/docs/csas-ai-pipeline.svg'),
  },
  {
    id: 'feeling',
    label: '느낀점',
    title: 'AI 기능은 모델보다 서비스 연결 구조가 먼저 중요하다는 점을 학습',
    description:
      'AI 프로젝트라고 해서 모델 정확도만 중요한 것이 아니라, 사용자가 결과를 확인할 수 있도록 API, 저장소, 배포 환경이 함께 맞아야 한다는 점을 배웠습니다.',
    focusPoints: ['서비스화 관점', '배포 구조 이해', '다음 개선 방향'],
    items: [
      {
        title: '프로젝트를 통해 배운 점',
        points: [
          'AI 모델을 실행하는 것과 AI 기능을 서비스로 제공하는 것은 다른 문제이며, 서버 간 책임 분리가 특히 중요하다는 점을 확인했습니다.',
          'EKS 배포를 고려하면 코드뿐 아니라 이미지 빌드, 환경 변수, Secret, 매니페스트까지 하나의 흐름으로 이해해야 합니다.',
        ],
      },
      {
        title: '다음 개선 방향',
        points: [
          'AI 분석 결과를 더 명확한 데이터 모델로 저장하고, 사용자 화면에서 분석 이력을 확인할 수 있는 방향으로 확장할 수 있습니다.',
          '배포 과정에서는 수동 적용과 자동 배포의 책임을 나누어 더 안전한 운영 흐름으로 개선할 수 있습니다.',
        ],
      },
    ],
    documentTitle: 'CSAS 회고',
    documentDescription: 'AI 기능을 서비스와 인프라에 연결하며 배운 점을 정리했습니다.',
    documentImage: asset('/media/docs/csas-infra-flow.svg'),
  },
];

const youtubeMoodSections = [
  learningGoalSection({
    title: '자연어 감정 분석과 추천 서비스 인프라 학습',
    description:
      'YouTube Mood는 사용자가 입력한 감정과 상황 문장을 AI가 분석하고, 그 결과를 YouTube 음악 추천으로 연결하는 흐름을 학습하기 위해 진행한 프로젝트입니다.',
    focusPoints: ['감정 분류 AI', 'YouTube 추천 API 연동', 'Docker/Kubernetes/EKS 구조'],
    items: [
      {
        title: '자연어 감정 분석',
        image: asset('/media/docs/youtube-mood-ai-flow.svg'),
        points: [
          '사용자의 문장을 단순 키워드 검색으로 처리하지 않고, 감정 그룹과 분위기 태그로 변환해 추천 검색 조건을 만드는 흐름을 학습했습니다.',
          'KOTE 기반 데이터와 RoBERTa 계열 모델을 사용하면서 모델 결과를 서비스에서 이해할 수 있는 형태로 가공하는 과정을 경험했습니다.',
        ],
      },
      {
        title: '추천 API 흐름',
        image: asset('/media/docs/youtube-mood-recommendation-flow.svg'),
        points: [
          'React 화면에서 받은 감정 문장이 FastAPI를 거쳐 YouTube Data API 검색 조건으로 바뀌고, 다시 추천 결과로 돌아오는 흐름을 구성했습니다.',
          'AI 결과를 바로 보여주는 것이 아니라 추천 품질을 높이기 위한 검색어, 장르, 톤 정보로 변환하는 구조를 정리했습니다.',
        ],
      },
      {
        title: '인프라 확장 학습',
        image: asset('/media/docs/youtube-mood-infra-flow.svg'),
        points: [
          '로컬 Docker Compose 실행에서 시작해 Kubernetes, EKS, OpenSearch 저장 구조까지 단계적으로 문서화했습니다.',
          '기능을 먼저 작게 검증한 뒤 배포 구조를 넓히는 방식이 포트폴리오 프로젝트에서 더 안전하다는 점을 확인했습니다.',
        ],
      },
    ],
    referenceLinks: [
      {
        label: 'GitHub 저장소',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood',
      },
      {
        label: 'AI 연동 문서',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/12-ai-service-integration.md',
      },
      {
        label: 'EKS 문서',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/25-eks-draft.md',
      },
    ],
  }),
  {
    id: 'overview',
    label: '메인 소개',
    title: '감정 문장을 음악 추천으로 연결하는 AI 추천 서비스',
    description:
      'YouTube Mood는 사용자가 지금의 감정이나 상황을 자연어로 입력하면, AI가 분위기를 분석하고 YouTube 음악과 플레이리스트 추천으로 연결하는 프로젝트입니다.',
    focusPoints: ['자연어 감정 입력', 'AI 분위기 분석', 'YouTube 음악 추천'],
    items: [
      {
        title: '프로젝트 목적',
        points: [
          '사용자가 직접 장르나 키워드를 고르지 않아도 현재 감정에 맞는 음악을 찾을 수 있는 추천 흐름을 만드는 것이 목표였습니다.',
          '감정 분석 결과를 단순 라벨로 끝내지 않고, 실제 YouTube 검색과 플레이리스트 추천으로 이어지도록 구성했습니다.',
        ],
      },
      {
        title: '서비스 흐름',
        points: [
          'React 화면에서 감정 문장을 입력하면 FastAPI 백엔드가 AI 분석과 YouTube Data API 호출을 담당합니다.',
          '추천 결과는 분위기 태그, 장르 키워드, 영상 목록 형태로 사용자에게 돌아오도록 설계했습니다.',
        ],
      },
    ],
    documentTitle: 'YouTube Mood 프로젝트 개요',
    documentDescription: '자연어 감정 분석을 YouTube 음악 추천으로 연결한 서비스입니다.',
    documentImage: asset('/media/thumb-youtube-mood.png'),
    referenceLinks: [
      {
        label: 'GitHub 저장소',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood',
      },
      {
        label: '프로젝트 계획',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/01-project-plan.md',
      },
    ],
  },
  {
    id: 'planning',
    label: '기획 / UX',
    title: '사용자 감정을 추천 조건으로 바꾸는 흐름 설계',
    description:
      '사용자가 입력한 문장을 그대로 검색하는 방식보다, 감정 그룹과 추천 의도를 분리해 더 설명 가능한 추천 흐름을 만드는 데 초점을 맞췄습니다.',
    focusPoints: ['사용자 입력 흐름', '감정 그룹 정의', '추천 결과 표현'],
    items: [
      {
        title: '사용자 입력 구조',
        points: [
          '사용자는 “퇴근 후 차분한 음악이 듣고 싶다”처럼 자연어 문장을 입력하고, 서비스는 문장에서 감정과 상황을 추출합니다.',
          '입력값을 감정 그룹, 분위기 태그, 장르 키워드로 나누면 추천 결과를 설명하기 쉬워집니다.',
        ],
      },
      {
        title: '추천 화면 방향',
        points: [
          '추천 결과를 영상 목록만 보여주는 데서 끝내지 않고, 왜 이 추천이 나왔는지 이해할 수 있도록 분위기와 키워드를 함께 표시하는 방향을 잡았습니다.',
          '국내 음악 중심 옵션과 전역 추천 옵션을 구분해 사용자가 원하는 추천 범위를 선택할 수 있게 설계했습니다.',
        ],
      },
    ],
    documentTitle: '기획 문서',
    documentDescription: '요구사항, 사용자 흐름, 화면 초안으로 추천 서비스 방향을 정리했습니다.',
    documentImage: asset('/media/docs/youtube-mood-recommendation-flow.svg'),
    referenceLinks: [
      {
        label: '사용자 요구사항',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/02-user-requirements.md',
      },
      {
        label: '사용자 흐름',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/03-user-flow.md',
      },
      {
        label: '화면 초안',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/04-screen-draft.md',
      },
    ],
  },
  {
    id: 'engineering',
    label: '개발 / 인프라',
    title: 'FastAPI AI 추천 서버와 배포 문서화',
    description:
      'AI 모델을 서비스 API와 연결하고, 로컬 실행부터 Kubernetes/EKS 확장까지 단계적으로 정리했습니다.',
    focusPoints: ['FastAPI 추천 API', 'PyTorch/Transformers 모델', 'Docker/Kubernetes/EKS'],
    items: [
      {
        title: 'AI 추천 구조',
        points: [
          'FastAPI 서버에서 감정 분류 모델을 불러오고, 분석 결과를 YouTube 검색어와 추천 조건으로 변환하는 흐름을 구성했습니다.',
          '모델 로딩은 그룹 감정 모델, 원본 모델, fallback 순서로 처리해 로컬 개발 중에도 서비스가 완전히 멈추지 않도록 방향을 잡았습니다.',
        ],
      },
      {
        title: '검증 방식',
        points: [
          '추천 테스트 케이스를 작성해 감정 입력이 어떤 검색어와 추천 결과로 이어지는지 반복 확인했습니다.',
          'README 기준 16개의 추천 테스트가 통과하는 상태를 확인하며 추천 흐름의 기본 동작을 검증했습니다.',
        ],
      },
      {
        title: '인프라 문서화',
        points: [
          'Docker Compose로 로컬 실행 흐름을 정리하고, Kubernetes와 EKS 문서로 배포 단계를 확장했습니다.',
          'OpenSearch 저장 구조는 추천 이력과 검색 기록을 나중에 다루기 위한 초안으로 분리해 정리했습니다.',
        ],
      },
    ],
    documentTitle: 'AI와 인프라 설계',
    documentDescription: 'AI 연동, Docker, Kubernetes, EKS, OpenSearch 관련 문서를 연결했습니다.',
    documentImage: asset('/media/docs/youtube-mood-infra-flow.svg'),
    referenceLinks: [
      {
        label: 'AI 연동 문서',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/12-ai-service-integration.md',
      },
      {
        label: 'Docker 가이드',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/18-docker-guide.md',
      },
      {
        label: 'EKS 초안',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/25-eks-draft.md',
      },
      {
        label: 'OpenSearch 초안',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/20-opensearch-index-draft.md',
      },
    ],
  },
  {
    id: 'trouble',
    label: '트러블 슈팅',
    title: '모델 결과를 서비스 추천으로 바꾸는 과정에서 확인한 문제',
    description:
      'AI 모델이 감정을 맞히는 것과 사용자가 납득할 만한 추천 결과를 제공하는 것은 다른 문제이기 때문에, 중간 변환 로직과 fallback 흐름을 중요하게 다뤘습니다.',
    focusPoints: ['모델 로딩 안정성', '추천 품질 검증', '서비스 fallback'],
    items: [
      {
        title: '모델 결과 해석',
        points: [
          '모델이 반환한 감정 라벨을 그대로 사용자에게 보여주기보다, 추천 검색어와 분위기 태그로 바꾸는 과정이 필요했습니다.',
          '이 중간 변환 로직이 명확해야 추천 결과가 왜 나왔는지 설명할 수 있습니다.',
        ],
      },
      {
        title: 'fallback 흐름',
        points: [
          '모델 파일이나 환경 설정이 준비되지 않은 상황에서도 서비스 구조를 확인할 수 있도록 fallback 방향을 정리했습니다.',
          '추천 테스트 케이스를 통해 감정 입력이 예상 가능한 추천 흐름으로 이어지는지 반복 확인했습니다.',
        ],
      },
    ],
    documentTitle: '트러블 슈팅 문서',
    documentDescription: '모델 오류 분석과 추천 테스트 케이스를 통해 검증한 내용을 연결했습니다.',
    documentImage: asset('/media/docs/youtube-mood-ai-flow.svg'),
    referenceLinks: [
      {
        label: '트러블 슈팅',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/13-troubleshooting.md',
      },
      {
        label: '모델 오류 분석',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/17-model-error-analysis.md',
      },
      {
        label: '추천 테스트 케이스',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/14-recommendation-test-cases.md',
      },
    ],
  },
  {
    id: 'feeling',
    label: '느낀점',
    title: 'AI 추천 서비스는 모델, API, UX가 함께 맞아야 완성된다는 점을 학습',
    description:
      '감정 분석 모델만 준비되어도 추천 서비스가 완성되는 것은 아니며, 사용자 입력, 중간 변환, 외부 API 호출, 결과 표현이 하나의 흐름으로 연결되어야 한다는 점을 배웠습니다.',
    focusPoints: ['AI 서비스화', '추천 검증', '인프라 단계화'],
    items: [
      {
        title: '프로젝트를 통해 배운 점',
        points: [
          'AI 기능은 모델 정확도뿐 아니라 사용자에게 어떤 형태로 설명되고 전달되는지가 중요하다는 점을 확인했습니다.',
          '추천 서비스는 결과가 주관적이기 때문에 테스트 케이스와 예시 입력을 통해 품질을 반복 확인하는 과정이 필요했습니다.',
        ],
      },
      {
        title: '다음 개선 방향',
        points: [
          '추천 이력과 사용자 피드백을 저장하면 추천 품질을 개선할 수 있고, OpenSearch 같은 검색 저장소를 실제 서비스 흐름에 연결할 수 있습니다.',
          'EKS 배포 문서는 단계별로 충분히 쪼개져 있으므로, 다음 단계에서는 실제 운영 환경 검증과 자동화 범위를 좁혀 진행하는 것이 좋습니다.',
        ],
      },
    ],
    documentTitle: 'YouTube Mood 회고',
    documentDescription: 'AI 추천 기능을 서비스와 인프라까지 연결하며 배운 점을 정리했습니다.',
    documentImage: asset('/media/docs/youtube-mood-recommendation-flow.svg'),
  },
];

export const projects = [
  {
    slug: 'oneulfarm',
    label: '메인 프로젝트 · REACT + JAVA',
    title: 'OneulFarm',
    subtitle: '시세 데이터와 레시피, AI 식단 추천을 결합한 농산물 커머스',
    period: '2026.03.09 - 2026.04.03',
    team: '5인 팀 프로젝트',
    role: '풀스택 구현 · 마이페이지 / 주문·배송 흐름 · 최종 발표',
    contribution:
      '마이페이지 · 주문관리 · 대시보드 API 연동 · 배송지/리뷰/찜 기능 · 주문·배송 흐름 고도화 · 발표 자료/시연 스크립트 정리',
    summary:
      '공공 시세 데이터와 레시피, AI 식단 제안을 연결해 사용자가 절약 가치를 체감하도록 만든 농산물 직거래 커머스 프로젝트입니다.',
    focusAreas: ['시세 기반 절약 가치 경험', '마이페이지와 주문·배송 흐름', '발표용 지표 시각화와 문서 정리'],
    outcomes: ['가격 비교와 절약 가치 체감', '레시피에서 장바구니·결제까지 연결', 'AI 식단 제안과 구매 흐름 연계'],
    stacks: ['React', 'Java', 'Spring Framework', 'MyBatis', 'OracleDB', 'PortOne', 'OpenAI API', 'GitHub'],
    categories: ['react', 'java'],
    featured: true,
    thumbnail: asset('/media/thumb-oneulfarm.png'),
    liveUrl: '',
    repoUrl: 'https://github.com/kdtlch3650-ctrl/oneulFarm',
    docUrl: asset('/media/oneulFarm.pdf'),
    youtubeUrl: 'https://youtu.be/DqfVTOmsjP4',
    videoUrl: 'https://www.youtube.com/embed/DqfVTOmsjP4',
    referenceLinks: [
      { label: '시연 영상', href: 'https://youtu.be/DqfVTOmsjP4' },
      { label: 'GitHub 저장소', href: 'https://github.com/kdtlch3650-ctrl/oneulFarm' },
      { label: '최종 보고서 PDF', href: asset('/media/oneulFarm.pdf') },
    ],
    videoNote: 'OneulFarm 시연 영상을 통해 시세 기반 커머스와 주문 흐름을 한 번에 확인할 수 있습니다.',
    sections: oneulFarmSections,
  },
  {
    slug: 'tricky-quiz',
    label: '풀스택 프로젝트 · REACT + JAVA',
    title: 'TRICKY-QUIZ',
    subtitle: 'Google OAuth와 O/X 퀴즈, 랭킹을 연결한 학습형 퀴즈 서비스',
    period: '2026.04 - 2026.05',
    team: '개인 프로젝트',
    role: '서비스 구조 설계 · 프론트/백엔드 연동 · 결과/랭킹 흐름 구현',
    contribution:
      'Google OAuth 로그인 · 카테고리별 O/X 퀴즈 흐름 · 결과/랭킹 화면 연동 · 모바일 대응 UI · 배포 문서 정리',
    summary:
      'Google OAuth로 로그인하고 카테고리별 O/X 퀴즈를 풀며 결과와 랭킹을 확인하는 학습형 퀴즈 서비스입니다.',
    focusAreas: ['Google OAuth 로그인', '카테고리별 O/X 퀴즈', '결과와 랭킹이 이어지는 흐름'],
    outcomes: ['로그인부터 결과 확인까지 단일 흐름', '학습과 게임성을 함께 고려한 UX', '프론트·백엔드 분리 구조 경험'],
    stacks: ['React', 'TypeScript', 'Vite', 'Spring Boot', 'Spring Security OAuth2', 'PostgreSQL', 'Docker Compose'],
    categories: ['react', 'java'],
    thumbnail: asset('/media/thumb-tricky-quiz.png'),
    liveUrl: 'https://kdtlch3650-ctrl.github.io/tricky-quiz/',
    repoUrl: 'https://github.com/kdtlch3650-ctrl/tricky-quiz',
    sections: [
      learningGoalSection({
        title: 'OAuth와 풀스택 서비스 흐름 학습',
        description:
          'TRICKY-QUIZ는 개인 프로젝트로 Google 로그인, 퀴즈 진행, 결과 저장, 랭킹 조회가 이어지는 서비스 흐름을 직접 설계하고 구현하기 위해 만들었습니다.',
        focusPoints: ['Google OAuth', 'React/Spring 분리 구조', '결과/랭킹 데이터 흐름'],
        items: [
          {
            title: 'Google OAuth 로그인',
            points: [
              '로그인 후 사용자가 퀴즈를 풀고 결과를 확인하는 짧지만 완결된 서비스 흐름을 직접 만들고자 했습니다.',
              '프론트엔드와 백엔드를 분리한 개인 프로젝트에서 인증, 상태, API, 배포 흐름을 한 번에 점검하는 것이 목표였습니다.',
            ],
          },
          {
            title: '퀴즈 진행 화면 흐름',
            points: [
              'Google OAuth와 Spring Security OAuth2를 활용해 로그인 기반 진입 흐름을 구성하는 방법을 학습했습니다.',
              'React, TypeScript, Vite, Spring Boot, PostgreSQL을 나누어 사용하며 화면 상태와 서버 데이터를 연결하는 경험을 쌓았습니다.',
            ],
          },
          {
            title: '결과 저장과 랭킹',
            image: asset('/media/docs/tricky-quiz-result.png'),
            points: [
              'React 화면에서 카테고리 선택, 퀴즈 진행, 결과 확인을 담당하고 Spring Boot API가 사용자, 문제, 랭킹 데이터를 처리하도록 나눴습니다.',
              'PostgreSQL과 Docker Compose를 기준으로 로컬 실행 환경을 잡고, 프론트엔드는 GitHub Pages 배포 흐름까지 연결했습니다.',
            ],
          },
        ],
        documentTitle: 'TRICKY-QUIZ 학습 목표',
        documentDescription: 'OAuth, 풀스택 분리 구조, 결과 저장 흐름을 중심으로 학습 방향을 요약했습니다.',
        documentImage: asset('/media/thumb-tricky-quiz.png'),
        referenceLinks: [
          {
            label: '기술 스택',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/05-tech-stack.md',
          },
          {
            label: 'DB 설계',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/06-database-design.md',
          },
          {
            label: 'API 명세',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/07-api-spec.md',
          },
          {
            label: '배포 페이지',
            href: 'https://kdtlch3650-ctrl.github.io/tricky-quiz/',
          },
        ],
      }),
      {
        id: 'overview',
        label: '메인 소개',
        title: 'Google 로그인과 O/X 퀴즈를 연결한 학습형 서비스',
        description:
          'TRICKY-QUIZ는 Google OAuth로 로그인하고, 카테고리별 O/X 퀴즈를 풀며 결과와 랭킹을 확인하는 서비스입니다.',
        focusPoints: ['Google OAuth 로그인', '카테고리별 문제 제공', '결과와 랭킹 저장'],
        items: [
          {
            title: '기획 배경과 문제 정의',
            points: [
              '단순히 정답만 확인하는 퀴즈보다, 사용자가 다시 들어와서 도전하고 싶어지는 흐름을 만들고자 했습니다.',
              '로그인, 문제 풀이, 결과 확인, 랭킹 조회가 자연스럽게 이어지는 구조를 목표로 삼았습니다.',
              'O/X 형식으로 진입 장벽은 낮추되, 카테고리별 난이도와 결과 기록으로 반복 참여 동기를 주는 방향으로 설계했습니다.',
            ],
          },
          {
            title: '서비스 흐름',
            points: [
              'Google OAuth 로그인 후 카테고리를 선택하고 퀴즈를 시작합니다.',
              '문제를 풀면 정답 여부와 해설을 확인하고, 결과는 랭킹 흐름으로 이어집니다.',
              '모바일에서도 버튼과 카드 배치가 깨지지 않도록 반응형 UI를 유지했습니다.',
            ],
          },
        ],
        documentTitle: 'TRICKY-QUIZ 대표 화면',
        documentDescription: 'Google 로그인과 퀴즈 흐름을 한눈에 볼 수 있는 메인 화면입니다.',
        documentImage: asset('/media/thumb-tricky-quiz.png'),
        referenceLinks: [
          {
            label: '배포 페이지',
            href: 'https://kdtlch3650-ctrl.github.io/tricky-quiz/',
          },
          {
            label: '프로젝트 README',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/README.md',
          },
          {
            label: '프로젝트 계획',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/01-project-plan.md',
          },
          {
            label: '요구사항 명세서',
            href: 'https://docs.google.com/spreadsheets/d/1KPJ_9YYDqnzsyehJ1-3U9esVwqNnbyYsiAjQ9bHbCH4/edit?usp=sharing',
          },
        ],
      },
      {
        id: 'planning',
        label: '기획 / UX',
        title: '화면 흐름과 역할 분리',
        description:
          '메뉴 구조와 API 흐름을 먼저 정리해 프론트엔드와 백엔드가 맡아야 할 책임을 분리했습니다.',
        focusPoints: ['메뉴 구조 정리', 'OAuth 기반 진입 흐름', '모바일 대응'],
        items: [
          {
            title: '화면 구성',
            points: [
              '홈, 로그인, 카테고리 선택, 퀴즈 진행, 결과, 랭킹 흐름으로 서비스의 기본 진입 구조를 나눴습니다.',
              '각 화면이 서로 독립적으로 보이지 않도록 로그인 상태와 퀴즈 결과가 자연스럽게 이어지게 구성했습니다.',
              '퀴즈 서비스의 핵심은 문제를 빨리 보여주는 것보다, 사용자가 흐름을 잃지 않게 만드는 것이라고 판단했습니다.',
            ],
          },
          {
            title: '문서화와 설계 습관',
            points: [
              '프로젝트 계획, 요구사항, 화면 설계, 메뉴 트리, API 명세, 로드맵, 테스트 계획까지 문서로 나눠 관리했습니다.',
              '기능을 먼저 만들기보다, 화면과 데이터 흐름을 먼저 정리해야 구현이 흔들리지 않는다는 점을 실무적으로 체감했습니다.',
              '초보 개발자 관점에서도 따라가기 쉬운 구조를 만들기 위해 기능 단위를 작게 쪼개는 방식을 유지했습니다.',
            ],
          },
        ],
        documentTitle: '화면 설계 참고 자료',
        documentDescription: '퀴즈 흐름과 핵심 화면 구성을 확인할 수 있는 대표 화면 자료입니다.',
        documentImage: asset('/media/thumb-tricky-quiz.png'),
        referenceLinks: [
          {
            label: '화면 설계서',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/03-screen-design.md',
          },
          {
            label: '화면 설계 (시각화)',
            href: 'https://www.figma.com/design/JzKnADCUhdFHORv541y0DP/tricky-quiz-%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84?node-id=0-1&t=LDMm76jVqBf9Zmsc-1',
          },
          {
            label: '메뉴 트리',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/04-menu-tree.md',
          },
          {
            label: '메뉴 트리 (시각화)',
            href: 'https://www.figma.com/board/LLE8nVUt3aERqy6TJOrVHw/%EB%A9%94%EB%89%B4-%ED%8A%B8%EB%A6%AC?node-id=0-1&t=tFt6oiVYzyM4z7YK-1',
          },
          {
            label: '사용자 유저플로우 (시각화)',
            href: 'https://www.figma.com/board/WdNGANEuOwlQHiOKIhcYk6/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=0-1&t=TrKYB9GXMxTmnX0B-1',
          },
          {
            label: '로드맵',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/08-roadmap.md',
          },
        ],
      },
      {
        id: 'engineering',
        label: '개발 / 설계',
        title: 'React + Spring Boot 기반 풀스택 구조',
        description:
          '프론트엔드는 Vite 기반 React + TypeScript, 백엔드는 Spring Boot + OAuth2 + PostgreSQL로 분리해 구성했습니다.',
        focusPoints: ['React/TypeScript/Vite', 'Spring Security OAuth2', 'PostgreSQL/Docker'],
        items: [
          {
            title: '기술 스택',
            points: [
              'Frontend는 React, TypeScript, Vite를 사용해 빠른 개발 환경과 명확한 컴포넌트 구조를 확보했습니다.',
              'Backend는 Spring Boot와 Spring Security OAuth2를 사용해 Google 로그인과 API 분리를 구현했습니다.',
              'Database는 PostgreSQL, Infra는 Docker Compose를 사용해 로컬 환경에서도 동일하게 실행할 수 있도록 했습니다.',
            ],
          },
          {
            title: 'API와 데이터 흐름',
            points: [
              '카테고리 조회, 퀴즈 문제 조회, 결과 제출, 랭킹 조회 흐름을 분리해 화면과 데이터의 책임을 나눴습니다.',
              '프론트는 응답 데이터를 바로 화면 상태로 연결하고, 백엔드는 퀴즈/유저/랭킹 도메인을 분리하는 방향으로 설계했습니다.',
              '기능이 늘어나도 화면별 역할이 무너지지 않도록 API 응답 형태를 먼저 정리한 뒤 구현했습니다.',
            ],
          },
          {
            title: '배포와 검증',
            points: [
              '프론트엔드는 GitHub Pages 기준으로 배포 가능하게 구성했고, 백엔드는 로컬과 컨테이너 실행을 함께 고려했습니다.',
              '문제 은행과 랭킹 데이터는 데모 데이터와 실제 API를 구분해 관리할 수 있게 구조를 나눴습니다.',
              '개발 후에는 카테고리별 퀴즈 진행, 결과 확인, 랭킹 확인 흐름을 반복 검증하며 동작 범위를 확인했습니다.',
            ],
          },
        ],
        documentTitle: '기술 구조 미리보기',
        documentDescription: 'React, Spring Boot, PostgreSQL로 구성한 풀스택 구조를 요약한 화면입니다.',
        documentImage: asset('/media/thumb-tricky-quiz.png'),
        referenceLinks: [
          {
            label: '기술 스택',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/05-tech-stack.md',
          },
          {
            label: 'DB 설계',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/06-database-design.md',
          },
          {
            label: 'ERD (시각화)',
            href: 'https://drive.google.com/file/d/1Skwmrr6G4MO5LNRt_-wZ00GbTrfBXWcg/view?usp=sharing',
          },
          {
            label: '테이블명세서',
            href: 'https://docs.google.com/spreadsheets/d/1LcSbtoZYwTN2SffkXg9lTdyw1kV6wSQjgHjYmQSTzRI/edit?usp=sharing',
          },
          {
            label: 'API 명세',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/07-api-spec.md',
          },
        ],
      },
      {
        id: 'trouble',
        label: '트러블 슈팅',
        title: '로그인과 퀴즈 상태를 연결하며 겪은 이슈',
        description:
          '구현보다 먼저 상태 흐름과 인증 구조를 맞추는 과정에서 발견한 문제를 어떻게 정리했는지 설명합니다.',
        focusPoints: ['인증 흐름 정리', '상태 동기화', '문제/결과 분리'],
        items: [
          {
            title: '상태 흐름 충돌 정리',
            points: [
              'Google OAuth 로그인 이후 카테고리 선택과 퀴즈 진행 상태가 꼬이지 않도록 화면 진입 지점을 분리했습니다.',
              '로그인 상태와 퀴즈 진행 상태를 같이 다루면 화면 전환이 복잡해지므로, 상태 책임을 더 작게 나눴습니다.',
              '문제 풀이 결과와 랭킹 반영 시점을 분리해 사용자가 흐름을 잃지 않도록 정리했습니다.',
            ],
          },
          {
            title: '응답과 화면 구조 보정',
            points: [
              '퀴즈 응답 형태가 화면에서 바로 쓰이도록 정리해 중간 가공을 최소화했습니다.',
              '문제별 정답과 해설을 같은 카드 흐름 안에서 보여주도록 배치해 사용자가 다시 찾지 않아도 되게 했습니다.',
              '모바일에서는 버튼 밀도와 카드 간격을 조정해 한 화면에 필요한 정보가 과하게 겹치지 않도록 보정했습니다.',
            ],
          },
        ],
        documentTitle: '트러블 슈팅 자료',
        documentDescription: '로그인, 상태, 응답 구조를 정리한 참고 링크와 문서 자료입니다.',
        documentImage: asset('/media/thumb-tricky-quiz.png'),
        referenceLinks: [
          {
            label: '테스트케이스',
            href: 'https://docs.google.com/spreadsheets/d/1mV7YmM_DHA_KmUq72hfjmdo5noZTF4epx7f-teHFLZM/edit?usp=sharing',
          },
          {
            label: '트러블 슈팅 계획',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/09-dev-log.md',
          },
          {
            label: '테스트 계획',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/10-test-plan.md',
          },
          {
            label: '오픈 질문',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/11-open-questions.md',
          },
          {
            label: 'GitHub 저장소',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz',
          },
        ],
      },
      {
        id: 'feeling',
        label: '느낀점',
        title: '작은 퀴즈 서비스로 서비스 구조를 더 크게 본 경험',
        description:
          '기능은 단순해 보여도 로그인, 문제, 결과, 랭킹이 연결되면 서비스 구조가 훨씬 중요해진다는 점을 배웠습니다.',
        focusPoints: ['서비스 구조 이해', '문서화 습관', '다음 확장 방향'],
        items: [
          {
            title: '프로젝트를 통해 느낀 점',
            points: [
              'O/X 퀴즈처럼 단순한 기능도 인증과 데이터 흐름이 붙으면 생각보다 설계가 중요하다는 걸 체감했습니다.',
              '화면을 먼저 만들기보다 문서와 흐름을 먼저 정리해야 구현 중 방향이 흔들리지 않는다는 점을 배웠습니다.',
              '작은 서비스라도 포트폴리오에서는 문제 정의, 구조, 결과를 분명하게 설명하는 능력이 중요하다는 걸 느꼈습니다.',
            ],
          },
          {
            title: '다음 버전에서 보완하고 싶은 점',
            points: [
              '관리자 화면을 더해 문제 등록과 수정 흐름까지 연결하면 서비스가 더 완성도 있게 보일 수 있습니다.',
              '오답 분석과 카테고리별 통계를 붙이면 학습형 서비스 성격이 더 분명해집니다.',
              '결과와 랭킹 화면을 더 시각적으로 다듬으면 재참여 동기를 높이는 데 도움이 됩니다.',
            ],
          },
        ],
        documentTitle: '느낀점 정리 자료',
        documentDescription: '프로젝트를 통해 배운 점과 다음 확장 방향을 정리한 링크 모음입니다.',
        documentImage: asset('/media/thumb-tricky-quiz.png'),
        referenceLinks: [
          {
            label: '프로젝트 계획',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/01-project-plan.md',
          },
          {
            label: '기술 스택',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/05-tech-stack.md',
          },
          {
            label: 'API 명세',
            href: 'https://github.com/kdtlch3650-ctrl/tricky-quiz/blob/main/docs/07-api-spec.md',
          },
          {
            label: '배포 페이지',
            href: 'https://kdtlch3650-ctrl.github.io/tricky-quiz/',
          },
        ],
      },
    ],
  },
  {
    slug: 'csas',
    label: 'AI / 인프라 프로젝트',
    title: 'CSAS',
    subtitle: 'AI 기반 시설물 균열 감지와 EKS 배포 구조를 연결한 서비스',
    period: '2026.06 - 진행 중',
    team: '팀 프로젝트',
    role: 'AI 서비스 구조 분석 · Spring/FastAPI 연동 흐름 정리 · EKS 배포 구조 학습',
    contribution:
      '이미지 업로드 분석 흐름 정리 · Spring Boot와 FastAPI 책임 분리 · Docker/ECR/EKS 배포 흐름 문서화 · AI 서버 서비스화 방향 정리',
    summary:
      '시설물 이미지를 업로드하면 AI 서버가 균열 여부를 분석하고, 서비스 서버가 결과를 관리하는 구조를 학습한 AI/인프라 프로젝트입니다.',
    focusAreas: ['AI 균열 감지 서비스 구조', 'Spring Boot와 FastAPI 역할 분리', 'Docker/ECR/EKS 배포 흐름'],
    outcomes: ['AI 서버와 서비스 API 책임 분리', 'EKS 배포 단계 문서화', '모델/이미지 리소스 관리 방향 정리'],
    stacks: ['React', 'Spring Boot', 'FastAPI', 'PyTorch', 'Docker', 'ECR', 'EKS', 'S3', 'OpenSearch'],
    categories: ['ai', 'infra', 'react', 'java'],
    thumbnail: asset('/media/thumb-csas.svg'),
    liveUrl: '',
    repoUrl: 'https://github.com/YuYoungKwang/CSAS',
    referenceLinks: [
      { label: 'GitHub 저장소', href: 'https://github.com/YuYoungKwang/CSAS' },
      { label: 'Kubernetes 설정', href: 'https://github.com/YuYoungKwang/CSAS/tree/main/k8s' },
      {
        label: 'EKS 배포 워크플로',
        href: 'https://github.com/YuYoungKwang/CSAS/blob/main/.github/workflows/deploy-eks.yml',
      },
    ],
    sections: csasSections,
  },
  {
    slug: 'youtube-mood',
    label: 'AI / 인프라 프로젝트',
    title: 'YouTube Mood',
    subtitle: '자연어 감정 분석으로 YouTube 음악과 플레이리스트를 추천하는 서비스',
    period: '2026.06 - 진행 중',
    team: '개인 프로젝트',
    role: 'AI 추천 로직 · FastAPI 백엔드 · React UI · Docker/Kubernetes 인프라 문서화',
    contribution:
      '감정 분류 모델 연동 · 추천 검색어 생성 흐름 설계 · YouTube Data API 연동 · Docker Compose/k8s/EKS 문서화 · 추천 테스트 케이스 정리',
    summary:
      '사용자의 감정 문장을 AI가 분석해 분위기 태그와 장르 키워드로 변환하고, YouTube 음악 추천으로 연결하는 AI 추천 서비스입니다.',
    focusAreas: ['자연어 감정 분석', 'YouTube 추천 API 흐름', 'Docker/Kubernetes/EKS 인프라 학습'],
    outcomes: ['감정 그룹 기반 추천 검색어 생성', '추천 테스트 케이스 16개 검증', 'EKS/OpenSearch 확장 문서화'],
    stacks: [
      'React',
      'TypeScript',
      'Vite',
      'FastAPI',
      'PyTorch',
      'Transformers',
      'YouTube Data API',
      'Docker',
      'Kubernetes',
      'EKS',
      'OpenSearch',
    ],
    categories: ['ai', 'infra', 'react'],
    thumbnail: asset('/media/thumb-youtube-mood.png'),
    liveUrl: '',
    repoUrl: 'https://github.com/kdtlch3650-ctrl/youtube-mood',
    referenceLinks: [
      { label: 'GitHub 저장소', href: 'https://github.com/kdtlch3650-ctrl/youtube-mood' },
      {
        label: 'AI 연동 문서',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/12-ai-service-integration.md',
      },
      {
        label: 'Docker 가이드',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/18-docker-guide.md',
      },
      {
        label: 'EKS 초안',
        href: 'https://github.com/kdtlch3650-ctrl/youtube-mood/blob/feature/ai-mood-recommendation/docs/25-eks-draft.md',
      },
    ],
    sections: youtubeMoodSections,
  },
  {
    slug: 'doctorlink',
    label: 'REACT 프로젝트',
    title: 'DoctorLink',
    subtitle: '사전 문진과 건강 기록을 연결한 의료 보조 서비스',
    period: '2025.12.10 - 2025.12.24',
    team: '4인 팀 프로젝트',
    role: '프론트엔드 개발 · 최종 발표',
    contribution: '병원 예약 날짜/시간 저장 · 캘린더 이벤트 연동 · 문진 작성 페이지 · 사이드바 복약 체크 연동 · 최종 발표',
    summary:
      '지속적인 건강 기록을 바탕으로 환자의 사전 문진과 의료진의 환자 관리를 연결해 문진 공백을 줄이는 건강 관리 서비스 프로젝트입니다.',
    focusAreas: ['사전 문진 흐름 설계', '병원 예약과 캘린더 연동', '복약 체크와 상태 동기화'],
    outcomes: ['문진 공백 최소화', '진료 전 정보 정리', '환자·의료진 모두를 고려한 UX'],
    stacks: ['HTML5', 'CSS', 'React.js', 'JavaScript (ES6+)', 'VS Code', 'GitHub'],
    categories: ['react'],
    thumbnail: asset('/media/thumb-doctorlink.png'),
    liveUrl: 'https://kdtlch3650-ctrl.github.io/DoctorLink/',
    repoUrl: 'https://github.com/kdtlch3650-ctrl/DoctorLink',
    docUrl: asset('/media/DoctorLink.pdf'),
    youtubeUrl: 'https://youtu.be/qyc2cOj7X1Y',
    videoUrl: 'https://www.youtube.com/embed/qyc2cOj7X1Y',
    referenceLinks: [
      { label: '시연 영상', href: 'https://youtu.be/qyc2cOj7X1Y' },
      { label: '배포 페이지', href: 'https://kdtlch3650-ctrl.github.io/DoctorLink/' },
      { label: 'GitHub 저장소', href: 'https://github.com/kdtlch3650-ctrl/DoctorLink' },
      { label: 'PDF 원본', href: asset('/media/DoctorLink.pdf') },
    ],
    videoNote:
      'DoctorLink 시연 영상이 연결되어 있습니다. 포트폴리오 안에서 바로 핵심 흐름을 확인하고, 필요하면 유튜브 원본으로 이동할 수 있습니다.',
    sections: doctorLinkSections,
  },
  {
    slug: 'hashtrip',
    label: 'JAVA 프로젝트',
    title: 'hashTrip',
    subtitle: '성향 기반 여행 추천과 일정 기록 서비스',
    period: '2026.02.09 - 2026.03.03',
    team: '5인 팀 프로젝트',
    role: '기획 · 여행 일정 / 지도 UX 개발',
    contribution: '유저 플로우 작성 · 스토리보드 작성 · 여행 일정 작성 페이지 · 지도 상세 흐름 · 장소 추가 인터랙션 · 루트 카드 UI 개선',
    summary:
      '공공데이터와 성향 분석을 활용해 사용자 취향에 맞는 여행지를 추천하고, 여행 계획과 기록 공유 흐름까지 연결한 맞춤형 여행 큐레이션 프로젝트입니다.',
    focusAreas: ['성향 분석 기반 추천', '여행 일정과 지도 UX 연결', 'Java Spring MVC 구조 경험'],
    outcomes: ['검색 시간 단축', '취향 기반 장소 추천', '여행 계획과 기록 연결 UX'],
    stacks: ['Java 11', 'Spring 5.3.27', 'JSP', 'MyBatis', 'Oracle 19c', 'Git'],
    categories: ['java'],
    thumbnail: asset('/media/thumb-hashtrip.png'),
    liveUrl: '',
    repoUrl: 'https://github.com/kdtlch3650-ctrl/hifive',
    docUrl: asset('/media/hashTrip.pdf'),
    youtubeUrl: 'https://youtu.be/67PwJ7UhVYI',
    videoUrl: 'https://www.youtube.com/embed/67PwJ7UhVYI',
    referenceLinks: [
      { label: '시연 영상', href: 'https://youtu.be/67PwJ7UhVYI' },
      { label: 'GitHub 저장소', href: 'https://github.com/kdtlch3650-ctrl/hifive' },
      { label: 'PDF 원본', href: asset('/media/hashTrip.pdf') },
    ],
    videoNote: 'hashTrip 시연 영상이 연결되어 있습니다.',
    sections: hashTripSections,
  },
];


