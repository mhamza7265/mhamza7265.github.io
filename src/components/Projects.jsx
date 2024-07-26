import Heading from "../common/Heading";
import ProjectCard from "../common/ProjectCard";
import biab from "../assets/images/biab.jpg";
import ecommerce from "../assets/images/ecommerce.jpg";
import chat from "../assets/images/chat-app.png";

function Projects() {
  return (
    <section id="projects" className="projects mt-28">
      <Heading text="PROJECTS" />
      <div className="block sm:flex sm:justify-center sm:items-center mt-20">
        <ProjectCard
          img={ecommerce}
          alt="ecommerce"
          title="Ecommerce Platform"
          btn1="javascript:void(0)"
          btn2="https://github.com/mhamza7265/Ecommerce-client"
        />
        <ProjectCard
          img={chat}
          alt="chat-app"
          title="Chat Application"
          btn1="javascript:void(0)"
          btn2="https://github.com/mhamza7265/Chat-App-Client"
        />
        <ProjectCard
          img={biab}
          alt="buiness in a box"
          title="BIAB (AI Business Tool)"
          btn1="https://businessinabox.ai/"
          btn2="javascript:void(0)"
        />
      </div>
    </section>
  );
}

export default Projects;
