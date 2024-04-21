import React from "react";
import Header from "../sections/Header";
import Hello from "../sections/Hello";
import InteractiveUIs from "../sections/InteractiveUIs";
import TrunkBased from "../sections/TrunkBased";
import Background from "../sections/Background";

const IndexPage = () => {
  return (
    <main className="space-y-4">
      <Header />
      <Hello />
      <InteractiveUIs />
      <TrunkBased />
      <Background />
    </main>
  );
};

export default IndexPage;
