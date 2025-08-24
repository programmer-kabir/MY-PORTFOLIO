import image from "../../../assets/banner/file.png";
import { Typewriter } from "react-simple-typewriter";
import Content from "../../Content";
import { ScrollLink } from "react-scroll";

const Banner = () => {
  return (
    <section
      id="/"
      className="relative w-full  pt-20 md:pt-7 lg:pt-0 h-[600px] md:h-auto"
    >
      <div className="absolute top-0 left-0 h-[600px] right-0 w-full lg:h-screen  bg-white opacity-5"></div>
      <Content>
        <section className="lg:h-screen h-[600px] lg:flex items-center justify-between w-full">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-2/3  md:text-left md:pt-12  relative  space-y-4">
            <h1 className="text-white md:text-4xl text-3xl">Hi There!</h1>
            <h4 className="lg:text-5xl 2xl:text-6xl text-3xl mt-4 font-bold text-white">
              I am{" "}
              <span>
                <Typewriter
                  words={[
                    "Kabir Hossen",
                    "Web Developer",
                    "Frontend Dev",
                    "MERN Developer",
                    "React Developer",
                    "Next.js Developer",
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
            <p className="pt-2 text-white font-normal md:text-3xl 2xl:text-4xl text-xl">
              I make the complex simple.
            </p>
            <a href="mailto:programmerkabir@gmail.com">
              <button className="bg-[#009e66] text-white px-6 py-3">
                Contact Me
              </button>
            </a>

            {/* <button className==>"bg-[#009e66] text-white px-6 py-3">Contact Me</button>            */}
          </div>

          {/* Right Side: Image */}
          <div className=" lg:flex justify-end  relative z-10 hidden ">
            <img
              src={image}
              alt="Banner"
              className="w-full h-screen object-cover"
            />
          </div>
        </section>
        <div className="text-white md:flex items-center space-y-2 absolute lg:bottom-6 bottom-2">
          {/* Email */}
          <div className="space-y-3 border-l-2    pr-6 pl-6 md:pl-0 md:border-none  ">
            <h5 className="text-xl font-medium">Email</h5>

            <p className="text-[#9F9F9F] text-base">
              programmerkabir@gmail.com
            </p>
          </div>
          {/* Phone */}
          <div className="space-y-3 border-l-2 px-6 ">
            <h5 className="text-xl font-medium">Phone</h5>
            <p className="text-[#9F9F9F] text-base">01763685616</p>
          </div>

          {/* Email */}
          <div className="space-y-3 border-l-2 px-6 ">
            <h5 className="text-xl font-medium">Location</h5>
            <p className="text-[#9F9F9F] text-base">
              Sunamganj, Sylhet, Bangladesh
            </p>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Banner;
