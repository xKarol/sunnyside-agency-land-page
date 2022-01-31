export default function Opinion({ avatar, text, name, job }) {
  return (
    <article className="testimonials__card">
      <img
        className="testimonials__avatar"
        src={avatar}
        alt={`${name}, ${job}`}
      />
      <p className="testimonials__text">{text}</p>
      <div className="testimonials__details">
        <h1>{name}</h1>
        <p>{job}</p>
      </div>
    </article>
  );
}
