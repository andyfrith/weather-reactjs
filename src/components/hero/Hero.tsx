import "./style.css";

export default function Hero({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1 className="title">{title}</h1>
    </section>
  );
}
