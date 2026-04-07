export const profile = {
  brand: "LC's",
  name: 'LEECHANHEE',
  title: 'Project Archive Portfolio',
  description:
    '프로젝트를 클릭하면 구현 결과뿐 아니라 기획, 설계, 트러블 슈팅, 회고까지 하나의 흐름으로 정리된 상세 페이지를 볼 수 있도록 구성했습니다.',
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

export const projects = [
  {
    slug: 'doctorlink',
    label: 'REACT PROJECT',
    title: 'DoctorLink',
    subtitle: 'Healthcare service case study',
    period: '2026.02 - 2026.04',
    team: '4인 팀 프로젝트',
    role: 'Frontend Developer',
    contribution: '기획 25% · UI/UX 50% · React 구현 60%',
    summary:
      '환자와 의료진의 화면 흐름을 분리하고 병원 검색, 캘린더, 대시보드, 커뮤니티까지 연결한 대표 프로젝트입니다.',
    stacks: ['React', 'React Router', 'MUI', 'Recharts', 'GitHub Pages'],
    categories: ['react'],
    thumbnail: '/media/thumb-doctorlink.svg',
    liveUrl: 'https://kdtlch3650-ctrl.github.io/DoctorLink/',
    repoUrl: 'https://github.com/kdtlch3650-ctrl/DoctorLink',
    docUrl: '#',
    videoNote: '영상 파일을 연결하면 이 영역을 실제 프로젝트 데모 영상 카드로 바로 교체할 수 있습니다.',
    sections: sharedSections,
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
    videoNote: '포트폴리오에서는 영상 또는 발표 녹화 링크를 연결할 예정인 영역입니다.',
    sections: sharedSections,
  },
  {
    slug: 'hifive',
    label: 'JAVA PROJECT',
    title: 'HiFive',
    subtitle: 'Travel planning service',
    period: '2026.02',
    team: '팀 프로젝트',
    role: 'Full Stack Developer',
    contribution: '화면 흐름 구현 · 인증 구조 정리 · 도메인 설계 참여',
    summary:
      '여행 루트 탐색과 플래너 작성 경험을 JSP 기반으로 구현한 Spring MVC 팀 프로젝트입니다.',
    stacks: ['Java', 'Spring MVC', 'JSP', 'MyBatis', 'Oracle'],
    categories: ['java'],
    thumbnail: '/media/thumb-hifive.svg',
    liveUrl: '',
    repoUrl: 'https://github.com/YuYoungKwang/hifive',
    docUrl: '#',
    videoNote: '발표 영상 또는 시연 영상을 연결하기 전까지는 대표 썸네일 카드로 유지됩니다.',
    sections: sharedSections,
  },
];
