import { useEffect, useRef } from "react";

function ScrollToTop() {
  const scrollBtn = useRef();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 300) {
        scrollBtn.current.classList.remove("opacity-0");
      } else {
        scrollBtn.current.classList.add("opacity-0");
      }
    });
  }, []);

  const handleScrollClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button
      className="scroll-top bg-sky-700 hover:bg-sky-900 px-3 py-2 rounded-full fixed opacity-0"
      ref={scrollBtn}
      onClick={handleScrollClick}
    >
      <i className="fa fa-angle-up text-white"></i>
    </button>
  );
}

export default ScrollToTop;
