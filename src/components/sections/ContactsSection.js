import "../../stylesheets/sections/ContactsSection.css";
import { images } from "../../assets/images/index";
import Toffee from "../standalone/Toffee";
import Title from "../standalone/Title";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <Title text="Get in Touch"/>
        <p className="section-description">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
        
        <div className="contact-links">
           <a href="mailto:sameertrivedi1234@gmail.com">
            <Toffee name="Mail" src={images.gmail} />
          </a>
          <a href="https://www.linkedin.com/in/sameert89/" target="new">
            <Toffee name="Linkedin" src={images.linkedin} />
          </a>
          <a href="https://github.com/sameert89" target="new">
            <Toffee name="Github" src={images.github} />
          </a>
          <a href="https://www.youtube.com/@Sameer.Trivedi" target="new">
            <Toffee name="Youtube" src={images.youtube} />
          </a>
        </div>
        
        <footer className="site-footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} kernelrider.in. All rights reserved.</p>
            <p className="footer-tagline">Built with passion and code.</p>
          </div>
        </footer>
      </div>
      
    </section>
  );
};

export default ContactSection;