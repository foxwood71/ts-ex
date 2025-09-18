// Proxy의 뜻은 "대리인"
// - 어떤 작업의 실행을 대리인을 통해 실행하도록 하는 패턴
//
// [정리]
// - Proxy 패턴의 종류에는 가상 Proxy, 원격 Proxy, 보호 Proxy등이 있음.
// - 가상 Proxy는 필요한 시점까지 객체의 생성을 연기하고 마치 생성된 것 처럼 동작하다가 필요한 시점에 실제 객체를 생성해서 사용함
// - Proxy 패턴은 실제 기능 실행을 대리인(Proxy)을 통해 실행하도록 하는 것이 근복적인 목적임

//import RealImage from "./RealImage";
import ProxyImage from "./ProxyImage";

const items = [
  [
    "설산야경",
    "https://cdn.bhdw.net/im/snow-mountain-night-wallpaper-81305_w635.webp",
  ],
  [
    "외로운늑대",
    "https://cdn.bhdw.net/im/fantasy-world-wallpaper-29897_w635.webp",
  ],
  [
    "강변황혼",
    "https://cdn.bhdw.net/im/sunset-minimalist-wallpaper-81072_w635.webp",
  ],
  [
    "일출",
    "https://cdn.bhdw.net/im/sunset-scenery-minimalist-wallpaper-81379_w635.webp",
  ],
  [
    "지구탈출",
    "https://cdn.bhdw.net/im/mountain-scenery-art-wallpaper-81095_w635.webp",
  ],
  [
    "고양이",
    "https://wallpapers.com/images/hd/cute-praying-animal-kitten-fhuzpz6q5d3l5qpw.webp",
  ],
  [
    "사마귀",
    "https://wallpapers.com/images/high/sparkling-brown-praying-mantis-brhsitcpcco26pcl.webp",
  ],
  [
    "앵무새",
    "https://wallpapers.com/images/high/golden-conure-parrots-bifvcsdpuwm1gxlf.webp",
  ],
  [
    "비둘기",
    "https://wallpapers.com/images/high/flying-homing-pigeon-low-angle-shot-bliq95v02wjt2d7b.webp",
  ],
  [
    "벌",
    "https://wallpapers.com/images/high/bee-desktop-wallpaper-c0hpghgtppnmux5f.webp",
  ],
  [
    "닭",
    "https://wallpapers.com/images/high/rooster-tied-in-rock-9x6089a6edflz844.webp",
  ],
  [
    "도마뱀",
    "https://wallpapers.com/images/high/green-gecko-reptile-atv6058gd3fj8ors.webp",
  ],
  [
    "노란앵무새",
    "https://wallpapers.com/images/high/two-conure-parrots-with-blurry-backdrop-elrhq1l9840e79xd.webp",
  ],
  [
    "하얀비둘기",
    "https://wallpapers.com/images/high/elegant-white-indian-fantail-pigeons-cxlk42hr0htvks8p.webp",
  ],
  [
    "부엉이",
    "https://wallpapers.com/images/high/little-owlet-animal-lg0huhcfvtwb6kci.webp",
  ],
  [
    "무지개비둘기",
    "https://wallpapers.com/images/high/colorful-homing-pigeon-birds-macro-shot-64tnhxlh4t361yxq.webp",
  ],
  [
    "뱀",
    "https://wallpapers.com/images/high/cobra-close-up-hissing-tongue-4l5lbdbi3rblrsjj.webp",
  ],
];

const domList = document.querySelector(".list");

items.forEach((item) => {
  const title = item[0] as string;
  const url = item[1] as string;
  if (!domList) return;
  // const img = new RealImage(title, url, domList);
  const img = new ProxyImage(title, url, domList);
  img.append();
});
