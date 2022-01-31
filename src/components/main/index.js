import Card from "./Card";

export default function Main() {
  return (
    <section className="main-cards">
      <Card
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow
      fast. Engage your clients through compelling visuals that do most of the
      marketing for you."
        button="yellow"
      />
      <Card src={"images/desktop/image-transform.jpg"} />
      <Card src={"images/desktop/image-stand-out.jpg"} />
      <Card
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers,
      photographers, videographers, and copywriters, we’ll build and extend your
      brand in digital places."
        button="red"
      />
      <Card
        title="Graphic design"
        text="Great design makes you memorable. We deliver artwork
      that underscores your brand message and captures potential clients’
      attention."
        src={"images/desktop/image-graphic-design.jpg"}
        bottom={true}
      />
      <Card
        title="Photography"
        text="Increase your credibility by getting the most
      stunning, high-quality photos that improve your business image."
        src={"images/desktop/image-photography.jpg"}
        bottom={true}
      />
    </section>
  );
}
