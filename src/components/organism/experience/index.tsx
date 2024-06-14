import Heading from "@/components/atom/heading";
import NavItem from "@/components/atom/link";
import Divider from "@/components/atom/divider";
import Card from "@/components/atom/card";
import Container from "@/components/molecules/container";
import CardJourney from "@/components/molecules/card-journey";
import Carousel from "@/components/organism/carousel";
import Image from "next/image";
import {
  DETAILS,
  JOURNEY,
  OTHERS,
  PROJECTS,
  SKILLS,
  TOOLS,
  TOTALS,
} from "../../../../public/mocks/data";
import "./index.scss";
import Project from "@/components/molecules/project";

const Experience = () => {
  return (
    <div className="portfolio-experience">
      <Container>
        <div className="portfolio-experience__wrapper">
          <div className="portfolio-experience__left">
            <Heading note="- Nice to meet you!" text="Le Trung Duy" />
            <div className="portfolio-experience__role">Web Developer</div>
            <NavItem href="#project" text="Got a project?" type="primary" />
          </div>
          <div className="portfolio-experience__right">
            <p>
              {`Hi, I'm Duy. I am a passionate front-end developer with five years of
            hands-on experience in web experiences.`}
            </p>
            <p>
              {`Throughout my journey, the projects I have worked on are in the field of e-commerce, banking, branding, health etc. I'm sociable, enjoy working in a team and learning new technologies. Looking forward to working with you.`}
            </p>
            <div className="portfolio-experience__infor">
              {DETAILS.map((item) => (
                <div key={item.title} className="portfolio-experience__detail">
                  <span>{item.title}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ul className="portfolio-experience__list cards">
          {TOTALS.map((item, idx) => (
            <li key={item.title}>
              <Card
                title={item.title}
                subTitle={item.subTitle}
                theme={idx !== 0 && idx === 1 ? "yellow" : "green"}
              />
            </li>
          ))}
        </ul>
        <Divider />
        <div className="portfolio-experience__skill">
          <Heading note="- SKills" text="My skills" />
          <div className="portfolio-experience__skill-wrapper">
            <div className="portfolio-experience__skill-items">
              <p className="portfolio-experience__list-title">Langague:</p>
              <ul className="portfolio-experience__list">
                {SKILLS.map((item) => (
                  <li key={item.id}>
                    <Image width={50} height={50} src={item.logo} alt="" />
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="portfolio-experience__skill-items">
              <p className="portfolio-experience__list-title">Tools:</p>
              <ul className="portfolio-experience__list">
                {TOOLS.map((item) => (
                  <li key={item.id}>
                    <Image width={50} height={50} src={item.logo} alt="" />
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="portfolio-experience__skill-items">
              <p className="portfolio-experience__list-title">Other:</p>
              <ul className="portfolio-experience__list">
                {OTHERS.map((item) => (
                  <li key={item.id}>
                    <Image width={50} height={50} src={item.logo} alt="" />
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="portfolio-experience__journeys">
        <Container>
          <Heading note="- Experience" text="Everything about me!" />
          <div className="portfolio-experience__journeys-list">
            {JOURNEY.map((journey) => (
              <div
                className="portfolio-experience__journeys-item"
                key={journey.id}
              >
                <CardJourney
                  time={journey.time}
                  companyName={journey.company}
                  link={journey.link}
                  position={journey.position}
                  description={journey.description}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div id="project" className="portfolio-experience__projects">
        <Container>
          <Heading note="" text="Projects" />
          <div className="portfolio-experience__projects-slide">
            <Carousel>
              {PROJECTS.map((project) => (
                <Project
                  key={project.id}
                  urlImg={project.urlImg}
                  name={project.name}
                  company={project.company}
                  link={project.link}
                  linkCompany={project.linkCompany}
                />
              ))}
            </Carousel>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
