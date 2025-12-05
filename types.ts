export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  PROFILE = 'PROFILE',
  CALENDAR = 'CALENDAR',
  STRATEGY = 'STRATEGY',
  SCRIPTS = 'SCRIPTS',
  GROWTH = 'GROWTH'
}

export interface ProductInfo {
  name: string;
  focus: string;
  targetAudience: string;
  approach: string;
  color: string;
  icon: string;
}

export interface CalendarDay {
  day: string;
  focus: string;
  activities: {
    type: 'Story' | 'Feed' | 'Reel';
    description: string;
  }[];
}

export interface ScriptTemplate {
  title: string;
  product: string;
  content: string;
  type: 'Reel' | 'Story';
}