
export const MISSION_2026 = {
  title: "PROJECT DOMINION",
  tagline: "Breaking the 200% Growth Barrier",
  revenue: {
    target: "23억 8,410만원",
    previous: "15억 2,999만원",
    growth: "+56%",
    netProfit: "7억 0,000만원"
  }
};

export const SECTOR_REVENUE = [
  { no: 1, name: "건축 설계", group: "Pillar", target: "7억 9,955만원", detail: "일반고/장기/단기 통합", leader: "강민기/최규남" },
  { no: 2, name: "바리스타", group: "Pillar", target: "4억 8,274만원", detail: "일반고/단기 통합", leader: "박신희" },
  { no: 3, name: "물류 회계", group: "Strategic", target: "2억 6,945만원", detail: "장기/단기 통합", leader: "염숙" },
  { no: 4, name: "디자인/영상", group: "Strategic", target: "2억 5,461만원", detail: "일반고/단기 통합", leader: "강민기/채수훈" },
  { no: 5, name: "이미용/뷰티", group: "Support", target: "1억 7,064만원", detail: "일반고/단기 통합", leader: "강연우" },
  { no: 6, name: "일반 사무", group: "Support", target: "1억 6,675만원", detail: "단기 과정 전담", leader: "박한별" },
  { no: 7, name: "제과제빵", group: "Support", target: "1억 4,035만원", detail: "단기 과정 전담", leader: "김단미" }
];

export const RETENTION_TARGETS = [
  { sector: "식음료서비스", rate: "40.0%" },
  { sector: "일반사무/회계", rate: "25.0%" },
  { sector: "제과제빵/생산", rate: "25.0%" },
  { sector: "디자인/영상", rate: "20.0%" },
  { sector: "정보기술/건축", rate: "15.0%" }
];

export const MH_TARGETS = [
  { name: "최규남", target: 3000, dept: "건축설계" },
  { name: "강민기", target: 3000, dept: "시각디자인" },
  { name: "염숙", target: 3000, dept: "회계" },
  { name: "김단미", target: 3000, dept: "제과제빵" },
  { name: "박한별", target: 2000, dept: "사무" }
];

export const COMPETITORS = [
  {
    name: "광산그린컴퓨터아트학원",
    weakness: "밴드운영 미흡, 포트폴리오 공유 부재",
    improvement: "건축설계/디자인 운영예정, 장기과정 상담교육 강화"
  },
  {
    name: "광주컴퓨터기술학원",
    weakness: "정보처리에 국한된 과정운영",
    improvement: "수시 계좌제 과정신청 활성화 및 직종 다변화"
  }
];

export const INFRA_STATUS = {
  itLabs: 11,
  practicalLabs: 5,
  labDetails: [
    { type: "IT 실습실", count: 11, detail: "일반고 3, 국기 4, 계좌제 3, 외부 1" },
    { type: "실기 실습실", count: 5, detail: "제과제빵 2, 바리스타 2, 미용 1" }
  ]
};
