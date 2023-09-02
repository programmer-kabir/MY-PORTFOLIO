import React from "react";
import './About.css'
import kabir from "../../../assets/Image/banner.png";
import Resume from "../../../assets/Resume/Kaibr Hossan (MERN Stack JR developer) Resume.pdf";
import Content from "../../Content/Content";
const About = () => {
  return (
    <Content>
      <div id="about" className="bg-color pt-16">
        <div data-aos="fade-up" data-aos-duration="3000">
          <h2 className="text-4xl font-bold text-center text-white py-10 ">
            About <span className="text-[#A362FF]">Me!!</span>{" "}
          </h2>
          <div className="md:flex justify-between items-center flex-row-reverse mx-auto md:gap-10">
            <div data-aos="fade-left">
              <div className="AboutImage ">
                <img
                  className="hidden md:block aboutDesktop"
                  src={kabir}
                  alt="Kabir"
                />
                <img className="md:hidden aboutMobile" src={kabir} alt="Kabir" />
              </div>
            </div>

            <div data-aos="fade-right">
              <div className="text-white mt-6 md:mt-0 text-justify">
                As a MERN Stack Developer, I have strong skills in React.js and
                JavaScript for building the front-end of websites. I also have
                experience with Node.js, Express.js, MongoDB, and Firebase,
                which are commonly used for back-end development. My focus is on
                creating responsive and user-friendly interfaces that work well
                on different browsers and devices. I am detail-oriented and
                strive to write clean and optimized code. <br /> <br />
                In addition to my core skills, I am familiar with popular
                frameworks like Tailwind, Bootstrap, and Material UI. I
                continuously update my knowledge and skills in web development
                to stay current with the latest technologies. My future goal is
                to become a full-stack developer, which means being proficient
                in both front-end and back-end development. <br />
                <span className="m-5">
                  <a href={Resume} download>
                    <button className="selectButton pt-5">My Resume</button>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default About;
