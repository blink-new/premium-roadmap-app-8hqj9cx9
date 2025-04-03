
export type Status = 'now' | 'next' | 'later';

export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface RoadmapCard {
  id: string;
  title: string;
  description: string;
  status: Status;
  progress: number;
  productSection: string;
  productGoal: string;
  stakeholder: string;
  tags: Tag[];
}

export interface Solution {
  id: string;
  name: string;
  mission: string;
  vision: string;
  cards: RoadmapCard[];
}