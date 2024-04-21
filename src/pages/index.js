import React from "react";
import Header from "../sections/Header";
import Hello from "../sections/Hello";
import InteractiveUIs from "../sections/InteractiveUIs";

const IndexPage = () => {
  return (
    <main className="space-y-4">
      <Header />
      <Hello />
      <InteractiveUIs />
    </main>
  );
};

export default IndexPage;
