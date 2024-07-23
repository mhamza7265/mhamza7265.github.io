import scrolling from "../assets/images/scrolling.gif";

function Hero() {
  return (
    <section className="hero-image relative">
      <div className="hero-content">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-wrap sm:text-nowrap leading-relaxed tracking-wide">
          {`HELLO, I'M MUHAMMAD HAMZA`}
        </h1>
        <h5 className="text-center text-lg sm:text-2xl  mt-10 leading-relaxed">
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
    </section>
  );
}

export default Hero;
