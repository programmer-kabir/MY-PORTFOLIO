import React, { useEffect, useState } from "react";
import "./Project.css";
import Content from "../../Content/Content";
import { FaRegEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { IoIosLink } from "react-icons/io";
import "react-tooltip/dist/react-tooltip.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination } from "swiper/modules";
import {
  SiAntdesign,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { Link } from "react-router-dom";
const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/project.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjects();
  }, []);
  const iconMapping = {
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiFirebase,
    SiExpress,
    SiNodedotjs,
    SiMongodb,
    BiLogoRedux,
    SiAntdesign,
    SiVercel,
  };
  return (
    <Content>
      <section id="projects" className="pt-16 overflow-hidden">
        <div data-aos="fade-down ">
          <div className="">
            <h2 className="text-4xl font-bold text-[#A362FF] text-center py-5 ">
              My <span className="text-white">Projects!!</span>{" "}
            </h2>
          </div>
          {/*  */}
          <Swiper
            effect={"cards"}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            modules={[EffectCards, Pagination]}
            className="mySwiper mt-5"
          >
            {projects.map((project) => (
              <SwiperSlide className="" key={project.id}>
                <section className="md:flex gap-5 max-w-4xl rounded-xl mx-auto bg-[#242F48] p-4 py-3  md:p-10">
                  <div className="md:w-1/2 ">
                    <div className="flex items-center justify-between gap-5">
                      <h2 className="md:text-3xl text-xl font-semibold text-white">
                        {project.title}
                      </h2>
                      <Link to={`/projects/details/${project.id}`}>
  <button className="md:selectButton selectSmallButton">Details</button>
</Link>
                    </div>
                    {/* overview */}
                    <h4 className="pt-7 md:font-medium font-normal text-justify text-white text-lg">
                      {project?.overview}
                    </h4>
                    {/* Technology */}
                    <div className="pt-7">
                      <h2 className="text-2xl font-semibold text-white">
                        Technologies
                      </h2>
                      <div className="grid grid-cols-4 md:grid-cols-7 gap-4 pt-5">
                        {project.technology.map((technologys, index) => {
                          const IconComponent = iconMapping[technologys.icon]; // Find the correct icon component
                          return (
                            <div key={index}>
                              <div
                                style={{
                                  color: technologys?.brandColor || "#fff",
                                }}
                                className="md:text-4xl text-3xl"
                              >
                                <div>
                                  <a
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={technologys?.name}
                                  >
                                    {IconComponent && <IconComponent />}{" "}
                                    {/* Render the icon component */}
                                  </a>
                                  <ReactTooltip
                                    id="my-tooltip"
                                    style={{
                                      fontSize: "12px",
                                      padding: "0px 10px",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-4 pt-7 pb-5 md:mb-0">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="flex items-center md:gap-2 text-white selectSmallButton md:selectButton">
                            <IoIosLink size={25} />
                            <span className="md:text-xl text-xs font-semibold">
                              Live Link
                            </span>
                          </button>
                        </a>
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="flex items-center md:gap-2  text-white selectSmallButton">
                            <SiGithub size={25} />
                            <span className="md:text-xl  text-xs font-semibold">
                              Github Repository
                            </span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="containerr md:pl-10">
                      <div className="box box-1 rounded-lg overflow-hidden ">
                        <img
                          src={project.mainImage}
                          className="box-img rounded-lg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Content>
  );
};

export default Project;
