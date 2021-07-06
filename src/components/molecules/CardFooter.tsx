interface IProps {
  petName: string;
  petAge: number;
  petLocation: string[];
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

  console.log(petLocation)
  return (
      <div className='Card-footer'>
        <p>{petName}</p>
        <p>{petAge}</p>
        <p>{petLocation[0]}</p>
        <p>{petLocation[1]}</p>
        <p>{petGenre}</p>
        <p>{petSize}</p>
        <ul>
          {
            characteristics.map((characteristic) => (
              <li key={Math.random()} >{characteristic}</li>
            ))
          }
        </ul>
      </div>
   );
}

export default CardFooter;