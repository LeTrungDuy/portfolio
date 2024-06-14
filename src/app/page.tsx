import Introduce from "@/components/molecules/introduce";
import avatar from "../../public/images/home.png";
import Container from "@/components/molecules/container";

const HomePage = () => {
  return (
    <Container>
      <div className="home animated fadeInLeft">
        <Introduce
          name="Duy"
          role="Front-end Developer"
          imgUrl={avatar.src}
          descrition={`I'm a front-end developer in Ho Chi Minh with <span>4+ years</span> of experience`}
        />
      </div>
    </Container>
  );
};

export default HomePage;
