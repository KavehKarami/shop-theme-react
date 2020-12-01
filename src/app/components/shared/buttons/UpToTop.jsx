import React, { useEffect } from 'react';

const UpToTop = () => {
  useEffect(() => {
    try {
      const rootElement = document.documentElement;
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

    }
    catch (e) {
      console.log(e);
    }
  }, []);



  return (
    <div id="up-to-top">
      <span><img src={require('../../../../assets/img/arrow-up.png')} alt="" /></span>
    </div>
  );
}

export default UpToTop;