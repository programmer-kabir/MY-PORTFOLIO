import Content from "../../Content";
import image from "../../../assets/about/kabir.png";
import Resume from '../../../assets/cv/Resume-of-Kabir-Hossen(Front-End developer).pdf'
const AboutUs = () => {
  return (
    <Content>
      <div id="/about" className="lg:flex items-center justify-center lg:gap-10 ">
        <div className="lg:w-[40%] w-full xl:h-[600px] 2xl:h-[620px]  ">
          <img src={image} alt="" className="w-full h-full lg:object-cover rounded-full lg:rounded-none z-50" />
        </div>
        <div className="space-y-4 lg:w-[60%] w-full h-[580px] pt-10 md:pt-0 ">
          <h2 className="text-[#009e66] font-semibold text-2xl">Who am i?</h2>
          <p className="text-white text-3xl font-bold">
            I'm Kabir Hossen, a visual Web Designer and Web Developer
          </p>
          <p className="text-[#9F9F9F] pb-2">
            {" "}
            As a MERN Stack Developer, I have strong skills in React.js and
            JavaScript for building the front-end of websites. I also have
            experience with Node.js, Express.js, MongoDB, and Firebase, which
            are commonly used for back-end development. My focus is on creating
            responsive and user-friendly interfaces that work well on different
            browsers and devices. I am detail-oriented and strive to write clean
            and optimized code.
            <br /> <br />
            In addition to my core skills, I am familiar with popular frameworks
            like Tailwind, Bootstrap, and Material UI. I continuously update my
            knowledge and skills in web development to stay current with the
            latest technologies. My future goal is to become a full-stack
            developer, which means being proficient in both front-end and
            back-end development.
          </p>
          <div className="border border-gray-600 "></div>
          {/* Information */}
          <div className="pt-2 pb-2 lg:flex items-center justify-between ">
            <div className="space-y-2">
            <p className="flex items-center gap-4 text-[#9F9F9F]">
              <span className="font-medium text-white">Name:</span> 
              Kabir Hossen
            </p>
            <p className="flex items-center gap-4 text-[#9F9F9F]">
              <span className="font-medium text-white">Age:</span> 
            19
            </p>
            </div>
            <div className="space-y-2">
            <p className="flex items-center gap-4 text-[#9F9F9F]">
              <span className="font-medium text-white">From:</span> 
              Sylhet, Bangladesh
            </p>
            <p className="flex items-center gap-4 text-[#9F9F9F]">
              <span className="font-medium text-white">Email:</span> 
              programmerkabirr@gmail.com
            </p>
            </div>
          </div>
            <a href={Resume} download>
          <button className="bg-[#009e66] cursor-pointer hover:bg-[#009e66]/70 text-white px-6 py-3 transition-all duration-300 ease-in-out">
  Download CV
</button>
</a>


         
        </div>
      </div>
   </Content>
  );
};

export default AboutUs;
