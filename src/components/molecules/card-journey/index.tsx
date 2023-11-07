import "./index.scss";

interface CardJourneyProps {
  time?: string;
  companyName: string;
  position: string;
  description: string;
}

const CardJourney = ({
  time,
  companyName,
  position,
  description,
}: CardJourneyProps) => {
  return (
    <div className="m-card-journey">
      <div className="m-card-journey__time">
        <span>{time}</span>
        <span>{companyName}</span>
      </div>
      <div className="m-card-journey__title">{position}</div>
      <div className="m-card-journey__description">{description}</div>
    </div>
  );
};

export default CardJourney;
