import MainHome from '../src/components/templates/MainHome';
import Header from '../src/components/atoms/Header';
import Footer from '../src/components/atoms/Footer';
import { SendimageForm } from '../src/components/molecules/SendimageForm';

const Home = () => {
  return (
    <>
      <Header>
        <span />
      </Header>
      <MainHome />
      <Footer>
        <SendimageForm />
      </Footer>
    </>
  );
};

export default Home;
