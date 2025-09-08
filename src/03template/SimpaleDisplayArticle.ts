import Article from "./Article";
import DisplayArticleTemplate from "./DisplayAticleTemplate";

export default class SimpleDisplayArticle extends DisplayArticleTemplate {
  protected titleHtml(): string {
    return `<h1>${this._article.getTitle()}</h1>`;
  }

  protected contentHtml(): string {
    const items = this._article.getContent().map((item) => `<li>${item}</li>`);
    return `<ul>${items.join("")}</ul>`;
  }

  protected footerHtml(): string {
    return `<h3>${this._article.getFooter()}</h3>`;
  }

  constructor(article: Article) {
    super(article);
  }
}
