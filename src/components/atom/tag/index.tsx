import "./index.scss";

interface ITag {
  text: string;
}

const Tag = ({ text }: ITag) => {
  return (
    <div className="portfolio-tag">
      <span>{text}</span>
    </div>
  );
};

export default Tag;
