import { useState, useEffect } from 'react';
import ImageContainer from '../atoms/ImageContainer';

const OnePet = ({ id }) => {
  const [pet, setPet] = useState<TPet>(null);
  useEffect(() => {
    id !== undefined &&
      fetch(`/api/pets/${id}`)
        .then((response) => response.json())
        .then(({ data }) => {
          setPet(data);
        });
  }, []);

  return(
    <>
      {pet !== null && (
        <div className='CurrentPet'>
          <ImageContainer
              children={''}
              cls={'CurrentPet-figure'}
              figureId={`CurrentPet-${pet.id}`}
              srcDefault={pet.images.imageSmall}
              srcMobile={pet.images.imageSmall}
              srcTablet={pet.images.imageMedium}
              srcDesktop={pet.images.imageBig}
              alt={pet.petName}
          />
            <div className='CurrentPet-data'>
              <p className='petName'>{pet.petName}</p>
              <p className='petAge'>{pet.petAge} Years old</p>
              <p className='petLocation-first'>Location: {pet.petLocation.worldLocation}</p>
              <p className='petGenre'>Genre: {pet.petGenre}</p>
              <p className='petSize'>Size: {pet.petSize}</p>
              <ul className='petCharacteristics'>
                <p>Characteristics</p>
              {
                pet.characteristics.map((characteristic) => (
                  <li key={Math.random()} >{characteristic}</li>
                  ))
                }
              </ul>
            </div>

            <div className={'CurrentPet-description'}>

            </div>

            <button>
              Adoptme!!!
            </button>
        </div>
      )}
    </>);
};

export default OnePet;
