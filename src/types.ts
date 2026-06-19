export type TabType = 'home' | 'research' | 'technology' | 'patent' | 'documents' | 'contact';

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  badge: string;
}

export interface ArchitectureComponent {
  name: string;
  description: string;
  isPeripheral: boolean;
  spec: string;
  category: 'on-lens' | 'smart-case';
}

export interface ResearchPaper {
  title: string;
  authors: string[];
  abstract: string;
  journal: string;
  status: string;
  doi?: string;
}

export interface SafetySpec {
  parameter: string;
  value: string;
  safetyThreshold: string;
  status: 'Verified' | 'Monitoring';
}

export interface PatentClaim {
  number: number;
  title: string;
  description: string;
  status: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  vision: string;
  avatarSeed: string;
}

export interface Document {
  id: string;
  title: string;
  category: 'paper' | 'patent' | 'proposal' | 'architecture' | 'safety' | 'whitepaper';
  description: string;
  fileName: string;
  fileSize: string;
  version: string;
  releaseDate: string;
  downloadCount: number;
}
