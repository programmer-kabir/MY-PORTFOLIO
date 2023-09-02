import React, { useState } from "react";
import "./Project.css";
import Content from "../../Content/Content";
const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showDetails, setShowDetails] = useState("");

  const projectCategories = [
    {
      text: "All",
      filterValue: "all",
      isSelected: selectedFilter === "all",
    },
    {
      text: "School Management",
      filterValue: "school",
      isSelected: selectedFilter === "school",
    },
    {
      text: "E-commerce",
      filterValue: "e-commerce",
      isSelected: selectedFilter === "e-commerce",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "ToyBattleZone",
      image: "https://i.ibb.co/kGMJvJD/project-3.png",
      category: "e-commerce",
      liveLink: "https://assinment-11-39422.web.app/",
      Client_Side_github_link:
        "https://github.com/programmer-kabir/Toy-MarketPlace-clinet",
      Server_Side_github_link:
        "https://github.com/programmer-kabir/toy-marketplace-server",
    },
    {
      id: 2,
      title: "Programming Course",
      image: "https://i.ibb.co/b6rjJCY/project-2.png",
      category: "school",
      liveLink: "https://learning-english-2be52.web.app/",
      Client_Side_github_link:
        "https://github.com/programmer-kabir/Course-website-client",
      Server_Side_github_link:
        "https://github.com/programmer-kabir/Course-website-server",
    },
    {
      id: 3,
      title: "Doctors Booking",
      image:
        "https://i.ibb.co/tY9212Y/screencapture-localhost-5173-2023-07-31-21-03-44.png",
      category: "e-commerce",
      liveLink: "https://bokking-5b345.web.app/",
      Client_Side_github_link:
        "https://github.com/programmer-kabir/Doctor-Booking-Client-Siide",
      Server_Side_github_link:
        "https://github.com/programmer-kabir/Doctor-Booking-Back-Side",
    },
  ];

  const filterProjects = (category) => {
    setSelectedFilter(category);
  };

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <Content>
      <section id="projects" className="pt-16 overflow-x-hidden">
      <div data-aos="fade-down">
        <div className="">
          <h2 className="text-4xl font-bold text-[#A362FF] text-center py-5 ">
            My <span className="text-white">Projects!!</span>{" "}
          </h2>

          <div className="flex gap-2 justify-center items-center pt-2 mb-8">
            {projectCategories.map((button, index) => (
              <button
                key={index}
                
                className={` rounded-full  ${
                  button.isSelected
                    ? "selectButton text-white"
                    : " inline-block normal-btn"
                }`}
                onClick={() => filterProjects(button.filterValue)}
              >
                {button.text}
              </button>
            ))}
          </div>

          <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 pt-3 mx-auto">
            {filteredProjects.map((project_info, index) => (
              <div
                className="h-fit p-4 bg-slate-700 rounded-xl overflow-x-auto"
                key={index}
                data-aos="zoom-out-down"
              >
                <div className="containerr">
                  <div className="box box-1 rounded-lg overflow-hidden ">
                    <img
                      src={project_info.image}
                      className="box-img rounded-lg"
                      alt=""
                    />
                  </div>
                </div>
                <h3 className="text-xl my-2">{project_info.title}</h3>
                <div className="flex justify-between">
                  <button
                    href={project_info.liveLink}
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded perspective hover:perspective-none transform hover:rotate-x-12 transition duration-300"
                  >
                    Live Site
                  </button>

                  <button
                    href={project_info.Client_Side_github_link}
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded perspective hover:perspective-none transform hover:rotate-x-12 transition duration-300"
                  >
                    Client Side
                  </button>
                  <button
                    disabled={!project_info.Server_Side_github_link}
                    className={`${
                      project_info.Server_Side_github_link
                        ? "bg-blue-500 hover:bg-blue-700"
                        : "bg-gray-500"
                    } text-white font-bold py-2 px-3 rounded perspective hover:perspective-none transform hover:rotate-x-12 transition duration-300`}
                  >
                    {project_info.Server_Side_github_link ? (
                      <a
                        href={project_info.Server_Side_github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        Server Side
                      </a>
                    ) : (
                      "Server Side"
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </Content>
  );
};

export default Project;
