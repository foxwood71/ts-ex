// Composite Design Pattern 단일체(ex 파일)와 집합체(ex 폴더)를 동일한 개념으로 처리하게 위함
// [정리]
//  - Composite 패턴은 집합체와 집합체를 구성하는 항목인 단일체를 같은 개념으로 처리합니다.
//  - 다양한 형태의 단일체를 조합한 집합체를 또 다른 단일체로 정의할 수 있고 이를 단일체나
//    집합체라는 구분없이 같은 개념으로 처리할 수 있습니다.
//
import File from "./File";
import Folder from "./Folder";

const root = new Folder("root");
root.add(new File("a.txt", 1000));
root.add(new File("b.txt", 2000));

const sub1 = new Folder("sub1");
root.add(sub1);
sub1.add(new File("sa.txt", 100));
sub1.add(new File("sb.txt", 4000));

const subSub = new Folder("sub3");
sub1.add(subSub);
subSub.add(new File("subSub_a.txt", 2250));
subSub.add(new File("subSub_b.txt", 5340));

const sub2 = new Folder("sub2");
root.add(sub2);
sub2.add(new File("sa2.txt", 250));
sub2.add(new File("sb2.txt", 340));

const dom = document.querySelector("#list");
if (dom !== null) root.list(dom);
