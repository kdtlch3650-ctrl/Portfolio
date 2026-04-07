export const profile = {
  brand: "LC's",
  name: 'LEECHANHEE',
  title: 'Frontend Developer Portfolio',
  headline: '기능을 끝까지 연결하는 프론트엔드 개발자',
  description:
    '기획 문서부터 구현 결과, 그리고 트러블 슈팅과 회고까지 한 흐름으로 정리하는 포트폴리오를 만들고 있습니다.',
  intro:
    '사용자가 실제로 체감하는 예약, 문진, 데이터 흐름을 화면 안에서 자연스럽게 이어 주는 작업을 좋아합니다. React 기반 프로젝트를 중심으로 구조를 정리하고, 구현한 기능을 설명 가능한 결과물로 남기는 데 집중합니다.',
  strengths: ['React 기반 화면 설계', '예약 / 문진 흐름 구현', '문서화와 발표 정리'],
  workflow: ['문제 정의를 먼저 정리', '기능 단위를 나눠 구현', '문서와 회고까지 결과물로 정리'],
  email: 'kdtlch3650@gmail.com',
  github: 'https://github.com/kdtlch3650-ctrl',
};

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'java', label: 'JAVA' },
  { id: 'react', label: 'REACT' },
];

const sharedSections = [
  {
    id: 'overview',
    label: '메인 소개',
    title: '프로젝트 개요와 핵심 가치',
    description: '서비스 배경과 목표, 그리고 프로젝트를 통해 강조하고 싶은 핵심 포인트를 먼저 정리합니다.',
    items: [
      {
        title: 'Overview',
        points: ['프로젝트 목적과 사용자 문제 정의', '기간, 인원, 역할, 기여도 요약', '핵심 기능과 결과물 중심 소개'],
      },
    ],
    documentTitle: '프로젝트 개요서',
    documentDescription: '실제 PDF 또는 PPT 원본으로 교체할 수 있는 문서 영역입니다.',
  },
  {
    id: 'planning',
    label: '기획 / UX',
    title: '메뉴트리, 시나리오, 스토리보드',
    description: '문서가 많은 만큼 정보 구조를 묶어서 사용자가 흐름을 한 번에 이해하도록 구성합니다.',
    items: [
      {
        title: 'UX Planning',
        points: ['메뉴 트리와 사용자 시나리오', '스토리보드와 화면 전개 순서', '기획 단계에서 중요하게 본 사용자 흐름'],
      },
    ],
    documentTitle: '기획 문서',
    documentDescription: '메뉴트리, 스토리보드, 사용자 시나리오 문서를 연결할 수 있습니다.',
  },
  {
    id: 'engineering',
    label: '개발 / 설계',
    title: '개발 환경과 시스템 구조',
    description: '개발 환경, 아키텍처, 테이블 명세, 플로우차트를 한 섹션에서 묶어 설명합니다.',
    items: [
      {
        title: 'Engineering',
        points: ['기술 스택과 개발 환경', '시스템 아키텍처와 데이터 구조', '프로세스 플로우차트와 설계 근거'],
      },
    ],
    documentTitle: '설계 문서',
    documentDescription: '아키텍처, 테이블 명세서, 플로우차트 자료를 연결할 수 있습니다.',
  },
  {
    id: 'trouble',
    label: '트러블 슈팅',
    title: '막혔던 지점과 개선 방향',
    description: '문제 상황, 해결 과정, 남은 보완 포인트를 분리해서 케이스 스터디처럼 보여줍니다.',
    items: [
      {
        title: 'Troubleshooting',
        points: ['문제 정의와 원인 분석', '해결 방식과 적용 결과', '추가로 개선하고 싶은 포인트'],
      },
    ],
    documentTitle: '트러블 슈팅 문서',
    documentDescription: '발표 자료나 회고 문서 링크를 넣기 좋은 자리입니다.',
  },
  {
    id: 'retrospective',
    label: '느낀점',
    title: '회고와 다음 단계',
    description: '프로젝트를 통해 배운 점과 다음 버전에서 확장하고 싶은 부분을 정리합니다.',
    items: [
      {
        title: 'Retrospective',
        points: ['프로젝트를 통해 배운 기준', '협업과 구현에서 얻은 인사이트', '다음 버전의 보완 계획'],
      },
    ],
    documentTitle: '회고 자료',
    documentDescription: '최종 보고서나 느낀점 정리 PPT를 연결할 수 있습니다.',
  },
];

const doctorLinkSections = [
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
          '환자와 의료기관 모두에게 가치가 되는 사용자 건강 관리 시스템을 지향했습니다.',
        ],
      },
      {
        title: '내가 맡아 구현한 영역',
        points: [
          '문진 작성 페이지를 연결하고 통증 기록 저장, 생활 습관 입력, 제출 흐름을 구현했습니다.',
          '병원 예약 날짜 저장, 캘린더 이벤트 저장, 사이드바 약 복용 체크 연동처럼 사용자가 바로 체감하는 흐름을 맡아 정리했습니다.',
        ],
      },
    ],
    documentTitle: 'DoctorLink PDF 보고서',
    documentDescription: '사용자가 전달한 DoctorLink PDF 원본을 바로 열어 볼 수 있습니다.',
    documentImage: '/media/docs/doctorlink-overview.png',
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
    documentImage: '/media/docs/doctorlink-planning.png',
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
    documentImage: '/media/docs/doctorlink-engineering.png',
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
    documentImage: '/media/docs/doctorlink-trouble.png',
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
          '협업 도구 활용 경험과 백엔드 필요성 인식을 통해 프론트엔드 구현 너머의 구조를 보게 되었습니다.',
          '문진을 기록으로, 기록을 진료로 연결하는 서비스라는 한 문장 메시지를 중심으로 프로젝트를 설명할 수 있게 되었습니다.',
        ],
      },
    ],
    documentTitle: '결론 및 마무리',
    documentDescription: '기대효과, 협업 인사이트, 결론이 정리된 DoctorLink PDF 문서입니다.',
    documentImage: '/media/docs/doctorlink-retrospective.png',
  },
];

const hashTripSections = [
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
      {
        title: '기대 효과',
        points: [
          '여행 계획에 들어가는 검색 시간과 동선 짜기 시간을 줄이는 것을 기대했습니다.',
          '내 취향에 맞는 장소를 발견하게 하여 여행 만족도를 높이고자 했습니다.',
          '축적된 성향 데이터를 바탕으로 이후 더 정교한 추천과 트렌드 분석으로 확장할 수 있는 기반을 만들었습니다.',
        ],
      },
    ],
    documentTitle: 'hashTrip 프로젝트 개요',
    documentDescription: '프로젝트 개요, 문제 정의, 서비스 플로우가 정리된 hashTrip PDF 자료입니다.',
    documentImage: '/media/docs/hashtrip-overview.png',
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
    documentImage: '/media/docs/hashtrip-planning.png',
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
    documentImage: '/media/docs/hashtrip-engineering.png',
    referenceLinks: [
      {
        label: '프로젝트 GitHub',
        href: 'https://github.com/YuYoungKwang/hifive.git',
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
    documentImage: '/media/docs/hashtrip-trouble.png',
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
    documentImage: '/media/docs/hashtrip-retrospective.png',
  },
];

export const projects = [
  {
    slug: 'doctorlink',
    label: 'REACT PROJECT',
    title: 'DoctorLink',
    subtitle: 'Pre-visit medical questionnaire and health record service',
    period: '2025.12.10 - 2025.12.24',
    team: '4인 팀 프로젝트',
    role: 'Frontend Developer · Final Presentation',
    contribution: '병원 예약 날짜/시간 저장 · 캘린더 이벤트 연동 · 문진 작성 페이지 · 사이드바 복약 체크 연동 · 최종 발표',
    summary:
      '지속적인 건강 기록을 바탕으로 환자의 사전 문진과 의료진의 환자 관리를 연결해 문진 공백을 줄이는 건강 관리 서비스 프로젝트입니다.',
    focusAreas: ['사전 문진 흐름 설계', '병원 예약과 캘린더 연동', '복약 체크와 상태 동기화'],
    outcomes: ['문진 공백 최소화', '진료 전 정보 정리', '환자·의료진 모두를 고려한 UX'],
    stacks: ['HTML5', 'CSS', 'React.js', 'JavaScript (ES6+)', 'VS Code', 'GitHub'],
    categories: ['react'],
    featured: true,
    thumbnail: '/media/thumb-doctorlink.svg',
    liveUrl: 'https://kdtlch3650-ctrl.github.io/DoctorLink/',
    repoUrl: 'https://github.com/kdtlch3650-ctrl/DoctorLink',
    docUrl: '/media/DoctorLink.pdf',
    youtubeUrl: 'https://youtu.be/qyc2cOj7X1Y',
    videoUrl: 'https://www.youtube.com/embed/qyc2cOj7X1Y',
    referenceLinks: [
      { label: '시연 영상', href: 'https://youtu.be/qyc2cOj7X1Y' },
      { label: '서비스 배포', href: 'https://kdtlch3650-ctrl.github.io/DoctorLink/' },
      { label: 'GitHub 저장소', href: 'https://github.com/kdtlch3650-ctrl/DoctorLink' },
      { label: 'PDF 원본', href: '/media/DoctorLink.pdf' },
    ],
    videoNote:
      'DoctorLink 시연 영상이 연결되어 있습니다. 포트폴리오 안에서 바로 핵심 흐름을 확인하고, 필요하면 유튜브 원본으로 이동할 수 있습니다.',
    sections: doctorLinkSections,
  },
  {
    slug: 'oneulfarm',
    label: 'REACT + JAVA',
    title: 'OneulFarm',
    subtitle: 'Agriculture commerce and analytics',
    period: '2026.03 - 진행 중',
    team: '팀 프로젝트',
    role: 'Frontend / Full Stack Collaboration',
    contribution: '프론트 구조화 · 화면 설계 · 문서 정리',
    summary:
      '가격 분석, 상품 탐색, 주문 플로우를 한 서비스 안에서 연결한 농식품 플랫폼 프로젝트입니다.',
    stacks: ['React', 'Spring MVC', 'MyBatis', 'PortOne', 'Recharts'],
    categories: ['react', 'java'],
    thumbnail: '/media/thumb-oneulfarm.svg',
    liveUrl: '',
    repoUrl: 'https://github.com/YuYoungKwang/oneulFarm',
    docUrl: '#',
    youtubeUrl: '',
    videoUrl: '',
    videoNote: '포트폴리오에서는 영상 또는 발표 녹화 링크를 연결할 예정인 영역입니다.',
    sections: sharedSections,
  },
  {
    slug: 'hashtrip',
    label: 'JAVA PROJECT',
    title: 'hashTrip',
    subtitle: 'Personalized travel curation and travel record community service',
    period: '2026.02.09 - 2026.03.03',
    team: '5인 팀 프로젝트',
    role: 'Planning · Travel Schedule / Map UX Development',
    contribution: '유저 플로우 작성 · 스토리보드 작성 · 여행 일정 작성 페이지 · 지도 상세 흐름 · 장소 추가 인터랙션 · 루트 카드 UI 개선',
    summary:
      '공공데이터와 성향 분석을 활용해 사용자 취향에 맞는 여행지를 추천하고, 여행 계획과 기록 공유 흐름까지 연결한 맞춤형 여행 큐레이션 프로젝트입니다.',
    focusAreas: ['성향 분석 기반 추천', '여행 일정과 지도 UX 연결', 'Java Spring MVC 구조 경험'],
    outcomes: ['검색 시간 단축', '취향 기반 장소 추천', '여행 계획과 기록 연결 UX'],
    stacks: ['Java 11', 'Spring 5.3.27', 'JSP', 'MyBatis', 'Oracle 19c', 'Git'],
    categories: ['java'],
    thumbnail: '/media/thumb-hashtrip.png',
    liveUrl: '',
    repoUrl: 'https://github.com/YuYoungKwang/hifive',
    docUrl: '/media/hashTrip.pdf',
    youtubeUrl: 'https://youtu.be/67PwJ7UhVYI',
    videoUrl: 'https://www.youtube.com/embed/67PwJ7UhVYI',
    referenceLinks: [
      { label: '시연 영상', href: 'https://youtu.be/67PwJ7UhVYI' },
      { label: 'GitHub 저장소', href: 'https://github.com/YuYoungKwang/hifive' },
      { label: 'PDF 원본', href: '/media/hashTrip.pdf' },
    ],
    videoNote: 'hashTrip 시연 영상이 연결되어 있습니다.',
    sections: hashTripSections,
  },
];
