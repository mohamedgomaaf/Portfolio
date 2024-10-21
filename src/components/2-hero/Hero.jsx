import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="title"
          >
            Front-end Web Developer
          </motion.h1>
        </div>

        <p className="sub-title">
          I've worked with multiple companies, delivering outstanding results
          while
          <br />
          building websites during my skill training.
        </p>

        <div className="all-icons flex">
          <a
            className="icon icon-linkedin"
            href="https://www.linkedin.com/in/mohamedgomaaf/"
          ></a>
          <a
            className="icon icon-github"
            href="https://github.com/mohamedgomaaf"
          ></a>
          <button>
            <a href="./CV_React.pdf" download="/public/CV_React.pdf">
              Download Resume
            </a>
          </button>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
