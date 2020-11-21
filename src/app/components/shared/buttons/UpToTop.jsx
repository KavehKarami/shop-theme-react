import React, { useEffect } from 'react';

const UpToTop = () => {
  const rootElement = document.documentElement;

  useEffect(() => {
    const upToTopBtn = document.getElementById("up-to-top");

    const showBtn = () => {
      if (document.body.scrollTop > 100 || rootElement.scrollTop > 100) {
        upToTopBtn.classList.add('active');
      } else {
        upToTopBtn.classList.remove('active');
      }
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    document.addEventListener("scroll", showBtn);
    upToTopBtn.addEventListener("click", scrollToTop);

  }, []);



  return (
    <div id="up-to-top">
      <span><img src="https://i.ibb.co/5krn9rB/arrow-up.png" alt="" /></span>
    </div>
  );
}

export default UpToTop;