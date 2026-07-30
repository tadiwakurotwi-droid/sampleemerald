export interface Initiative {
  id: string;
  title: string;
  category: 'Solar & Energy' | 'Reforestation' | 'Education' | 'Innovation';
  location: string;
  shortDesc: string;
  fullDesc: string;
  impactMetrics: string[];
  status: 'Active' | 'Expanding' | 'Completed Milestone';
  imageUrl: string;
  beneficiariesCount: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Workshops' | 'Field Work' | 'Community';
  location: string;
  date: string;
  imageUrl: string;
  caption: string;
  tags: string[];
}

export interface CorePillar {
  id: string;
  title: 'ACTION' | 'INCLUSION' | 'EQUITY';
  subtitle: string;
  description: string;
  quote: string;
  quoteAuthor: string;
  highlights: string[];
  iconName: string;
}

export interface NewsletterFormState {
  fullName: string;
  email: string;
  role: string;
  location: string;
  interests: string[];
}
