import "./index.scss";

interface ICard {
  title: string;
  subTitle: string;
  theme?: "yellow" | "green";
}

const Card = ({ title, subTitle, theme }: ICard) => {
  return (
    <div className={`portfolio-card ${theme ? theme : ""}`}>
      <h3>{title}</h3>
      <span>{subTitle}</span>
    </div>
  );
};

export default Card;
