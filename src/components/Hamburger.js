import React, {
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import clsx from "clsx";
import "./Hamburger.css";

const Hamburger = ({ size = 128 }) => {
  const [open, setOpen] = useState();

  return (
    <div
      className="hamburger transform active:scale-75 transition-transform duration-75 active:opacity-10"
      style={{ width: size, height: size }}
    >
      <button
        className="relative w-full h-full flex flex-col justify-between"
        onClick={() => setOpen(!open)}
      >
        {["hamburger__top", "hamburger__center", "hamburger__bottom"].map(
          (className) => (
            <div
              key={className}
              className={clsx(
                className,
                "absolute w-full bg-black rounded-xl",
                open && "--active",
                !open && "--inactive"
              )}
              style={{ paddingBottom: "10%" }}
            />
          )
        )}
      </button>
    </div>
  );
};

export default Hamburger;
