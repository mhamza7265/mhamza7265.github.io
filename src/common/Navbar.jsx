import myPic from "../assets/images/me.jpg";
import { useState } from "react";

function Navbar() {
  const [mobileMenuIsDisplayed, setMobileMenuIsDisplayed] = useState(false);

  const handleNavManuClick = (e) => {
    if (e.target.classList.contains("navlink")) {
      setMobileMenuIsDisplayed(false);
    }
  };

  return (
    <nav
      className="flex justify-between items-center shadow-md py-4 px-3 sm:px-8"
      style={{
        backgroundColor: "#FFFFFF",
        position: "sticky",
        top: 0,
        zIndex: 9999,
      }}
    >
      <div className="flex justify-between items-center">
        <img className="rounded-full w-12 h-12 mr-2" src={myPic} alt="logo" />
        <p className="text-base font-semibold tracking-wide">MUHAMMAD HAMZA</p>
      </div>
      <div className="hidden lg:block md:block sm:block xl:block">
        <a
          className="text-base font-semibold tracking-wide ml-10 hover:text-sky-700"
          href="#"
        >
          HOME
        </a>
        <a
          className="text-base font-semibold tracking-wide ml-10 hover:text-sky-700"
          href="#about"
        >
          ABOUT
        </a>
        <a
          className="text-base font-semibold tracking-wide ml-10 hover:text-sky-700"
          href="#services"
        >
          SERVICES
        </a>
        <a
          className="text-base font-semibold tracking-wide ml-10 hover:text-sky-700"
          href="#"
        >
          PROJECTS
        </a>
        <a
          className="text-base font-semibold tracking-wide ml-10 hover:text-sky-700"
          href="#"
        >
          CONTACT
        </a>
      </div>
      <div className="mobile block sm:hidden">
        {!mobileMenuIsDisplayed ? (
          <i
            className="fa-solid fa-bars text-2xl cursor-pointer"
            onClick={() => setMobileMenuIsDisplayed(!mobileMenuIsDisplayed)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-x  text-2xl cursor-pointer"
            onClick={() => setMobileMenuIsDisplayed(!mobileMenuIsDisplayed)}
          ></i>
        )}
      </div>
      <ul
        className={`mobile-menu bg-white sm:hidden absolute top-full left-0 w-full shadow-md ${
          mobileMenuIsDisplayed ? "active" : "inactive"
        }`}
        onClick={handleNavManuClick}
      >
        <li className="py-3 px-4 border-t">
          <a className="navlink hover:text-sky-700" href="#">
            HOME
          </a>
        </li>
        <li className="py-3 px-4 border-t">
          <a className="navlink hover:text-sky-700" href="#about">
            ABOUT
          </a>
        </li>
        <li className="py-3 px-4 border-t">
          <a className="navlink hover:text-sky-700" href="#services">
            SERVICES
          </a>
        </li>
        <li className="py-3 px-4 border-t">
          <a className="navlink hover:text-sky-700" href="#">
            PROJECTS
          </a>
        </li>
        <li className="py-3 px-4 border-t">
          <a className="navlink hover:text-sky-700" href="#">
            CONTACT
          </a>
        </li>
        <li className="flex justify-center content-center py-3 px-4 border-t">
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
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
