import Card from "../common/Card";
import Heading from "../common/Heading";

function Services() {
  return (
    <section id="services" className="services">
      <Heading text="SERVICES" />
      <div className="block sm:flex justify-center mt-20">
        <Card
          icon="fa-solid fa-code"
          title="Frontend Development"
          description="I create visually stunning and responsive user interfaces that work flawlessly across all devices. Using HTML, CSS, JavaScript, and modern frameworks like React, I build dynamic websites that engage and captivate your audience. Let's make your vision a reality with a beautiful and functional frontend."
        />
        <Card
          icon="fa-solid fa-server"
          title="Backend Develpment"
          description="I provide robust and scalable backend development to ensure your website performs seamlessly. Specializing in server-side technologies, databases, and APIs, I build secure and efficient systems that support your frontend and enhance user experience. Let's power your website with a strong and reliable backend."
        />
      </div>
    </section>
  );
}

export default Services;
