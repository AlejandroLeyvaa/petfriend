const Form = ({ children, ev }) => {
  return (
    <form onSubmit={ev}>
      { children}
    </form>
   );
}

export default Form;