import Heading from "../common/Heading";
import Heading2 from "../common/Heading2";

function About() {
  return (
    <section id="about" className="about py-28">
      <Heading text="ABOUT ME" />
      <p className="my-20 w-3/4 text-center mx-auto leading-relaxed tracking-wide">
        {`I am a full-stack web developer with a strong emphasis on front-end design. I
        specialize in building clean, intuitive, and visually striking user
        interfaces while also managing the back-end to ensure everything runs
        smoothly. My goal is to create web experiences that are both functional
        and delightful. If you’re looking for someone who can make your site
        look great and perform flawlessly, let's work together to bring your
        ideas to life!`}
      </p>
      <Heading2 text="MY SKILLS & TECH STACK" />
      <div className="stack flex flex-wrap w-full sm:w-max justify-items-center justify-center">
        <i className="devicon-html5-plain colored"></i>
        <i className="devicon-css3-plain colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-react-original colored"></i>
        <i className="devicon-nodejs-plain colored"></i>
        <i className="devicon-express-original colored"></i>
        <i className="devicon-mongodb-plain colored"></i>
        <i className="devicon-postman-plain colored"></i>
        <i className="devicon-bootstrap-plain colored"></i>
        <i className="devicon-tailwindcss-original colored"></i>
        <i className="devicon-redux-original colored"></i>
      </div>
    </section>
  );
}

export default About;
