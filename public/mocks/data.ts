import javascrpit from "../icons/JS.svg";
import react from "../icons/react.svg";
import svelte from "../icons/svelte.svg";
import redux from "../icons/redux.svg";
import next from "../icons/next.svg";
import jira from "../icons/jira.svg";
import git from "../icons/github.svg";
import atomic from "../icons/atomic.svg";
import accessibility from "../icons/accessibility.png";
import calmara from "../images/project/Calmara.png";
import men from "../images/project/Men.png";
import aon from "../images/project/aon.webp";
import sony from "../images/project/sony-bank.png";
import daikin from "../images/project/daikin.svg";
import beautimedi from "../images/project/beautimedi.webp";

export const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

export const SOCIAL_LIST = [
  { social: "facebook", href: "https://www.facebook.com/trungduy.le.9/" },
  {
    social: "linkedin",
    href: "https://www.linkedin.com/in/le-trung-duy-559671146/",
  },
];

export const SKILLS = [
  {
    id: 1,
    name: "JavaScript",
    logo: javascrpit,
  },
  {
    id: 2,
    name: "ReactJs",
    logo: react,
  },
  {
    id: 3,
    name: "Redux",
    logo: redux,
  },
  {
    id: 4,
    name: "NextJs",
    logo: next,
  },
  {
    id: 5,
    name: "Svelte",
    logo: svelte,
  },
];
export const TOOLS = [
  {
    id: 1,
    name: "Git",
    logo: git,
  },
  {
    id: 2,
    name: "Jira",
    logo: jira,
  },
];
export const OTHERS = [
  {
    id: 1,
    name: "Atomic Design",
    logo: atomic,
  },
  {
    id: 2,
    name: "Accessibility",
    logo: accessibility,
  },
];
export const DETAILS = [
  { title: "AGE", value: "28" },
  { title: "MAIL", value: "letrungduy11496@gmail.com" },
  { title: "PHONE", value: "+84 963205494" },
];
export const TOTALS = [
  { title: "5+", subTitle: "Years of Experience" },
  { title: "9", subTitle: "Projects Completed" },
  { title: "2", subTitle: "Big Project" },
];
export const JOURNEY = [
  {
    id: 1,
    time: "2023-present",
    company: "HEHEALTH",
    link: "https://www.hehealth.ai/",
    position: "Front-end Developer",
    description:
      "HEHEALTH is a startup company that specializes in health products for men and women. Here I build Marketing Websites and WebApp for users to use",
  },
  {
    id: 2,
    time: "2022-2023",
    company: "Huge INC",
    link: "https://www.hugeinc.com/",
    position: "Front-end Developer",
    description:
      "At Huge INC, I participated in a large project to build a Marketing Website. Here I learned a professional working process.",
  },
  {
    id: 3,
    time: "2020-2022",
    company: "3FORCOM",
    link: "https://www.3forcom.com/",
    position: "Front-end Developer",
    description:
      "At at 3FORCOM, my team and I used ReactJs to build websites. The website areas we build are mostly about Ecommece and Ladingpage Website.",
  },
  {
    id: 4,
    time: "2019-2020",
    company: "DOKE",
    link: "",
    position: "Front-end Developer",
    description:
      "At DOKE we use haravan and shopify platforms to build Ecommece websites.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Calmara app",
    company: "HEHEALTH",
    urlImg: calmara,
    linkCompany: "https://www.hehealth.ai/",
    link: "https://app.calmara.ai/",
  },
  {
    id: 2,
    name: "Hehealth app",
    company: "HEHEALTH",
    urlImg: men,
    linkCompany: "https://www.hehealth.ai/",
    link: "https://app.hehealth.ai/?utm=hhwebsite",
  },
  {
    id: 3,
    name: "AON",
    company: "HUGE",
    urlImg: aon,
    linkCompany: "https://www.hugeinc.com/",
    link: "https://aon.com/",
  },
  {
    id: 4,
    name: "SONY BANK",
    company: "IVC/ISB (Onsite)",
    urlImg: sony,
    linkCompany: "https://isb-vietnam.com.vn/",
    link: "https://moneykit.net/",
  },
  {
    id: 5,
    name: "DAIKIN-Corporate",
    company: "3FORCOM",
    urlImg: daikin,
    linkCompany: "https://www.3forcom.com/",
    link: "https://www.daikin.com.vn/",
  },
  {
    id: 6,
    name: "Beautymedi",
    company: "3FORCOM",
    urlImg: beautimedi,
    linkCompany: "https://www.3forcom.com/",
    link: "https://www.beautymedi.vn/",
  },
];
