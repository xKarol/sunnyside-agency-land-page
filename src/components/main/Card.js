export default function Card({ title, text, src, button, bottom }) {
  return (
    <article className="main-cards__card">
      {src && <img className="main-cards__image" src={src} alt={title} />}

      <div className={`main-cards__details ${bottom ? "bottom" : null}`}>
        {title && <h1 className="main-cards__title">{title}</h1>}
        {text && <p className="main-cards__text">{text}</p>}
        {button && (
          <button className={`main-cards__button ${button}`}>Learn more</button>
        )}
      </div>
    </article>
  );
}
