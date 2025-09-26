export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;           // path under assets/ or external url
  tags: string[];
  category: 'web' | 'mobile' | 'api' | 'other' | string;
  repoUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
}

