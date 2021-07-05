import ImagesContainer from '../atoms/ImageContainer';
import CardFooter from '../molecules/CardFooter';

interface IProps {
  cls: string;
  figureId: string;
  srcDefault: string;
  srcMobile: string;
  srcTablet: string;
  srcDesktop: string;
  alt: string;
  petName: string;
  petAge: string;
  petLocation: string;
  petGenre: string;
  petSize: string;
  characteristics: string[];
}

const Card = ({
  cls,
  figureId,
  srcDefault,
  srcMobile,
  srcTablet,
  srcDesktop,
  alt,
  petName,
  petAge,
  petLocation,
  petGenre,
  petSize,
  characteristics,
}: IProps) => {
  return (
    <article>
      <ImagesContainer
        cls={cls}
        figureId={figureId}
        srcDefault={srcDefault}
        srcMobile={srcMobile}
        srcTablet={srcTablet}
        srcDesktop={srcDesktop}
        alt={alt}
      />
      <CardFooter
        petName={petName}
        petAge={petAge}
        petLocation={petLocation}
        petGenre={petGenre}
        petSize={petSize}
        characteristics={characteristics}
      />
    </article>
  );
};

export default Card;
