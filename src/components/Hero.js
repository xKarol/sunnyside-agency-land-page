import ArrowDown from "../assets/icon-arrow-down.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__heading">
        <h1>We are creatives</h1>
        <img src={ArrowDown} alt="arrow down" />
      </div>
    </section>
  );
}
