import React, { useEffect, useState } from "react";

export default function ScrollTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    setShowScrollTop(window.scrollY >= window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-top ${showScrollTop ? "show" : ""} `}>
      <a href="https://wa.me/527298880123">
        <img
          src="/assets/img/whatsapp.png"
          alt="whatsapp icon"
          className="blob-animation"
        />
      </a>
    </div>
  );
}
