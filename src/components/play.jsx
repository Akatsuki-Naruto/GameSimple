import clsx from "clsx";
import { Func } from "./function";

export const Play = () => {
  return (
    <>
      <div className={clsx(" text-black flex flex-row m-auto items-center justify-center")}>
        <div className={clsx(" mr-20 ")}>
          <span className={clsx("mr-2")}>Row:</span>
          <input type="text" className={clsx("pl-2 bg-white border-black border-solid boder-[1px] w-12")}/>
        </div>
        <div className={clsx(" mr-20 ")}>
          <span className={clsx("mr-2")}>Coloum:</span>
          <input type="text" className={clsx("pl-2 bg-white border-black border-solid boder-[1px] w-12")}/>
        </div>
        <div>
          <button className={clsx("text-lime-600 italic font-bold bg-gray-300 py-2 px-5 rounded-lg hover:bg-yellow-300 hover:border-black hover:border-solid hover:border-[1px]")}>RESET</button>
        </div>
      </div>
      <Func />
    </>
  );
};