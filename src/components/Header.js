import styles from "../style";
import { more, header } from "../assets";
import Button from "./Button";
const Header = () => {
  return (
    <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className="flex-1 flex-col md:px-16 xl:px-26 px-6 pt-20 ">
        <img alt="noImg" src={more} className="w-[200px] h-[50px]" />
        <div className="text-[60px] font-bold max-[420px]:text-[40px] dark:text-white">
          Groceries delivered in as little as{" "}
          <span className="text-rose-600">2 hours</span>
        </div>
        <div className="text-[25px] py-10 text-slate-600 dark:text-slate-400">
          Grocen atssures fresh grocery every morning to your family without
          getting out in this pandemic.
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-evenly ">
          <Button styles={`mt-10`} />
          <button
            className={`py-4 px-6 font-medium text-[18px]  rounded-[10px] text-black mt-10 dark:text-white`}
          >
            Order Process
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img alt="noImg" src={header} className="w-[100%] h-[100%]  object-contain" />
      </div>
    </div>
  );
};
export default Header;
