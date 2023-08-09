import styles from "../style";
import { Woman } from "../assets";
import Button from "./Button";
const Feature1 = () => {
  return (
    <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className="flex-1">
        <img
          alt="noImg"
          src={Woman}
          className="w-[100%] h-[100%]  object-contain"
        />
      </div>
      <div className="flex-1 flex-col md:px-16 xl:px-26 px-6 pt-40">
        <div>
          <p className="text-green-600 dark:text-green-400 text-[30px] max-[420px]:text-[25px]">
            WHY CHOOSE US
          </p>
        </div>
        <div className="text-[60px] font-bold max-[420px]:text-[40px] dark:text-white">
          Find Favorites And Discover New Ones
        </div>
        <div className="text-[25px] py-10 text-slate-600 dark:text-slate-400">
          At vero eos et accusamus et iusto odio dignissimos ducimus blanditlis
          paresen voluptatum deleniti.
        </div>
        <div>
          <Button styles={`mt-10`} />
        </div>
      </div>
    </div>
  );
};
export default Feature1;
