import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Gallery from "./components/gallery";

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
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}
