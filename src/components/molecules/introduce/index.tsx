import { ReactNode } from "react";
import NavItem from "@/components/atom/link";
import "./index.scss";

interface IIntroduce {
  name: string;
  role: string;
  location: string;
  descrition: string | TrustedHTML;
  imgUrl: string;
}

const Introduce = ({
  name,
  descrition,
  role,
  location,
  imgUrl,
}: IIntroduce) => {
  return (
    <div className="portfolio-introduce">
      <div className="portfolio-introduce__infor">
        <div className="portfolio-introduce__title">
          <div className="portfolio-introduce__name">
            <p>{`Hi, I'm ${name}!`}</p>
          </div>
          <div className="portfolio-introduce__role">
            <p>{role}</p>
          </div>
          <div className="portfolio-introduce__location">
            <p>At {location}</p>
          </div>
        </div>
        <div className="portfolio-introduce__descrition">
          <p dangerouslySetInnerHTML={{ __html: descrition }}></p>
        </div>
        <div className="portfolio-introduce__contact">
          <NavItem text="Got a project?" href="/project" type="primary" />
          <NavItem text="Who i am?" href="/about" type="secondary" />
        </div>
      </div>
      <div className="portfolio-introduce__image">
        <img src={imgUrl} alt="avarta" />
      </div>
    </div>
  );
};

export default Introduce;
