import styles from "../style";
import { Man } from "../assets";
// import Button from "./Button";
const Feature2 = () => {
  return (
    <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className="flex-1 flex-col md:px-16 xl:px-26 px-6 pt-[350px]">
        <p className="text-yellow-400 text-[30px] max-[420px]:text-[25px]">
          HOME DELIVERY
        </p>
        <div className="text-[60px] font-bold max-[420px]:text-[40px] dark:text-white">
          Sit At Home We Will Take Care Your Order
        </div>
        <div className="text-[25px] py-10 text-slate-600 dark:text-slate-400">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditils praesentium voluptatum delenti atque corrupti quos
        </div>
        <div>
          <button
            className={`py-4 px-6 font-medium text-[18px] border-2 border-rose-600  rounded-[10px] text-rose-600 mt-10 dark:border-rose-500 dark:text-rose-500`}
          >
            Explore Now
          </button>
        </div>
      </div>
      <div className="flex-1 px-5">
        <img
          alt="noImg"
          src={Man}
          className="w-[100%] h-[100%]  object-contain"
        />
      </div>
    </div>
  );
};
export default Feature2;
