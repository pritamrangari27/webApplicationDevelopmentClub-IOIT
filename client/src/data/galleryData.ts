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
  {
    id: 6,
    src: '/images/eventPhotos/event7.jpg',
    title: '2023-24 WAD Club Presentation to FY Students',
    team: []
  },
  {
    id: 7,
    src: '/images/eventPhotos/event8.png',
    title: '2024-25 WAD Club Presentation to FY Students',
    team: []
  },
  {
    id: 8,
    src: '/images/eventPhotos/event9.jpg',
    title: 'Quiz on Web Development Event',
    team: []
  },
  {
    id: 9,
    src: '/images/eventPhotos/event10.png',
    title: 'Clone IT Event',
    team: []
  },
];

