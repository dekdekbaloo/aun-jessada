import React from "react";
import Header from "../sections/Header";
import Hello from "../sections/Hello";
import InteractiveUIs from "../sections/InteractiveUIs";
import TrunkBased from "../sections/TrunkBased";
import Background from "../sections/Background";
import Contact from "../sections/Contact";

const IndexPage = () => {
  return (
    <main className="space-y-4 pb-4">
      <Header />
      <Hello />
      <InteractiveUIs />
      <TrunkBased />
      <Background />
      <Contact />
    </main>
  );
};

export default IndexPage;
