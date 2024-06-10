import Image from "next/image";
import "./index.scss";
import Link from "next/link";

interface IProject {
  urlImg: string;
  company: string;
  linkCompany: string;
  link: string;
  name: string;
}

const Project = ({ urlImg, company, linkCompany, link, name }: IProject) => {
  return (
    <div className="portfolio-project">
      <Link className="portfolio-project__link" href={link}>
        <Image src={urlImg} alt="Duy's project" />
      </Link>
      <Link href={linkCompany} className="portfolio-project__company">
        {company}
      </Link>
      <Link href={link} className="portfolio-project__name">
        {name}
      </Link>
    </div>
  );
};

export default Project;
