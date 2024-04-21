import React from "react";
import clsx from "clsx";

const Section = ({ children, className }) => {
  return (
    <section
      className={clsx(
        "container mx-auto bg-white rounded-md shadow-md",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
