import myPic from "../assets/images/me.jpg";
import { useState } from "react";

function Navbar() {
  const [mobileMenuIsDisplayed, setMobileMenuIsDisplayed] = useState(false);

  const handleNavManuClick = (e) => {
    if (e.target.classList.contains("navlink")) {
      setMobileMenuIsDisplayed(false);
    }
  };

  const handleDarkModeChange = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <nav
      className="flex justify-between items-center shadow-md py-4 px-3 sm:px-8 bg-white dark:bg-gray-700"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
      }}
    >
      <div className="flex justify-between items-center">
        <img className="rounded-full w-12 h-12 mr-2" src={myPic} alt="logo" />
        <p className="text-base font-semibold tracking-wide dark:text-white">
          MUHAMMAD HAMZA
        </p>
      </div>
      <div className="navbar flex justify-right items-center">
        <div className="hidden lg:block md:block sm:block xl:block">
          <a
            className="text-base font-semibold tracking-wide ml-10 hover:text-sky-700 dark:text-white"
            href="/#"
          >
            HOME
          </a>
          <a
            className="text-base font-semibold tracking-wide ml-10 hover:text-sky-700 dark:text-white"
            href="/#about"
          >
            ABOUT
          </a>
          <a
            className="text-base font-semibold tracking-wide ml-10 hover:text-sky-700 dark:text-white"
            href="/#services"
          >
            SERVICES
          </a>
          <a
            className="text-base font-semibold tracking-wide ml-10 hover:text-sky-700 dark:text-white"
            href="/#projects"
          >
            PROJECTS
          </a>
          <a
            className="text-base font-semibold tracking-wide ml-10 hover:text-sky-700 dark:text-white"
            href="/#contact"
          >
            CONTACT
          </a>
        </div>
        <div className="mobile block sm:hidden">
          {!mobileMenuIsDisplayed ? (
            <i
              className="fa-solid fa-bars text-2xl cursor-pointer dark:text-slate-100"
              onClick={() => setMobileMenuIsDisplayed(!mobileMenuIsDisplayed)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-x  text-2xl cursor-pointer dark:text-slate-100"
              onClick={() => setMobileMenuIsDisplayed(!mobileMenuIsDisplayed)}
            ></i>
          )}
        </div>
        <ul
          className={`mobile-menu bg-white sm:hidden absolute top-full left-0 w-full shadow-md dark:bg-gray-700 ${
            mobileMenuIsDisplayed ? "active" : "inactive"
          }`}
          onClick={handleNavManuClick}
        >
          <li className="py-3 px-4 border-t dark:border-slate-500">
            <a className="navlink hover:text-sky-700 dark:text-white" href="/#">
              HOME
            </a>
          </li>
          <li className="py-3 px-4 border-t dark:border-slate-500">
            <a
              className="navlink hover:text-sky-700 dark:text-white"
              href="/#about"
            >
              ABOUT
            </a>
          </li>
          <li className="py-3 px-4 border-t dark:border-slate-500">
            <a
              className="navlink hover:text-sky-700 dark:text-white"
              href="/#services"
            >
              SERVICES
            </a>
          </li>
          <li className="py-3 px-4 border-t dark:border-slate-500">
            <a
              className="navlink hover:text-sky-700 dark:text-white"
              href="/#projects"
            >
              PROJECTS
            </a>
          </li>
          <li className="py-3 px-4 border-t dark:border-slate-500">
            <a
              className="navlink hover:text-sky-700 dark:text-white"
              href="/#contact"
            >
              CONTACT
            </a>
          </li>
          <li className="flex justify-center content-center py-3 px-4 border-t dark:border-slate-500">
            <a
              href="https://linkedin.com/in/mhamza7265"
              target="_blank"
              className="block p-5 hover:bg-slate-100"
            >
              <i className="fa-brands fa-linkedin text-3xl dark:text-slate-200"></i>
            </a>
            <a
              href="https://github.com/mhamza7265"
              target="_blank"
              className="block p-5 hover:bg-slate-100"
            >
              <i className="fa-brands fa-github text-3xl dark:text-slate-200"></i>
            </a>
          </li>
        </ul>
        <div className="dark-toggle ml-6">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={handleDarkModeChange}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <span className="ball"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
