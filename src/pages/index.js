import * as React from "react";
import GithubLogo from "../assets/github.svg";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <div className="container mx-auto bg-white p-2 flex justify-between items-center mt-28 rounded-md shadow-md">
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
          className="hover:opacity-50"
        >
          <GithubLogo />
        </a>
      </div>
    </main>
  );
};

export default IndexPage;
