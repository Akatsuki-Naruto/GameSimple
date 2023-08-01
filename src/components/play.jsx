import clsx from "clsx";
import { Func } from "./function";
import { useForm } from "react-hook-form";

export const Play = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // console.log(watch("row"));
  // console.log(watch("column"));

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          " text-black flex flex-row m-auto items-center justify-center"
        )}
      >
        <div className={clsx(" mr-20 ")}>
          <span className={clsx("mr-2")}>Row:</span>
          <input
            type="number"
            defaultValue="5"
            className={clsx(
              "pl-2 bg-white border-black border-solid boder-[1px] w-20"
            )}
            {...register("row")}
          />
        </div>
        <div className={clsx(" mr-20 ")}>
          <span className={clsx("mr-2")}>Coloum:</span>
          <input
            type="number"
            defaultValue={"5"}
            className={clsx(
              "pl-2 bg-white border-black border-solid boder-[1px] w-20"
            )}
            {...register("column")}
          />
        </div>
        <div>
          {errors.exampleRequired && <span>This field is required</span>}
          <button
            type="submit"
            className={clsx(
              "text-lime-600 italic font-bold bg-gray-300 py-2 px-5 rounded-lg hover:bg-yellow-300 hover:border-black hover:border-solid hover:border-[1px]"
            )}
          >
            RESET
          </button>
        </div>
      </form>
      <Func />
    </>
  );
};
