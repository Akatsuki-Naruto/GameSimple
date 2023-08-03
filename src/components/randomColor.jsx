import clsx from "clsx";

export default function Element() {
  const colorList = [
    0="bg-red-600",
    1="bg-green-600",
    2="bg-blue-600",
    3="bg-yellow-500",
    4="bg-orange-600",
  ];

  const randomColor = (colorList) => {
    return colorList[Math.floor(Math.random() * colorList.length)];
  };

  return (
    <>
      <div className={clsx(`w-4 h-4 ${randomColor(colorList)}`)}></div>
    </>
  );
}
