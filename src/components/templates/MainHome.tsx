import Card from '../organisms/Card';

const MainHome = () => {
  return (
    <main>
      <Card
        cls='Card'
        figureId='Hello World'
        srcDefault='Hello World'
        srcMobile='Hello World'
        srcTablet='Hello World'
        srcDesktop='Hello World'
        alt='Hello World'
        petName='Hello World'
        petAge='Hello World'
        petLocation='Hello World'
        petGenre='Hello World'
        petSize='Hello World'
        characteristics={['1','2','3']}
      />
    </main>
  );
};

export default MainHome;
