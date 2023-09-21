import Heading from "@/components/atom/heading";
import "./index.scss";
import NavItem from "@/components/atom/link";
import Tag from "@/components/atom/tag";
import Divider from "@/components/atom/divider";
import Card from "@/components/atom/card";

const SKILLS = ["Html", "Scss", "Javascript", "ReactJS", "Typescript", "Redux"];
const TOOLS = ["Git", "Jira"];
const DETAILS = [
  { title: "AGE", value: "27" },
  { title: "MAIL", value: "letrungduy11496@gmail.com" },
  { title: "PHONE", value: "+84 963205494" },
];
const TOTALS = [
  { title: "4+", subTitle: "Years of Experience" },
  { title: "7", subTitle: "Projects Completed" },
  { title: "2", subTitle: "Big Project" },
];

const Experience = () => {
  return (
    <div className="portfolio-experience">
      <div className="portfolio-experience__wrapper">
        <div className="portfolio-experience__left">
          <Heading note="- Nice to meet you!" text="Le Trung Duy" />
          <div className="portfolio-experience__role">Web Developer</div>
          <NavItem href="/project" text="Got a project?" type="primary" />
        </div>
        <div className="portfolio-experience__right">
          <p>
            {`Hi, I'm Duy. I am a passionate front-end developer with four years of
            hands-on experience in web experiences.`}
          </p>
          <p>
            {`Throughout my journey, the projects I have worked on are in the field of e-commerce, banking, branding etc.I'm a sociable. Enjoy working in a team and learning new technologies.Looking forward to working with you.`}
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
        <Heading note="- SKills" text="My knowledge" />
        <ul className="portfolio-experience__list">
          <li className="portfolio-experience__list-title">Langague:</li>
          {SKILLS.map((item) => (
            <li key={item}>
              <Tag text={item} />
            </li>
          ))}
        </ul>
        <ul className="portfolio-experience__list">
          <li className="portfolio-experience__list-title">Tools:</li>
          {TOOLS.map((item) => (
            <li key={item}>
              <Tag text={item} />
            </li>
          ))}
        </ul>
        <ul className="portfolio-experience__list">
          <li className="portfolio-experience__list-title">Design System:</li>
          <li>Atomic</li>
        </ul>
        <ul className="portfolio-experience__list">
          <li className="portfolio-experience__list-title">Accessibility:</li>
          <li>Website accessibility for people with disabilities.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
