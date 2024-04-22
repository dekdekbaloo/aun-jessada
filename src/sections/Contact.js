import React from "react";
import Section from "../components/Section";
import LinkedInIcon from "../assets/linkedin.svg";
import XIcon from "../assets/x.svg";
import EmailIcon from "../assets/email.svg";

const Contact = () => (
  <Section className="px-10 py-4">
    <p>
      Well, I believe I that was much of an introduction. If you'd like to
      contact me and work together, let's <strong>keep in touch!</strong>
    </p>
    <div className="flex justify-center space-x-4 mt-4">
      <a
        className="hover:opacity-80"
        href="https://www.linkedin.com/in/jessada-trirongkit-22a321134"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon width={24} />
      </a>
      <a
        className="hover:opacity-80"
        href="https://twitter.com/aun_jessada"
        target="_blank"
        rel="noreferrer"
      >
        <XIcon width={24} />
      </a>
      <a href="mailto:jessada.trk@gmail.com" className="hover:opacity-80">
        <EmailIcon width={24} height={24} />
      </a>
    </div>
  </Section>
);

export default Contact;
