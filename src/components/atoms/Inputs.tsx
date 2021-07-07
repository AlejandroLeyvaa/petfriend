export interface InputsProps {
  type: string;
  accept: string | null;
  inpName: string;
  placeholder: string;
}

const Inputs = ({ type, accept, inpName, placeholder}: InputsProps) => {
  return <input type={type} accept={accept} name={inpName} placeholder={placeholder} />;
};

export default Inputs;
