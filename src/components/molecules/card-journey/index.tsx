import "./index.scss";

interface CardJourneyProps {
  time?: string;
  companyName: string;
  link?: string;
  position: string;
  description: string;
}

const CardJourney = ({
  time,
  companyName,
  link,
  position,
  description,
}: CardJourneyProps) => {
  return (
    <a href={link} target="_blank" className="m-card-journey">
      <div className="m-card-journey__time">
        <span>{time}</span>
        <span>{companyName}</span>
      </div>
      <div className="m-card-journey__title">{position}</div>
      <div className="m-card-journey__description">{description}</div>
    </a>
  );
};

export default CardJourney;
