import React from "react";
import Section from "../components/Section";

const Hello = () => (
  <Section className="p-4 md:px-10 md:py-4">
    <h2 className="text-2xl mb-4">สวัสดีครับ | Hello Everyone!</h2>
    <p>
      I’m <strong>Aun Jessada</strong>, a fullstack web engineer located in
      Bangkok, Thailand. Awarded with{" "}
      <strong>
        World Championship in Games Category at 2018 Microsoft's Imagine Cup
      </strong>
      . With <strong>over a decade of experience</strong> in web development,
      working closely with designers, I have proven to have led successful
      engineering teams and being in charge of driving many organizations
      forward.
    </p>
    <p className="mt-4">
      Though, I’m a full-stack engineer, my main focus has always been{" "}
      <strong>frontend</strong>. My main frontend stack is{" "}
      <strong>“React”</strong>. Having a background in game development, I
      really enjoy making interactive UIs with cool animations, like these:
    </p>
  </Section>
);

export default Hello;
