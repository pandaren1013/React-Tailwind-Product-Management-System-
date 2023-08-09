import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <div className={`flex flex-col ${styles.padding}`}>
      <div className="flex justify-between md:flex-row flex-col">
        <div className="flex-[1] mb-10 dark:text-slate-400">
          <img alt="noImg" src={logo} />
          <p>
            Fast dilivery, which is active all over the world, serves with many
            transportation vehicles
          </p>
        </div>
        <div className="flex-[1.5] grid grid-cols-1 md:grid-cols-3">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title}>
              <p className="text-[20px] font-bold pb-6 dark:text-white">{footerlink.title}</p>
              <ul className={`pb-6 ${styles.paragraph}`}>
                {footerlink.links.map((link, index) => (
                  <li>{link.name}</li>
                ))}
              </ul>
            </div>
          ))}
          {/* <div className="flex flex-col">
            <p className="font-bold text-[20px] pb-3">Company</p>
            <div className={`${styles.paragraph}`}>
              <p>About Us</p>
              <p>About Us</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="text-slate-600 dark:text-slate-400 flex flex-col text-center md:flex-row border-t-2 border-t-slate-400 justify-between">
        <p className="mb-3 font-bold">All Rights reserved @ BESNIK 2023</p>
        <div className="flex sm:flex-row sm:justify-center flex-col gap-6 ">
          <p>Terms & COnditions</p>
          <p>Privacy & Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
