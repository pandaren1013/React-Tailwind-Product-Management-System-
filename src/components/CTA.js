import styles from "../style";
import { Apple, Play, Mobile } from "../assets";
// import Button from "./Button";
const CTA = () => {
  return (
    <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className="flex-1 flex justify-center px-5">
        <img alt="noImg" src={Mobile} className="object-contain" />
      </div>
      <div className="flex-1 flex-col md:px-16 xl:px-26 px-6 ">
        <div>
          <p className="text-rose-600 text-[30px] max-[420px]:text-[25px] dark:text-rose-500">
            Download our app
          </p>
        </div>
        <div className="text-[60px] font-bold max-[420px]:text-[40px] dark:text-white">
          Get The Groceries App Order More Easily
        </div>
        <div className="text-[25px] py-10 text-slate-600 dark:text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-5 ">
          <div className="py-4 px-4 font-medium text-[18px] border-2 border-slate-600 dark:border-white  rounded-[10px] text-black mt-10">
            <button className="flex items-center gap-2 dark:text-white">
              <img className="" alt="noImg" src={Apple} />
              <p>App Store</p>
            </button>
          </div>
          <div className="py-4 px-4 font-medium text-[18px] border-2 border-slate-600 dark:border-white dark:text-white rounded-[10px] text-black mt-10">
            <button className="flex items-center gap-2">
              <img className="" alt="noImg" src={Play} />
              <p>Play Store</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CTA;
