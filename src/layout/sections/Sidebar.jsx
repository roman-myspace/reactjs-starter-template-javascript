import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import menuItems from "./menu.json";

export default function Sidebar() {

  const url = useLocation();

  const [menu, setMenu] = useState(menuItems);
  const [toggleDropdown, setToggleDropdown] = useState(url.pathname);
  const [activeMenu, setActiveMenu] = useState("");
  useEffect(() => {
    setActiveMenu(url.pathname);
  }, [url.pathname]);

  return (
    <>
      Sidebar Menu
    </>
  );
}
