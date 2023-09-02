import React from "react";
import "./Banner.css";
import kabirImage from "../../../assets/Image/ss.png";
import MokabirImage from "../../../assets/Image/kabir2.png";
import { Typewriter } from "react-simple-typewriter";
import Content from "../../Content/Content";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <section id="/" className="md:pt-32 pt-20">
        <Content>
          <div className="md:flex md:flex-row-reverse md:gap-10 md:items-center md:justify-between">
          <div data-aos="fade-left" className="md:w-1/3 h-full w-full">
            <div className="Image ">
              <img
                className="hidden md:block desktop"
                src={kabirImage}
                alt="Kabir"
              />
              <img
                className="md:hidden mobile"
                src={MokabirImage}
                alt="Kabir"
              />
            </div>
            </div>
            <div className="md:w-2/3 pt-7 md:pt-0" data-aos="fade-right">
              <div className="md:flex gap-10 items-center">
                <div className="space-y-7 hidden md:block">
                  <div>
                    <Link to="https://www.facebook.com/profile.php?id=100088846041154">
                      <FaFacebookF className="social-media" />
                    </Link>
                  </div>
                  <div>
                    <Link to="https://www.linkedin.com/in/kabirhossen">
                      <FaLinkedinIn className="social-media" />
                    </Link>
                  </div>
                  <div>
                    <Link to="https://www.instagram.com/kabirr_hossen/">
                      {" "}
                      <FaInstagram className="social-media" />
                    </Link>
                  </div>
                  <div>
                    <Link to="https://twitter.com/KabirHossenn">
                      {" "}
                      <FaTwitter className="social-media" />
                    </Link>
                  </div>
                </div>
                <div>
                  <h1 className="md:text-5xl text-2xl  text-white font-bold">
                    <span className="text-[#A362FF] md:text-6xl text-5xl">
                      Hello!
                      <br />
                    </span>
                    <span className="text-4xl">
                      {" "}
                      I'M <span className="text-[#38126d]">Kabir Hossen</span>
                    </span>
                  </h1>
                  <h4 className=" text-3xl md:leading-normal leading-5 mt-4 font-bold text-white">
                    I am a
                    <span style={{ color: "gray", fontWeight: "bold" }}>
                      <Typewriter
                        words={[
                          "Web Developer",
                          " Front End Developer",
                          " MERN Developer",
                          " React Developer",
                        ]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>
                  </h4>
                  <p className="pt-2 text-white font-medium">
                    I'm web Designer from Bangladesh. and i am very Passionate
                    and dedicated to my work with a strong focus in Problem
                    solving. I have to get new experiences and aways to learn
                    from my surroundings. I lokking forward to any
                    oopportunities an dchallenges.
                  </p>
                  <div className=" flex gap-7 pt-7 md:hidden">
                    <Link to="https://www.facebook.com/profile.php?id=100088846041154">
                      <FaFacebookF className="social-media" />
                    </Link>
                    <Link to="www.linkedin.com/in/kabirhossen">
                      {" "}
                      <FaLinkedinIn className="social-media" />
                    </Link>
                    <Link to="https://www.instagram.com/kabirr_hossen/">
                      {" "}
                      <FaInstagram className="social-media" />
                    </Link>
                    <Link to="https://twitter.com/KabirHossenn">
                      {" "}
                      <FaTwitter className="social-media" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </section>
    </div>
  );
};

export default Banner;
