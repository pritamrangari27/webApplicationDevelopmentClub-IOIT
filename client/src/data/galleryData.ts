// Gallery Data - Event Photos
export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  team: string[];
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/eventPhotos/event1.jpeg',
    title: 'Philants',
    team: ['Anushka Gaikwad', 'Akshat Bhosale', 'Sarthak Deochake', 'Ashish Kharde', 'Chinmay Nakwa', 'Swaroop Patil']
  },
  {
    id: 2,
    src: '/images/eventPhotos/event3.jpeg',
    title: 'Website',
    team: ['Swaroop Patil', 'Ashish Kharde']
  },
  {
    id: 3,
    src: '/images/eventPhotos/event5.jpg',
    title: 'Jeevan',
    team: ['Swaroop Patil', 'Bhumi Shinde']
  },
  {
    id: 4,
    src: '/images/eventPhotos/event6.jpg',
    title: 'Devrai',
    team: ['Sarvesh Kolte']
  },
    {
    id: 5,
    src: '/images/eventPhotos/event2.jpeg',
    title: 'Green Club',
    team: ['Chinmay Nakwa']
  },
];

