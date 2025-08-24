import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css/pagination";

import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
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
import { Pagination } from "swiper/modules";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiLogoRedux } from "react-icons/bi";
import { IoIosLink } from "react-icons/io";
import Content from "../../components/Content";
const DetailsProject = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjects();
  }, []);
  const currentProject = projects.find((project) => project.id === Number(id));
  console.log(currentProject);
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
      <div className="md:pt-7 pt-5 pb-7  text-white overflow-hidden">
        <div className="flex items-center gap-1">
          <Link to={"/"} className="text-[#f06a3d] text-xl font-bold">
            Home
          </Link>
          <MdKeyboardDoubleArrowRight size={24} className="pt-1" />
          <p className="text-xl font-bold pt-1">Details</p>
        </div>
        <Swiper
          effect={"cards"}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          className="mySwiper mt-5 "
        >
          {currentProject?.othersImage.map((images) => (
            <SwiperSlide key={images.name} className="px-5 md:px-0">
              <section className=" rounded-xl max-w-5xl mx-auto bg-[#242F48] py-5 flex items-center flex-col ">
                <div>
                  <img
                    className="rounded-xl h-[450px]"
                    src={images.image}
                    alt=""
                  />
                </div>
                <h3 className="font-semibold text-xl">{images.name}</h3>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Details Project */}
        <div className="md:pt-20 pt-10">
          <h2 className="md:text-4xl text-2xl font-semibold text-center">
            {"<Project Overview />"}
          </h2>
          <h5 className="md:text-2xl text-xl font-semibold pt-5  uppercase">
            Overview
          </h5>
          <p className="font-normal text-justify md:pl-5 pl-2 pt-1">
            {currentProject?.overview}
          </p>
          <h5 className="md:text-2xl text-xl font-semibold pt-5  uppercase">
            Details
          </h5>
          <p className="font-normal text-justify md:pl-5 pl-2 pt-1">
            {currentProject?.details}
          </p>
          <h5 className="md:text-2xl text-xl font-semibold pt-5  uppercase">
            Sector
          </h5>
          <p className="font-normal text-justify md:pl-5 pl-2 pt-1">
            {currentProject?.category}
          </p>
          <h5 className="md:text-2xl text-xl font-semibold pt-5  uppercase">
            Technologies Used
          </h5>
          <div className="flex gap-4 pt-5">
            {currentProject?.technology.map((technologys, index) => {
              const IconComponent = iconMapping[technologys.icon]; // Find the correct icon component
              return (
                <div key={index}>
                  <div
                    style={{
                      color: technologys?.brandColor || "#fff",
                    }}
                    className="text-4xl border  p-2 rounded-md"
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
          <div>
            <h5 className="text-xl font-semibold pt-5  uppercase">
              Completion Date
            </h5>
            <p>{currentProject?.endDate}</p>
          </div>
          {currentProject?.keyfeature &&
          currentProject.keyfeature.length > 0 ? (
            <>
              <h3 className="font-medium md:text-2xl text-xl pt-5">
                Key Features:
              </h3>
              <ul className="list-disc pl-10 pt-1 ">
                {currentProject.keyfeature.map((feature, index) => (
                  <li key={index} className="font-normal text-justify">
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div>No key features available.</div>
          )}

          <div className="flex items-center gap-4 pt-7">
            <a
              href={currentProject?.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex  items-center  gap-2 text-black bg-[#009E66] hover:bg-transparent  px-3 md:py-2.5 py-2 rounded-md border-2 border-[#009E66] transition-colors duration-300  hover:text-white cursor-pointer">
                <IoIosLink size={25} />
                <span className="md:text-xl font-semibold">Live Link</span>
              </button>
            </a>
            <a
              href={currentProject?.github_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center  gap-2 text-white hover:bg-[#009E66] bg-transparent  px-3 md:py-2.5 py-2 rounded-md border-2 border-[#009E66] transition-colors duration-300  hover:text-black cursor-pointer">
                <SiGithub size={25} />
                <span className="md:text-xl font-semibold">
                  Github Repository
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default DetailsProject;
