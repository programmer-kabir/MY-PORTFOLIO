import React, { useState } from "react";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiDaisyui,
  SiBootstrap,
  SiMongodb,
  SiFigma,
  SiAntdesign,
  SiExpress,
  SiFirebase,
  SiNodedotjs,
  SiGithub,
  SiVercel,
  SiCss3,
  SiJavascript,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const Skills = () => {
  const [openTab, setOpenTab] = useState(1);
  const handleTabSelect = (tabNumber) => {
    setOpenTab(tabNumber);
  };

  //   skills api
  const webSkills = [
    { icon: <AiFillHtml5 />, name: "HTML", brandColor: "#DC143C" },
    { icon: <SiCss3 />, name: "CSS", brandColor: "#0000FF" },
    { icon: <SiBootstrap />, name: "Bootstrap 5", brandColor: "#7952B3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", brandColor: "#38B2AC" },
    { icon: <SiJavascript />, name: "Javascript", brandColor: "#FFFF00" },
    { icon: <SiReact />, name: "React.js", brandColor: "#61DBFB" },
    { icon: <SiFirebase />, name: "Firebase", brandColor: "#FFCB2B" },
    { icon: <SiExpress />, name: "Express.js", brandColor: "#61DAFB" },
    { icon: <SiNodedotjs />, name: "Node.js", brandColor: "#339933" },
    { icon: <SiMongodb />, name: "MongoDB", brandColor: "#47A248" },
    { icon: <TbBrandNextjs />, name: "Next.js", brandColor: "#0070F3" },
  ];

  const toolSkills = [
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiFigma />, name: "Figma", brandColor: "#F24E1E" },
    { icon: <SiDaisyui />, name: "Daisy UI", brandColor: "#A161FF" },
    { icon: <SiAntdesign />, name: "Ant Design", brandColor: "#0170FE" },
    { icon: <SiVercel />, name: "Vercel", brandColor: "#010409" },
    {
      icon: <SiAdobephotoshop />,
      name: "Adobe Photoshop",
      brandColor: "#010409",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Adobe Illustrator",
      brandColor: "#945c04",
    },
    { icon: <TbBrandVscode />, name: "Vs Code", brandColor: "#945c04" },
  ];
  return (
    <div id="skills" className="bg-color">
      <div className="px-6 pt-16 w-full">
        <div data-aos="zoom-out">
          <h2 className="text-4xl font-bold text-[#A362FF] text-center py-5 ">
            My <span className="text-white">Skills!!</span>{" "}
          </h2>

          <div className="mx-auto mt-6 ">
            <div className=" mx-auto items-center justify-center ">
              <ul className=" flex flex-row justify-center space-x-2">
                <li>
                  <button
                    onClick={() => handleTabSelect(1)}
                    className={`${
                      openTab === 1 ? "selectButton" : ""
                    } inline-block normal-btn`}
                  >
                    Web Application
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTabSelect(2)}
                    className={`${
                      openTab === 2 ? "selectButton" : ""
                    } inline-block border-2  border-gray-700  px-4 py-2 text-gray-100  rounded shadow`}
                  >
                    Tools
                  </button>
                </li>
              </ul>
              <div className="px-4 py-2 mt-6">
                {openTab === 1 && (
                  <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                      {webSkills.map((webSkill, index) => (
                        <div
                          key={index}
                          data-aos="zoom-in-down"
                          className="bgCustomGradient customShadow rounded-xl flex flex-col justify-center items-center px-4 py-6 border-t border-primaryLight2"
                        >
                          <div
                            style={{ color: webSkill?.brandColor || "#fff" }}
                            className="text-5xl mb-4"
                          >
                            {webSkill?.icon}
                          </div>
                          <p className="text-white text-lg font-medium">
                            {webSkill?.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {openTab === 2 && (
                  <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                      {toolSkills.map((toolSkill, index) => (
                        <div
                          key={index}
                          data-aos="zoom-out-down"
                          className="bgCustomGradient customShadow rounded-xl flex flex-col justify-center items-center px-4 py-6 border-t border-primaryLight2"
                        >
                          <div
                            style={{ color: toolSkill?.brandColor || "#fff" }}
                            className="text-5xl mb-4"
                          >
                            {toolSkill?.icon}
                          </div>
                          <p className="text-white text-lg font-medium">
                            {toolSkill?.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
