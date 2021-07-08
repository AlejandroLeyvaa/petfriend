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
        <p className="petName">{petName}</p>
        <p className="petAge">{petAge}</p>
        <p className="petLocation-first">{petLocation[0]}</p>
        <p className="petLocation-second">{petLocation[1]}</p>
        <p className="petGenre">{petGenre}</p>
        <p className="petSize">{petSize}</p>
        <ul className="petCharacteristics">
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