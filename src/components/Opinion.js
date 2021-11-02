import React from "react";

const Opinion = ({ avatar, text, name, job }) => {
  return (
    <>
      <div className="testimonials__card">
        <img className="testimonials__avatar" src={avatar} alt="" />
        <p className="testimonials__text">{text}</p>
        <div className="testimonials__details">
          <h1>{name}</h1>
          <p>{job}</p>
        </div>
      </div>
    </>
  );
};

export default Opinion;
