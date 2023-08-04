
export const listItems = elements.map((element, index) => (
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

        //   onClick={dispatch(findSequence({
        //     rowRootIndex: rowIndex,
        //     columnRootIndex: columnIndex
        // }))}
        ></div>
      ))}
    </div>
  ));