"use client";

import NavItem from "@/components/atom/link";
import "./index.scss";
import Button from "@/components/atom/button";

interface IIntroduce {
  name: string;
  role: string;
  descrition: string | TrustedHTML;
  imgUrl: string;
}

const Introduce = ({ name, descrition, role, imgUrl }: IIntroduce) => {
  const downloadCV = () => {
    const url = "/LE-TRUNG-DUY-CV.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "LE-TRUNG-DUY-CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        </div>
        <div className="portfolio-introduce__descrition">
          <p dangerouslySetInnerHTML={{ __html: descrition }}></p>
        </div>
        <div className="portfolio-introduce__contact">
          <Button text="Download CV" type="primary" onClick={downloadCV} />
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
