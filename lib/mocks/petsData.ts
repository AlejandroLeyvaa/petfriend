const data: Record<TPetID, TPet> = {
  '1': {
    id: '1',
    petName: 'Chuko',
    petAge: 8,
    petLocation: {
      worldLocation: 'Culiacan, Sinaloa',
      cordsLocation: '000 000 000',
    },
    petGenre: 'Male',
    petSize: 'Medium',
    images: {
      imageSmall: '/images/pets/Chuko-765.jpg',
      imageMedium: '/images/pets/Chuko-980.jpg',
      imageBig: '/images/pets/Chuko-1080.jpg',
    },
    characteristics: ['Happy'],
  },
  '2': {
    id: '2',
    petName: 'Aria',
    petAge: 2,
    petLocation: {
      worldLocation: 'Culiacan, Sinaloa',
      cordsLocation: '000 000 000',
    },
    petGenre: 'Female',
    petSize: 'Medium',
    images: {
      imageSmall: '/images/pets/Aria-765.jpg',
      imageMedium: '/images/pets/Aria-980.jpg',
      imageBig: '/images/pets/Aria-1080.jpg',
    },
    characteristics: ['Happy'],
  },

};

export default data;
