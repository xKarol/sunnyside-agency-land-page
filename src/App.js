import Header from "./components/Header";
import Section from "./components/Section";
import Opinion from "./components/Opinion";
import Footer from "./components/footer";
import Image from "./components/Image";

export default function App() {
  return (
    <>
      <Header />
      <section className="section">
        <Section
          title="Transform your brand"
          text="We are a full-service creative agency specializing in helping brands grow
      fast. Engage your clients through compelling visuals that do most of the
      marketing for you."
          button="yellow"
        />
        <Section src={"images/desktop/image-transform.jpg"} />
        <Section src={"images/desktop/image-stand-out.jpg"} />
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
          src={"images/desktop/image-graphic-design.jpg"}
          bottom={true}
        />
        <Section
          title="Photography"
          text="Increase your credibility by getting the most
      stunning, high-quality photos that improve your business image."
          src={"images/desktop/image-photography.jpg"}
          bottom={true}
        />
      </section>
      <div className="testimonials">
        <h1>Client Testimonials</h1>
        <div className="testimonials__section">
          <Opinion
            avatar={"images/image-emily.jpg"}
            name="Emily R."
            text="We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit."
            job="Marketing Director"
          />
          <Opinion
            avatar={"images/image-thomas.jpg"}
            name="Thomas S."
            text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
      success made it a satisfying and enjoyable experience."
            job="Chief Operating Officer"
          />
          <Opinion
            avatar={"images/image-jennie.jpg"}
            name="Jennie F."
            text="Incredible end result! Our sales increased over 400% when we worked with
      Sunnyside. Highly recommended!"
            job="Business Owner"
          />
        </div>
      </div>
      <div className="images">
        <Image src={"images/desktop/image-gallery-milkbottles.jpg"} />
        <Image src={"images/desktop/image-gallery-orange.jpg"} />
        <Image src={"images/desktop/image-gallery-cone.jpg"} />
        <Image src={"images/desktop/image-gallery-sugarcubes.jpg"} />
      </div>
      <Footer />
    </>
  );
}
