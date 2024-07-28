import { useParams } from "react-router";
import projects from "../utils/projectData";
import HeadingProject from "../common/HeadingProject";
import HeadingProject2 from "../common/HeadingProject2";
import { useEffect } from "react";

function Projects() {
  const params = useParams();
  const projectData = projects.find(
    (project) => project.id == params.projectId
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-zinc-50 dark:bg-gray-700">
      <section className="hero-image-2 pt-16">
        <HeadingProject text={projectData.name.toUpperCase()} color={"#000"} />
        <div className="project-image mt-10 sm:mt-20 w-11/12 sm:w-6/12 mx-auto sm:mx-auto p-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-lg overflow-hidden border border-slate-500">
          <img
            src={projectData.image}
            alt={""}
            className="h-auto w-auto object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </section>
      <section className="details">
        <div className="w-4/5 sm:w-2/4 mx-auto py-20">
          <HeadingProject2 text="Project Overview" />
          {projectData.detail?.map((item, i) => (
            <p
              key={i}
              className="text-slate-600 dark:text-slate-300 tracking-wide mt-5"
            >
              {item}
            </p>
          ))}
        </div>
      </section>
      <section className="tools">
        <div className="w-4/5 sm:w-2/4 mx-auto pb-20">
          <HeadingProject2 text="Tools Used" />
          <div className="stack flex flex-wrap w-full sm:w-max justify-items-center justify-center bg-zinc-100 dark:bg-gray-800">
            {projectData.tools?.map((tool, i) => (
              <i key={i} className={tool}></i>
            ))}
          </div>
        </div>
      </section>
      <div className="w-4/5 sm:w-2/4 mx-auto pb-20 flex justify-center items-center sm:justify-start">
        <a
          href={projectData.github}
          target="_blank"
          className="text-white bg-sky-700 hover:bg-sky-900 border border-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-10 py-4 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-sky-700 dark:border-sky-700 mr-4"
        >
          Github Link
        </a>
        <a
          href={projectData.live}
          target="_blank"
          className="text-sky-700 hover:text-white border border-sky-700 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-10 py-4 text-center me-2 dark:border-sky-600 dark:text-sky-400 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-800 "
        >
          Live Link
        </a>
      </div>
    </main>
  );
}

export default Projects;
