import Introduce from "@/components/molecules/introduce";
import Link from "next/link";
import avatar from "../../public/images/home.png";

const HomePage = () => {
  return (
    <>
      <Introduce
        name="Duy"
        role="Front-end Developer"
        location="Ho Chi Minh"
        imgUrl={avatar.src}
        descrition={`I'm a front-end developer in Ho Chi Minh with <span>4+ years</span> of experience`}
      />
    </>
  );
};

export default HomePage;
