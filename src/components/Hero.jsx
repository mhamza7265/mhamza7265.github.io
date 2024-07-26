import scrolling from "../assets/images/scrolling.gif";
import DownloadBtn from "../common/DownloadBtn";
// import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-image relative">
      <div className="hero-content">
        <h1 className="title-text text-4xl sm:text-5xl font-extrabold text-center text-wrap sm:text-nowrap leading-relaxed tracking-wide">
          {`HELLO, I'M MUHAMMAD HAMZA`}
        </h1>
        <h5 className="text-center text-lg sm:text-2xl mt-10 leading-relaxed text-slate-700">
          An Experienced Full-Stack Web Developer Specializing In Creating
          Dynamic Websites and Powerful Web Applications that bring your ideas
          to life from Front-end to Back-end
        </h5>
      </div>
      <div className="links bg-white absolute p-2 shadow rounded-md hidden sm:block">
        <a
          href="https://linkedin.com/in/mhamza7265"
          target="_blank"
          className="block p-5 hover:bg-slate-100"
        >
          <i className="fa-brands fa-linkedin text-3xl"></i>
        </a>
        <a
          href="https://github.com/mhamza7265"
          target="_blank"
          className="block p-5 hover:bg-slate-100"
        >
          <i className="fa-brands fa-github text-3xl"></i>
        </a>
      </div>
      <img
        className="scroll-gif hidden sm:block"
        src={scrolling}
        alt="scroll"
      />
      <DownloadBtn
        text="RESUME"
        link="../../resume/Muhammad Hamza Hanif (CV) .pdf"
        download="Muhammad Hamza Hanif (CV).pdf"
        className="absolute sm:top-3/4"
      />
    </section>
  );
}

export default Hero;
