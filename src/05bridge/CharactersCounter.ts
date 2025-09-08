import Draft from "./Draft";

export default class CharactersCounter extends Draft {
  constructor(title: string, author: string, contents: string[]) {
    super(title, author, contents);
  }

  getCharactersCount(): number {
    let count = 0;
    count += this.getTitle().length;
    count += this.getAuthor().length;
    this.getContents().forEach((item) => {
      count += item.length;
    });
    return count;
  }
}
