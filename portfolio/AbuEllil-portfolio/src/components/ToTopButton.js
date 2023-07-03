import React, { useState, useEffect } from "react";


const ToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollDistance = documentHeight - windowHeight;
    const scrollPercent = Math.round((scrollTop / scrollDistance) * 100);
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="to-top-button"
      style={{ opacity: scrollPercent > 10 ? 1 : 0 }}
    >
      <button onClick={scrollToTop}>
        <span>To Top</span>
        <span className="scroll-percent">{scrollPercent}%</span>
      </button>
    </div>
  );
};

export default ToTopButton;
