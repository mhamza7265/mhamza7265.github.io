import Heading from "../common/Heading";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import BounceLoader from "react-spinners/BounceLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  let [loading, setLoading] = useState(false);
  const form = useRef();

  const override = {
    display: "block",
    position: "absolute",
    bottom: "40px",
    left: "200px",
    margin: "0 auto",
    borderColor: "red",
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm("service_ghp02tf", "template_d29tfwe", form.current, {
        publicKey: "-iOZD-2kz7MkNrRMG",
      })
      .then(
        () => {
          setLoading(false);
          console.log("SUCCESS!");
          toast.success("Message sent successfully", {
            position: "top-right",
          });
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
          toast.error("Failed to send message", {
            position: "top-right",
          });
        }
      );
  };

  return (
    <section id="contact" className="contact pt-28  mt-28 pb-28">
      <Heading text="CONTACT" />
      <form
        className="p-10 bg-white w-full sm:w-2/4 rounded shadow-xl mx-auto mt-20 relative"
        ref={form}
        onSubmit={handleEmailSubmit}
      >
        <div className="mt-8">
          <label htmlFor="name" className="text-slate-500">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="user_name"
            className="block bg-slate-200 w-full h-12 rounded pl-4 text-slate-600"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mt-12">
          <label htmlFor="email" className="text-slate-500">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="user_email"
            className="block bg-slate-200 w-full h-12 rounded pl-4 text-slate-600"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mt-12 mb-8">
          <label htmlFor="message" className="text-slate-500">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="block block bg-slate-200 w-full h-28 rounded p-4 text-slate-600"
            placeholder="Type your message"
          />
        </div>
        <button
          type="submits"
          className="text-white bg-sky-700 hover:bg-sky-900 border border-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-8 py-2.5 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-sky-700 dark:border-sky-700"
        >
          Submit
        </button>
        <BounceLoader
          color={"#0369a1"}
          loading={loading}
          cssOverride={override}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </form>
      <ToastContainer />
    </section>
  );
}

export default Contact;
