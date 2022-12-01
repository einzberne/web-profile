import React, { useState } from "react";
import NavList from "./navList";
import { FaHamburger } from "react-icons/fa";

const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="header fixed top-0 left-0 outer-shadow w-full bg-transparent bg-primary">
      <nav className="ml-auto mr-auto max-w-7xl flex h-16 items-center p-8 justify-between">
        <div className="pr-16">My Portfolio</div>
        <div
          className={
            "navMenu max-sm:fixed max-sm:top-16 max-sm:bg-primary max-sm:h-full max-sm:right-0 max-sm:outer-shadow delay-100 " +
            (show ? "max-sm:w-0" : "max-sm:w-4/6")
          }
          style={{ transition: "width 0.5s ease-in-out" }}
        >
          <ul className="navList text-left p-4 sm:flex">
            <NavList />
          </ul>
        </div>
        <button
          className="navToggle cursor-pointer sm:hidden"
          onClick={() => setShow(!show)}
        >
          <FaHamburger/>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
