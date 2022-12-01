import React, { useState } from "react";

const NavList = () => {
  const navs = ["Home", "Blog", "Contact"];
  const [page, setPage] = useState("Home");

  return navs.map((nav) => (
    <li className={"navItem pr-8 py-4 hover:text-rose-300 cursor-pointer " + (nav === page ? "text-rose-300" : "")}  onClick={() => setPage(nav)}>{nav}</li>
  ));
};

export default NavList;
