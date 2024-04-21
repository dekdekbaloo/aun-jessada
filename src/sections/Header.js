import React from "react";
import GithubLogo from "../assets/github.svg";
import { StaticImage } from "gatsby-plugin-image";
import Section from "../components/Section";

const Header = () => (
  <Section className="flex justify-between items-center mt-28 p-2">
    <div className="flex">
      <div className="w-36 relative">
        <div className="absolute w-36 h-36 bg-white rounded-full -bottom-1 overflow-hidden shadow-md p-1">
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
);

export default Header;
