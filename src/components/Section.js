import React from "react";

const Section = ({ title, text, src, button, bottom }) => {
  return (
    <>
      <section className="section__card">
        {src && <img className="section__image" src={src} alt="" />}
        {title && text && (
          <div
            className={
              bottom === true ? "section__details bottom" : "section__details"
            }
          >
            {title && <h1 className="section__title">{title}</h1>}
            {text && <p className="section__text">{text}</p>}
            {button && (
              <button
                className={
                  button ? `section__button ${button}` : "section__button"
                }
              >
                Learn more
              </button>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Section;
