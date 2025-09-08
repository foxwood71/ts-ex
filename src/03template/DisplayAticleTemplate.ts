import Article from "./Article";

export default abstract class DisplayArticleTemplate {
  protected _article: Article;

  constructor(article: Article) {
    this._article = article;
  }
  public readonly displayHtml = () => {
    return `
      ${this.titleHtml()}
      ${this.contentHtml()}
      ${this.footerHtml()}
    `;
  };

  protected abstract titleHtml(): string;
  protected abstract contentHtml(): string;
  protected abstract footerHtml(): string;
}
