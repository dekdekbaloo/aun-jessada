import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Codepen from "react-codepen-embed";

import Section from "../components/Section";

const Background = () => (
  <Section className="px-10 py-4">
    <h2 className="text-2xl mb-4">My Background</h2>
    <p className="my-4">
      Graduated from faculty of{" "}
      <strong>Computer Engineering, Chulalongkorn’s University</strong>, my
      first big project was <strong>“Timelie”</strong> a puzzle game that
      players must manipulate the timeline to solve problems. A supposedly
      senior year’s project turned out to be an awarding project for{" "}
      <strong>Microsoft’s Imagine Cup 2016</strong>. Thanks to the effort of my
      team, I got my first step into the global tech industries with lots of
      opportunities.
    </p>
    <div className="max-w-screen-md mx-auto">
      <LiteYouTubeEmbed
        id="QhcG3H4C_E4"
        title="Timelie (2016) - 1st Place Winner Games Category Imagine Cup 2016"
      />
    </div>
    <p className="my-4">
      In the era of <strong>MERN stack</strong> boom, I was really interested in
      static sites. Actually, I was into it to a point where I went to speak
      about it in details at <strong>ReactJS BKK 2018</strong>. I talked about
      how I deep-dived into the core of Next.js <strong>export</strong> and
      optimized the whole pre-rendering pipeline to make it as fast as{" "}
      <strong>Gatsby</strong>.{" "}
      <i>
        As fast back then, till all the tools have now developed to a point
        where my demonstration isn’t needed anymore but still worth mentioning
      </i>
      . The content is in Thai but if you’d like to discuss about this,
      hopefully we can get to talk in person.
    </p>
    <div className="max-w-screen-md mx-auto">
      <LiteYouTubeEmbed
        id="z5ykiC17hm8"
        title="It's Next.js but it's static and it's fast - Jessada Trirongkit - React Bangkok 3.0.0"
      />
    </div>
    <p className="my-4">
      I also spend some of my free time doodling some stuff. Check out one of my
      pen here:
    </p>
    <Codepen hash="zVNqqR" user="dekdekbaloo" height={520} />
    <p className="my-4">
      Even though, my main career is a software engineer, I also enjoy making
      music. I even signed myself with a record label. Here is an example of my
      work:
    </p>
    <div className="max-w-screen-md mx-auto">
      <LiteYouTubeEmbed id="5UfwoCqhwe0" title="Rain Shelter - Aun Jessada" />
    </div>
    <p className="my-4">
      This artistic side of me really help contributing to my communication
      skills. I’m well-known of making the working atmosphere light and fun.
    </p>
  </Section>
);

export default Background;
