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
          btn1="/project/1"
        />
        <ProjectCard
          img={chat}
          alt="chat-app"
          title="Chat Application"
          btn1="/project/2"
        />
        <ProjectCard
          img={biab}
          alt="buiness in a box"
          title="BIAB (AI Business Tool)"
          btn1="/project/3"
        />
      </div>
    </section>
  );
}

export default Projects;
