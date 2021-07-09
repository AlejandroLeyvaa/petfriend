import Link from 'next/link';

interface IProps {
  petID: string;
  petName: string;
  petAge: number;
  petLocation: string[];
  petGenre: string;
  petSize: string;
  characteristics: string[];
}

const CardFooter = ({
  petID,
  petName,
  petAge,
  petLocation,
  petGenre,
  petSize,
  characteristics,
}: IProps) => {
  return (
    <div className="Card-footer">
      <Link href={`/pets/${encodeURIComponent(petID)}`}>
        <a className="petName">Name: {petName}</a>
      </Link>
      <p className="petAge">Age: {petAge}</p>
      <p className="petLocation-first">Location: {petLocation[0]}</p>
      {/* <p className="petLocation-second">{petLocation[1]}</p> */}
      <p className="petGenre">Genre: {petGenre}</p>
      <p className="petSize">Size: {petSize}</p>
      <ul className="petCharacteristics">
        <p>Characteristics</p>
        {characteristics.map((characteristic) => (
          <li key={Math.random()}>{characteristic}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardFooter;
