import { useEffect, useState } from 'react';
import Card from '../organisms/Card';

const MainHome = () => {
  const [petList, setPetList] = useState<TPet[]>([]);

  useEffect(() => {
    fetch('/api/pets')
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data);
        setPetList(data);
      });
  }, []);

  return (
    <main id="Main">

      <h1>Pets</h1>

      {petList.length > 0 &&
        petList.map((item) => {
          const {
            id,
            petName,
            petAge,
            petLocation: {
              worldLocation,
              cordsLocation
            },
            petGenre,
            petSize,
            images: { imageSmall, imageMedium, imageBig },
            characteristics,
          } = item;
          return (
            <Card
              cls='Card-figure'
              key={id}
              figureId={id}
              srcDefault={imageSmall}
              srcMobile={imageSmall}
              srcTablet={imageMedium}
              srcDesktop={imageBig}
              alt={petName}
              petName={petName}
              petAge={petAge}
              petLocation={[worldLocation, cordsLocation]}
              petGenre={petGenre}
              petSize={petSize}
              characteristics={characteristics}
            />
          )
        })
      }

    </main>
  );
};

export default MainHome;
