function Footer() {
  return (
    <footer className="footer bg-slate-800 px-10 pt-10 sm:px-28 sm:pt-28">
      <div className="block sm:flex sm:justify-between sm:items-center border-b pb-28">
        <div className="">
          <h5 className="text-center font-bold sm:text-left text-slate-200 text-xs sm:text-base">
            MUHAMMAD HAMZA
          </h5>
          <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left sm:w-7/12 mt-5">
            An Experienced Full-Stack Web Developer Specializing In Creating
            Dynamic Websites and Powerful Web Applications that bring your ideas
            to life from Front-end to Back-end
          </p>
        </div>
        <div className="flex justify-center items-center mt-5">
          <a
            href="https://linkedin.com/in/mhamza7265"
            target="_blank"
            className="block p-1 mr-1"
          >
            <i className="fa-brands fa-linkedin text-2xl text-slate-400"></i>
          </a>
          <a
            href="https://github.com/mhamza7265"
            target="_blank"
            className="block p-1 ml-1"
          >
            <i className="fa-brands fa-github text-2xl text-slate-400"></i>
          </a>
        </div>
      </div>
      <div className="py-10">
        <p className="text-xs text-slate-400 text-center">
          &copy; Copyright 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
