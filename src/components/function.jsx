import clsx from "clsx";
import { useEffect } from "react";

export function Func() {
   const str = "";

  const handleTableCol = (a = 5) => {
    for (i = 0; i <= a; i++) {
      <td onLoad={handleTableRow}></td>;
    }
  };

  const handleTableRow = (b = 5) => {
    for (i = 0; i <= b; i++) {
      <table>
        <tr>
          <button></button>
        </tr>
      </table>;
    }
  };

  return (
    <>
      <div className={clsx("w-[400px] h-[400px]")}>
        <table onLoad={handleTableCol}></table>
      </div>
    </>
  );
}
