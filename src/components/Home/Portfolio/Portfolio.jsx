import { useEffect, useState } from "react";
import Content from "../../Content";
import Title from "../../Share/Title";
import "./Portfolio.css";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "react-tooltip/dist/react-tooltip.css";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState(" ");

  const projectsToShow =
    activeTab === "mern"
      ? projects.filter((p) => p?.category !== "templates") // MERN projects
      : activeTab === "templates"
      ? projects.filter((p) => p?.category === "templates") // Templates projects
      : projects;

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

  return (
    <section id="/portfolio">
      <Content>
        <Title title={"Portfolio"} subTitle={"My Portfolio"} />

        <div className="mt-6 grid gap-4">
          <section id="projects" className="pt-10 overflow-hidden">
            <div className="flex justify-center gap-4 mb-5">
              <ul className="flex justify-center gap-4 mb-10">
                {[
                  "Featured Projects (MERN)",
                  "Templates & Mini Projects (UI/JS)",
                ].map((tab, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        setActiveTab(index === 0 ? "mern" : "templates")
                      }
                      className={`inline-block md:px-5 px-2 py-1 md:py-3 text-sm text-white rounded-sm border border-[#009E66] shadow transition ${
                        activeTab === (index === 0 ? "mern" : "templates")
                          ? "bg-[#009E66]"
                          : ""
                      }`}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div
              data-aos="fade-down "
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {projectsToShow?.map((project) => (
                <div className="" key={project?.id}>
                  <section className="relative group">
                    {/* Image */}
                    <img
                      src={
                        project?.othersImage?.length > 0
                          ? project.othersImage[0].image
                          : project?.image || project?.mainImage
                      }
                      alt={project?.title}
                      className="w-full h-52 object-cover rounded-lg"
                    />

                    {/* Overlay */}
                    
                      <div className="absolute inset-0 bg-black/70 rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                          to={project?.category !== "templates" && `/projects/details/${project?.id}`}
                          className="absolute top-2 bg-slate-900 text-white text-sm font-medium uppercase px-2 py-1 rounded flex items-center gap-2 
                            transform -translate-y-2 opacity-0 
                            group-hover:translate-y-0 group-hover:opacity-100 
                            transition-all duration-200 ease-in-out"
                        >
                          <FaExclamationCircle color="white" />
                          <span>{project?.category === "templates"?project?.templateName:"Details"}</span>
                        </Link>
                        <div className="absolute px-2 justify-between w-full bottom-2 flex items-center">
                          {/* GitHub Button */}
                          <Link to={project?.github_link}>
                            <button
                              className="bg-slate-900 text-white text-sm font-medium uppercase p-2 rounded-full flex items-center gap-2 
                                transform -translate-x-4 opacity-0
                                group-hover:translate-x-0 group-hover:opacity-100
                                transition-all duration-200 ease-in-out"
                            >
                              <FaGithub color="white" />
                            </button>
                          </Link>

                          {/* Live Button */}
                          <Link to={project?.liveLink}>
                            <button
                              className="bg-slate-900 text-white text-sm font-medium uppercase p-2 rounded-full flex items-center gap-2 
                                transform translate-x-4 opacity-0
                                group-hover:translate-x-0 group-hover:opacity-100
                                transition-all duration-200 ease-in-out"
                            >
                              <FaEye color="white" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    
                  </section>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Content>
    </section>
  );
};

export default Portfolio;
