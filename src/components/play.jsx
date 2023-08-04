import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { findSequence } from "../actions/grid";

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const Play = () => {
  const [elements, setElement] = useState([]);
  const [row, setRow] = useState(5);
  const [column, setColumn] = useState(5);
  const [array, setArray] = useState([0, 0, 0, 0, 0]);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [isActive, setIsActive] = useState(false);
  // const dispatch = useDispatch();

  const data = {};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    var arr = Array.from({ length: Number(data.row) }, (v, k) => {
      return Array.from({ length: Number(data.column) }, (v, k) => {
        return getRandomArbitrary(0, 4);
      });
    });
    setElement(arr);
    setArray(arr[0]);
  };

  useEffect(() => {
    var arr = Array.from({ length: row }, (v, k) => {
      return Array.from({ length: column }, (v, k) => {
        return getRandomArbitrary(0, 4);
      });
    });
    setElement(arr);
  }, []);

  let y = elements.length;
  let x = array.length;
  console.log(b, a, c);

  const showInfo = () => {
    setIsActive(!isActive);
    setTimeout(() => {
      let ans = [];
      getallpath(elements, x, y, a, b, ans, "", c);

      return ans;
    }, 1000);
  };

  const getallpath = (matrix, x, y, a, b, ans, cur, c) => {
    if (a >= y || b >= x || a < 0 || b < 0 || matrix[a][b] !== c) {
      return;
    }

    if (a === y - 1 && b === x - 1) {
      ans.push(cur);
      return;
    }
    matrix[a][b] = 0;

    getallpath(matrix, x, y, a - 1, b, ans, cur + "U", c);
    getallpath(matrix, x, y, a, b + 1, ans, cur + "R", c);
    getallpath(matrix, x, y, a, b - 1, ans, cur + "L", c);
    getallpath(matrix, x, y, a + 1, b, ans, cur + "D", c);

    matrix[a][b] = 1;

    return;
  };
  // elements.forEach((row, element) => {
  //   row.forEach((col, ele) => {
  //     buttons.push((rowIndex = { rowIndex }), (columnIndex = { columnIndex }));
  //   });
  // });

  const listItems = elements.map((element, index) => (
    <div
      key={index}
      className={clsx(` my-1 flex flex-row`)}
      onClick={() => setB(index)}
    >
      {element.map((ele, index) => (
        <div
          key={index}
          className={clsx(
            `flex rounded-lg mx-1 w-10 h-10 px-2 py-2 bg-primary-${ele} ${
              isActive ? "border-solid border-black border-[1px]" : ""
            }`
          )}
          onClick={() => {
            showInfo();
            // setA(index);
            // setC(ele);
          }}

          // onClick={dispatch(
          //   findSequence(
          //     (setTrigger = { setIsActive }),
          //     (Trigger = { isActive }),
          //     {
          //       rowRootIndex: rowIndex,
          //       columnRootIndex: columnIndex,
          //     }
          //   )
          // )}
        ></div>
      ))}
    </div>
  ));

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          " text-black flex flex-row m-auto items-center justify-center bg-primary-3 px-3 py-2 hover:border-none hover:outline-none rounded-lg"
        )}
      >
        <div className={clsx(" mr-20 ")}>
          <span className={clsx("mr-2")}>Row:</span>
          <input
            type="number"
            defaultValue={row}
            className={clsx(
              "pl-2 border-black rounded-md border-solid boder-[1px] w-20 bg-primary-0 "
            )}
            onChange={(e) => setRow(Number(e.target.value))}
            {...register("row")}
          />
        </div>
        <div className={clsx(" mr-20 ")}>
          <span className={clsx("mr-2")}>Coloum:</span>
          <input
            type="number"
            defaultValue={column}
            className={clsx(
              "pl-2 bg-primary-2 rounded-md border-black border-solid boder-[1px] w-20"
            )}
            onChange={(e) => setColumn(Number(e.target.value))}
            {...register("column")}
          />
        </div>
        <div>
          {errors.exampleRequired && <span>This field is required</span>}
          <button
            type="submit"
            className={clsx(
              "hover:text-lime-600 italic font-bold bg-primary-1 py-2 px-5 rounded-lg hover:bg-gray-300 text-black"
            )}
          >
            RESET
          </button>
        </div>
      </form>
      <div
        className={clsx(
          " relative flex flex-col w-10/12 md:h-[650px] m-md:h-[300px] l-md:h-[500px] m-auto mt-10 items-center"
        )}
      >
        {listItems}
      </div>
    </>
  );
};
