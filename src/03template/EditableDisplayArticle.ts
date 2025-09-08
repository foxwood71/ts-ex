import Article from "./Article";
import DisplayArticleTemplate from "./DisplayAticleTemplate";

export default class EditableDisplayArticle extends DisplayArticleTemplate {
  protected titleHtml(): string {
    return `<div><span>제목</span><input value='${this._article.getTitle()}'/></div>`;
  }

  protected contentHtml(): string {
    const items = this._article.getContent().map((item) => `${item}\n`);
    return `<span>내용</span><br/><textarea cols='50' row='50'>${items.join(
      ""
    )}</textarea>`;
  }

  protected footerHtml(): string {
    return `<div><span>글쓴이</span><input value='${this._article.getFooter()}'/></div>`;
  }

  constructor(article: Article) {
    super(article);
  }
}
