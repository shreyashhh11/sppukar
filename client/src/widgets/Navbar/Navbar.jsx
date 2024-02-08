import React, { useEffect, useState } from "react";
import "./Navbar.css";

//routers
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarOpen } from "../../functions/ui";

//utils
import { navbar } from "../../configs/utils";

const Navbar = () => {
  const { isNavbarOpen } = useSelector((store) => store.ui);
  const dispatch = useDispatch();

  return (
    <header className="navbar text-white flex px-6 py-4">
      <div className="navbar--items justify-between w-[100%] flex items-center">
        <div className="navbar--logo flex md:flex-col">
          <div
            className="md:hidden flex items-center text-2xl max-w-fit"
            onClick={() => dispatch(setNavbarOpen())}
          >
            <ion-icon name="menu-sharp"></ion-icon>
          </div>
          <NavLink to="/">
            <h2 className="text-2xl ml-2 md:text-3xl">SppuKar</h2>
          </NavLink>
        </div>
        <ul className="hidden md:flex md:gap-5">
          {navbar.map((item) => (
            <NavLink to={item.link} key={item.name}>
              <h3>{item.name}</h3>
            </NavLink>
          ))}
        </ul>
        <aside
          className={`sidebar md:hidden fixed top-0 left-0 p-8 h-screen z-[1000] opacity-100 ${
            isNavbarOpen ? "block " : "hidden"
          } bg-violet-950`}
        >
          <div
            className=" flex items-center text-3xl absolute right-2 top-2"
            onClick={() => dispatch(setNavbarOpen())}
          >
            <ion-icon name="close-sharp"></ion-icon>
          </div>
          <ul className="mt-8 flex flex-col gap-4 text-left">
            {navbar.map((item) => (
              <NavLink
                to={item.link}
                key={item.name}
                onClick={() => dispatch(setNavbarOpen())}
              >
                <h3>{item.name}</h3>
              </NavLink>
            ))}
          </ul>
        </aside>
        <NavLink to="/">
          <h3 className="primary-btn">Sign In</h3>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
