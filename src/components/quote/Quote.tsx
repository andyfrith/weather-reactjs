import "./style.css";

export default function Quote({ quote }: { quote: string }) {
  return (
    <blockquote className="quote">
      <span className="quotation-mark">&quot;</span>
      {quote}&quot;
    </blockquote>
  );
}
