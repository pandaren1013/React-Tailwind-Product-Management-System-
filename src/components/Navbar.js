import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";
// import Icon from '@mdi/react';
// import { mdiChevronDownCircleOutline,mdiChevronUpCircleOutline } from '@mdi/js';
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="flex md:flex-row flex-col pb-1 ">
      <nav className="w-full flex py-6 justify-between items-center ">
        {/* <div class="flex justify-between ...">
        <div class="order-0 hover:order-3">01</div>
        <div class="order-2">02</div>
        <div class="order-4">03</div>
      </div> */}

        <img
          src={logo}
          alt="hoobank"
          className="md:w-[124px] md:h-[32px] w-[90px] h-[28px] "
        />
        {/* <Icon path={mdiChevronDownCircleOutline} size={1} />
      <Icon path={mdiChevronUpCircleOutline} size={1} /> */}
        <ul className="list-none md:flex hidden justify-center items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px]  ${
                active === nav.title
                  ? "text-rose-600"
                  : "text-black dark:text-white"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="md:block hidden relative">
          <div className="absolute pointer-events-auto ml-0">
            <svg
              className="absolute text-slate-400 h-8 w-8"
              viewBox="-2 -2 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="font-sans block text-sm w-full pl-10 py-2 px-3 ring-1 ring-white text-slate-500 rounded-lg dark:bg-white dark:ring-0 dark:highlight-white/5 dark:text-slate-400"
          />
        </div>

        <DarkModeSwitch
          style={{marginLeft:"2rem"}}
          checked={darkSide}
          onChange={toggleDarkMode}
          size={24}
        />

        <div className="md:hidden flex  justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } py-6 px-10 bg-green-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-rose-600" : "text-black"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="md:hidden relative block ">
        <div className="absolute pointer-events-auto ml-0">
          <svg
            className="absolute text-slate-400 h-8 w-8"
            viewBox="-2 -2 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="font-sans block text-sm pl-8 py-2  ring-1 ring-slate-400 text-slate-500 rounded-lg dark:bg-white dark:ring-0 dark:highlight-white/5 dark:text-slate-400"
        />
      </div>
    </div>
  );
};

export default Navbar;
