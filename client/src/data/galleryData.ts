// Gallery Data - Event Photos
export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  team: string[];
  category?: string;
  date?: string;
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/eventPhotos/event1.jpeg',
    title: 'Philants',
    team: ['Anushka Gaikwad', 'Akshat Bhosale', 'Sarthak Deochake', 'Ashish Kharde', 'Chinmay Nakwa', 'Swaroop Patil'],
    category: 'Project',
    date: '2026-01-15'
  },
  {
    id: 2,
    src: '/images/eventPhotos/event2.jpeg',
    title: 'Green Club IOIT',
    team: ['Chinmay Nakwa'],
    category: 'Project',
    date: '2026-01-20'
  },
  {
    id: 3,
    src: '/images/eventPhotos/event3.jpeg',
    title: 'Website',
    team: ['Swaroop Patil', 'Ashish Kharde'],
    category: 'Project',
    date: '2026-01-25'
  },
  {
    id: 4,
    src: '/images/eventPhotos/event4.jpeg',
    title: 'AI Graveyard',
    team: ['Swaroop Patil'],
    category: 'Project',
    date: '2026-01-28'
  },
  {
    id: 5,
    src: '/images/eventPhotos/event5.jpeg',
    title: 'Jeevan',
    team: ['Swaroop Patil', 'Bhumi Shinde'],
    category: 'Project',
    date: '2026-02-01'
  },
  {
    id: 6,
    src: '/images/eventPhotos/event6.jpeg',
    title: 'Devrai',
    team: ['Sarvesh Kolte'],
    category: 'Project',
    date: '2026-02-02'
  },
  {
    id: 7,
    src: '/images/eventPhotos/event7.jpeg',
    title: 'Sahabhag',
    team: ['Swaroop Patil'],
    category: 'Project',
    date: '2026-02-03'
  },
  {
    id: 8,
    src: '/images/eventPhotos/event8.jpeg',
    title: 'MLSA Club IOIT',
    team: ['Pritam Rangari', 'Amol Waghmare'],
    category: 'Project',
    date: '2026-02-04'
  },
];

