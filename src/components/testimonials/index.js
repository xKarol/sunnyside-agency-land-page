import Opinion from "./Opinion";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h1>Client Testimonials</h1>
      <div className="testimonials__clients">
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
    </section>
  );
}
