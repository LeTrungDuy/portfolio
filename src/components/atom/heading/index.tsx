import "./index.scss";

interface IHeading {
  note: string;
  text: string;
}

const Heading = ({ note, text }: IHeading) => {
  return (
    <div className="portfolio-heading">
      <span>{note}</span>
      <h3>{text}</h3>
    </div>
  );
};

export default Heading;
