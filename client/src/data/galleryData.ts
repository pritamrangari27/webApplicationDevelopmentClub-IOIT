// Gallery Data - Event Photos
export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  team: string;
}

export const galleryImages: GalleryImage[] = [
  // Add your event photos here following this format:
  // {
  //   id: 1,
  //   src: '/images/eventPhotos/workshops/web-dev-bootcamp-1.jpg',
  //   title: 'Web Development Bootcamp 2025',
  //   category: 'Workshop',
  //   date: '2025-08-15',
  //   description: 'Students learning React fundamentals'
  // },
  
  // Sample entries (replace with actual photos):
  {
    id: 1,
    src: '/images/eventPhotos/event1.jpg',
    title: 'Philants',
    team: 'Anushka Gaikwad', 'Akshat Bhosale', 'Sarthak Deochake', 'Ashish Kharde','Chinmay Nakwa', 'Swaroop Patil'
  },
  {
    id: 2,
    src: '/images/eventPhotos/event2.jpg',
    title: 'Green Club IOIT',
    team: 'Chinmay Nakwa'
  },
  {
    id: 3,
    src: '/images/eventPhotos/event3.jpg',
    title: 'Website',
    team: 'Swaroop Patil','Ashish Kharde'
  },
  {
    id: 4,
    src: '/images/eventPhotos/event4.jpg',
    title: 'AI Graveyard',
    team: 'Swaroop Patil'
  },
  {
    id: 5,
    src: '/images/eventPhotos/event5.jpg',
    title: 'Jeevan',
    team: 'Swaroop Patil', 'Bhumi Shinde'
  },
  {
    id: 6,
    src: '/images/eventPhotos/event6.jpg',
    title: 'Devrai',
    team: 'Sarvesh Kolte'
  },
    {
    id: 7,
    src: '/images/eventPhotos/event7.jpg',
    title: 'Sahabhag',
    team: 'Swaroop Patil'
  },
    {
    id: 8,
    src: '/images/eventPhotos/event8.jpg',
    title: 'MLSA Club IOIT',
    team: 'Pritam Rangari','Amol Waghmare',
  },
];

