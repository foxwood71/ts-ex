import Article from "./Article";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpaleDisplayArticle";

const article = new Article(
  "GIS 분야의 업무",
  [
    "공간 DB 구축 및 가공",
    "지도 제작 및 시각화",
    "공간 분석 및 모델링",
    "데이터 수집 및 관리",
    "GIS 소프트웨어 개발 및 유지보수",
    "교육 및 컨설팅",
  ],
  "GIS DEVELOPER"
);

const display = new SimpleDisplayArticle(article);
const contentElement = document.querySelector(".content");
if (contentElement) {
  contentElement.innerHTML = display.displayHtml();
}

document.querySelector(".edit-mode")?.addEventListener("change", (event) => {
  let display;

  if ((event.target as HTMLInputElement).checked) {
    display = new EditableDisplayArticle(article);
  } else {
    display = new SimpleDisplayArticle(article);
  }

  if (contentElement) {
    contentElement.innerHTML = display.displayHtml();
  }
});
