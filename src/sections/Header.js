import React, { useEffect, useState } from "react";
import GithubLogo from "../assets/github.svg";
import { StaticImage } from "gatsby-plugin-image";
import Section from "../components/Section";
import clsx from "clsx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrolled && <div className="md:h-[160px]" />}
      <Section
        className={clsx(
          "flex justify-between items-center p-2 mt-28",
          scrolled
            ? "md:fixed md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 z-50"
            : "md:mt-28"
        )}
      >
        <div className="flex flex-col md:flex-row">
          <div
            className={clsx(
              "absolute left-1/2 transform -translate-x-1/2 md:relative bottom-full translate-y-2 w-24 md:translate-y-0 md:translate-x-0 md:left-0",
              scrolled ? "md:w-10" : "md:w-36"
            )}
          >
            <div
              className={clsx(
                "absolute bg-white rounded-full overflow-hidden shadow-md p-1 transition-all duration-300 w-24 h-24",
                scrolled
                  ? "md:w-10 md:h-10 md:top-1/2 md:transform md:-translate-y-1/2"
                  : "md:w-36 md:h-36 md:-bottom-1"
              )}
            >
              <StaticImage
                className="rounded-full"
                src="../images/aun_jessada.jpg"
                alt="Aun Jessada"
              />
            </div>
          </div>
          <h1>
            <strong>AUN JESSADA</strong> | Fullstack Web Engineer | Bangkok,
            Thailand (UTC+7)
          </h1>
        </div>
        <a
          href="https://github.com/dekdekbaloo"
          target="_blank"
          className="hover:opacity-60"
        >
          <GithubLogo />
        </a>
      </Section>
    </>
  );
};

export default Header;
