
import React, { useState } from "react";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { SiReact, SiRedux, SiTailwindcss, SiDaisyui, SiBootstrap, SiMongodb, SiFigma, SiAntdesign, SiExpress, SiFirebase, SiNodedotjs, SiGithub, SiVercel, SiCss3, SiJavascript, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import Content from "../../Content";
import Title from "../../Share/Title";

const Skills = () => {
  const [openTab, setOpenTab] = useState(1);

  const handleTabSelect = (tabNumber) => setOpenTab(tabNumber);

  const skillsData = {
    webSkills: [
      { icon: <AiFillHtml5 />, name: "HTML", brandColor: "#DC143C" },
      { icon: <SiCss3 />, name: "CSS", brandColor: "#2965f1" },
      { icon: <SiBootstrap />, name: "Bootstrap 5", brandColor: "#7952B3" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", brandColor: "#38B2AC" },
      { icon: <SiJavascript />, name: "Javascript", brandColor: "#FFFF00" },
      { icon: <SiReact />, name: "React.js", brandColor: "#61DBFB" },
      { icon: <SiFirebase />, name: "Firebase", brandColor: "#FFCB2B" },
      { icon: <SiExpress />, name: "Express.js", brandColor: "#61DAFB" },
      { icon: <SiNodedotjs />, name: "Node.js", brandColor: "#339933" },
      { icon: <SiMongodb />, name: "MongoDB", brandColor: "#47A248" },
      { icon: <BiLogoRedux />, name: "Redux", brandColor: "#764abc" },
      { icon: <TbBrandNextjs />, name: "Next.js", brandColor: "#0070F3" }
    ],
    toolSkills: [
      { icon: <SiGithub />, name: "GitHub" },
      { icon: <SiFigma />, name: "Figma", brandColor: "#F24E1E" },
      { icon: <SiDaisyui />, name: "Daisy UI", brandColor: "#A161FF" },
      { icon: <SiAntdesign />, name: "Ant Design", brandColor: "#0170FE" },
      { icon: <SiVercel />, name: "Vercel", brandColor: "#010409" },
      { icon: <SiAdobephotoshop />, name: "Adobe Photoshop", brandColor: "#000000" },
      { icon: <SiAdobeillustrator />, name: "Adobe Illustrator", brandColor: "#FF8C00" },
      { icon: <TbBrandVscode />, name: "Vs Code", brandColor: "#0061F2" }
    ]
  };

  const SkillTab = ({ skills }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {skills.map((skill, index) => (
        <div key={index} data-aos="zoom-in-down" style={{ boxShadow: "4px 7px 26px 0px rgba(0, 0, 0, 0.12)" }} className="bg-[#1E1E1E] rounded-xl flex flex-col justify-center items-center px-4 py-6  border-t border-[#009E66]">
          <div style={{ color: skill?.brandColor || "#fff" }} className="text-5xl mb-4">{skill?.icon}</div>
          <p className="text-white text-lg font-medium">{skill?.name}</p>
        </div>
      ))}
    </div>
  );

  return (
<section id="/skills">

        <Content>
        <Title title={"skills"} subTitle={"My Skills"} />
        <div className="pt-10 w-full">
          <div data-aos="zoom-out">
            <div className="mx-auto">
              <div className="mx-auto items-center justify-center">
                <ul className="flex flex-row justify-center space-x-2">
                  {["Web Application", "Tools"].map((tab, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleTabSelect(index + 1)}
                        className={`${openTab === index + 1 ? "bg-[#009E66]" : ""} inline-block px-5 py-3 text-white rounded-sm border border-[#009E66] shadow`}
                      >
                        {tab}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="py-2 mt-6">
                  {openTab === 1 && <SkillTab skills={skillsData.webSkills} />}
                  {openTab === 2 && <SkillTab skills={skillsData.toolSkills} />}
                </div>
              </div>
            </div>
          </div>
        </div>
    </Content>
</section>

  );
};

export default Skills;
