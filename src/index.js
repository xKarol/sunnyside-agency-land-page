import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Header from "./components/Header.js";
import Section from "./components/Section.js";
import Opinion from "./components/Opinion.js";

import SectionImg1 from "./assets/desktop/image-transform.jpg";
import SectionImg2 from "./assets/desktop/image-stand-out.jpg";
import SectionImg3 from "./assets/desktop/image-graphic-design.jpg";
import SectionImg4 from "./assets/desktop/image-photography.jpg";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <section>
      <Section
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow
      fast. Engage your clients through compelling visuals that do most of the
      marketing for you."
        button="yellow"
      />
      <Section src={SectionImg1} />
      <Section src={SectionImg2} />
      <Section
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers,
      photographers, videographers, and copywriters, we’ll build and extend your
      brand in digital places."
        button="red"
      />
      <Section
        title="Graphic design"
        text="Great design makes you memorable. We deliver artwork
      that underscores your brand message and captures potential clients’
      attention."
        src={SectionImg3}
        bottom={true}
      />
      <Section
        title="Photography"
        text="Increase your credibility by getting the most
      stunning, high-quality photos that improve your business image."
        src={SectionImg4}
        bottom={true}
      />
    </section>
    <div className="testimonials">
      <h1>Client Testimonials</h1>
      <div className="testimonials__section">
        <Opinion
          avatar={SectionImg4}
          name="Emily R."
          text="We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit."
          job="Marketing Director"
        />
        <Opinion
          avatar={SectionImg4}
          name="Thomas S."
          text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
      success made it a satisfying and enjoyable experience."
          job="Chief Operating Officer"
        />
        <Opinion
          avatar={SectionImg4}
          name="Jennie F."
          text="Incredible end result! Our sales increased over 400% when we worked with
      Sunnyside. Highly recommended!"
          job="Business Owner"
        />
      </div>
      About Services Projects Contact
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
