import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Section from "../components/Section";

import Hamburger from "../components/Hamburger";
import hamburgerCode from "!!raw-loader!../components/Hamburger";
import hamburgerCSSCode from "!!raw-loader!../components/Hamburger.css";

import Guitar from "../components/GuitarStrings";
import guitarCode from "!!raw-loader!../components/GuitarStrings";

const InteractiveUIs = () => (
  <Section className="p-10 divide-y">
    <div>
      <h3 className="text-2xl font-bold text-center mb-4">Hamburger 🍔</h3>
      <div className="flex flex-col space-y-2 md:flex-row justify-center md:space-x-10 items-center mb-10">
        <div className="flex-none">
          <Hamburger size={240} />
        </div>
        <div className="text-xs w-full max-h-96 overflow-auto">
          <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
            {hamburgerCode}
          </SyntaxHighlighter>
        </div>
        <div className="text-xs w-full max-h-96 overflow-auto">
          <SyntaxHighlighter language="css" style={vscDarkPlus}>
            {hamburgerCSSCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-center my-4">Guitar Strings 🎸</h3>
      <div className="flex flex-col space-y-2 md:flex-row justify-center md:space-x-10 items-center mb-10">
        <div className="flex-none">
          <Guitar width={320} height={320} />
        </div>
        <div className="text-xs w-full max-h-96 overflow-auto flex-1">
          <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
            {guitarCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  </Section>
);

export default InteractiveUIs;
