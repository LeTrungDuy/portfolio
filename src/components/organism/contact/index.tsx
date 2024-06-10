import Heading from "@/components/atom/heading";
import Container from "@/components/molecules/container";
import "./index.scss";

const Contact = () => {
  return (
    <div className="portfolio-contact">
      <Container>
        <div className="portfolio-contact__wrapper">
          <div className="portfolio-contact__left">
            <Heading note="- LET'S CONNECT" text="Get in touch" />
            <div className="portfolio-contact__role">
              I&apos;m currently ready for a job at a new company, so please
              message me about anything you&apos;d like to pass me along.
            </div>
            <div className="portfolio-contact__infor">
              <ul className="portfolio-contact__list">
                <li>
                  <a href="tel:+84 963205494">+84 963 205 494</a>
                </li>
                <li>
                  <a href="mailto:letrungduy11496@gmail.com">
                    letrungduy11496@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="portfolio-contact__maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.128277717293!2d106.69851007584121!3d10.80148598934887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b86b0d0bd9%3A0x52c56f7a58a9558e!2zOTAvMjIgxJAuIFbFqSBUw7luZywgUGjGsOG7nW5nIDIsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1717748961138!5m2!1sen!2s"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
