import ecommerce from "../assets/images/ecommerce.jpg";
import chat from "../assets/images/chat-app.png";
import biab from "../assets/images/biab.jpg";

const projects = [
  {
    id: 1,
    image: ecommerce,
    name: "Ecommerce App",
    github: "https://github.com/mhamza7265/eCommerce-App",
    live: "",
    detail: [
      "eCommerce Platform, a full-featured online shopping platform developed using the MERN stack (MongoDB, Express.js, React, and Node.js).",
      "This application offers a seamless and modern shopping experience with a robust backend and an intuitive frontend interface.",
      "Key features include a comprehensive admin panel for efficient store management and a custom CMS for easy content updates.",
      "The platform is designed to handle all your eCommerce needs with secure payment integration, product management, and real-time updates.",
    ],
    tools: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-react-original colored",
      "devicon-nodejs-plain colored",
      "devicon-express-original colored",
      "devicon-mongodb-plain colored",
      "devicon-redux-original colored",
    ],
  },
  {
    id: 2,
    image: chat,
    name: "Chat App",
    github: "https://github.com/mhamza7265/Chat-App",
    live: "",
    detail: [
      "Real-time chat application, built with the powerful Socket.io library to deliver seamless and instant communication.",
      "This project features a responsive and user-friendly interface that allows users to join chat rooms, send messages, and engage in real-time conversations effortlessly.",
      "Leveraging the capabilities of Socket.io, the application ensures low-latency communication, reliable message delivery, and a smooth user experience across all devices.",
      "This application provides a robust platform for instant messaging, complete with features like user authentication, message notifications.",
    ],
    tools: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-react-original colored",
      "devicon-nodejs-plain colored",
      "devicon-express-original colored",
      "devicon-mongodb-plain colored",
      "devicon-redux-original colored",
      "devicon-socketio-original",
    ],
  },
  {
    id: 3,
    image: biab,
    name: "BIAB (AI Business Tool)",
    github: "",
    live: "https://businessinabox.ai/",
    detail: [
      "AI cutting-edge business tools, crafted using the robust Laravel framework.",
      "This suite of intelligent tools is designed to streamline operations, enhance decision-making, and drive efficiency across various business processes.",
      "With advanced features powered by artificial intelligence, our platform offers predictive analytics, automation capabilities, and insightful data analysis, all within a secure and scalable environment.",
      "Experience the future of business operations with tools that are intuitive, reliable, and tailored to meet the dynamic needs of modern enterprises.",
    ],
    tools: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
      "devicon-laravel-original colored",
      "devicon-bootstrap-plain colored",
    ],
  },
];

export default projects;
