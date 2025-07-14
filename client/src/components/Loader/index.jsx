
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const preloader = () => {
  const preloaderTimeline = gsap.timeline();
  preloaderTimeline
    .to(".mil-preloader", {
      height: 0,
      ease: "sine",
      duration: 0.4,
      delay: 2.3,
    })
    .to(".mil-preloader .mil-load", {
      width: "calc(100% - 30px)",
      ease: "linear",
      duration: 1.3,
      delay: -2.3,
    })
    .to(".mil-preloader .mil-load", {
      opacity: 0,
      ease: "sine",
      duration: 0.4,
      delay: -0.6,
    })
    .to(".mil-preloader p", {
      scale: 0.5,
      opacity: 0,
      ease: "sine",
      duration: 0.4,
      delay: -0.7,
      onComplete: function () {
        ScrollTrigger.refresh();
      },
    });
};

const Preloader = () => {
  useEffect(() => {
    preloader();
  }, []);

  return (
    <div className="mil-preloader">
      <div className="mil-load" />
      <p className="h2 mil-mb-30">
        <span className="mil-light mil-counter animate-bounce" data-number={100}>
          0
        </span>
        <span className="mil-light">%</span>
      </p>
    </div>
  );
};
export default Preloader;
