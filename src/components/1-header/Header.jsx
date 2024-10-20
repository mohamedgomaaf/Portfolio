import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
<<<<<<< HEAD
    <header className="  flex">
=======
    <header className="flex">
>>>>>>> 60c599e (second commit)
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
<<<<<<< HEAD
          {/* <li>
            <a href="">About</a>
          </li> */}

          {/* <li>
            <a href="">Articles</a>
          </li> */}
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          {/* <li>
            <a href="">Speaking</a>
          </li> */}
=======
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
>>>>>>> 60c599e (second commit)
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
<<<<<<< HEAD
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
=======
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
>>>>>>> 60c599e (second commit)
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
