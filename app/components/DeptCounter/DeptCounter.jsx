import React, { useState, useEffect } from "react";

const useAutoIncrement = (initialValue, targetValue, speed, text) => {
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetValue) {
          return prevCount + 1;
        } else {
          clearInterval(incrementInterval);
          return prevCount;
        }
      });
    }, speed);
    return () => {
      clearInterval(incrementInterval);
    };
  }, [targetValue, speed]);
  return count;
};

export default function DeptCounter({
  initialValue = 0,
  targetValue = 10,
  speed = 700,
  text = "",
  textColor = "black",
  bgColor = "white",
  title = "Counter Widget",
  color,
}) {
  const count = useAutoIncrement(initialValue, targetValue, speed);
  return (
    <div
      className={`flex-col mx-auto justify-center items-center  inline-flex sm:w-full md:w-1/3 lg:w-full   ${color} hover:rounded-tl-[40%] hover:rounded-br-[40%] transition-all duration-700 rounded-lg`}
    >
      <div
        className={`p-12 self-stretch text-white text-2xl font-bold  text-center   `}
      >
        +{count}
        <p className="text-base font-medium ">{text}</p>
      </div>
    </div>
  );
}
