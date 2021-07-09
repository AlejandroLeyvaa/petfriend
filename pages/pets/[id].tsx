import { useRouter } from 'next/router';
import OnePet from '../../src/components/templates/OnePet';

const currentPet = () => {
  const router = useRouter();
  const id = router.query.id;

  return <main className='Main-currentPet'>{id !== undefined ? <OnePet id={id} /> : null}</main>;
};

export default currentPet;
