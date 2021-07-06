type Url = string;

type TPetID = string;

type TPetImages = {
  imageSmall: Url;
  imageMedium: Url;
  imageBig: Url;
}

type TPetLocation = {
  worldLocation: string,
  cordsLocation
}

type TPet = {
  id: TPetID;
  petName: string;
  petAge: number;
  petLocation: TPetLocation;
  petGenre: string;
  petSize: string;
  images: TPetImages,
  characteristics: string[];
};
