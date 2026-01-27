import type { ArticleType } from "../../types";
import "./style.css";

export default function Article({
  article,
  cityImages,
}: {
  article: ArticleType;
  cityImages: string[];
}) {
  return (
    <section className="article">
      <p className="text">{article.paragraph1}</p>
      <p className="text">{article.paragraph2}</p>
      <p className="text">{article.paragraph3}</p>
      <div className="text-center text-2xl text-black flex flex-row justify-center items-center gap-4 my-4 overflow-auto">
        {cityImages?.map((image: string) => (
          <img
            className="w-48 h-48 object-cover"
            key={image}
            src={image}
            alt="city"
          />
        ))}
      </div>
    </section>
  );
}
