interface IProps {
  petName: string;
  petAge: string;
  petLocation: string;
  petGenre: string;
  petSize: string;
  characteristics: string[],
}

const CardFooter = ({
  petName,
  petAge,
  petLocation,
  petGenre,
  petSize,
  characteristics
}) => {
  return (
      <div className='Card-footer'>
        <p>{petName}</p>
        <p>{petAge}</p>
        <p>{petLocation}</p>
        <p>{petGenre}</p>
        <p>{petSize}</p>
        <ul>
          {
            characteristics.map((characteristic) => (
              <li>{characteristic}</li>
            ))
          }
        </ul>
      </div>
   );
}

export default CardFooter;