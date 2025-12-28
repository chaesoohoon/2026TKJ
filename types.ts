
export interface RevenueData {
  category: string;
  val2025: number;
  val2026: number;
}

export interface SectorData {
  name: string;
  target2026: number;
  attainment2025: number;
}

export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  type: string;
  content?: any;
}
