import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [check, setCheck] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className={toggleMenu ? "navMenu active" : "nav"}>
      <h1>Logo</h1>
      {(toggleMenu || screenWidth > 800) && (
        <ul className="list">
          <li className="items">Add Employee</li>
          <li className="items">Employee Of The Month</li>
          <button className="items" onClick={() => setCheck(!check)}>
            {check ? "Logout" : "Login"}
          </button>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        BTN
      </button>
    </div>
  );
}
