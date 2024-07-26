function ProjectCard({ img, alt, title, btn1, btn2 }) {
  return (
    <div className="project-card mt-10 sm:mt-0 w-11/12 sm:w-3/4 mx-auto sm:mx-8 max-w-sm p-1 pb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-inner">
      <div className="flex justify-left items-center pb-0 overflow-hidden">
        <img
          src={img}
          alt={alt}
          className="h-48 object-cover hover:scale-150 transition-all duration-500 ease-in-out hover:rotate-3"
        />
      </div>
      <p className="font-normal text-lg font-bold text-gray-500 dark:text-gray-400 pt-5 text-center">
        {title}
      </p>
      <div className="flex justify-center items-center mt-5">
        <a
          href={btn1}
          target="_blank"
          className="text-sky-700 hover:text-white border border-sky-700 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-sky-600 dark:text-sky-400 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-800"
        >
          Live
        </a>
        <a
          href={btn2}
          target="_blank"
          className="text-white bg-sky-700 hover:bg-sky-900 border border-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-sky-700 dark:border-sky-700"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
