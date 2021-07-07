import Form from '../molecules/Form';
import Inputs from '../atoms/Inputs';

export interface ISignupPropsComponent {}

const SignupComponent = () => {
  const handleSubmit = (e): void => {
    e.preventDefault();
    const userName = e.target[0].value;
    const userLastname = e.target[1].value;
    const userEmail = e.target[2].value;
    const userPassword = e.target[3].value;

    const user = {
      userName,
      userLastname,
      userEmail,
      userPassword,
    };

    console.log(JSON.stringify(user));
    fetch('/api/users/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <Form ev={handleSubmit}>
      <Inputs type="text" accept={null} inpName="userName" placeholder="name" />
      <Inputs type="text" accept={null} inpName="userLastname" placeholder="lastname" />
      <Inputs type="text" accept={null} inpName="userEmail" placeholder="email" />
      <Inputs
        type="text"
        accept={null}
        inpName="userPassword"
        placeholder="password"
      />
      <input type="submit" />
    </Form>
  );
};

export default SignupComponent;
