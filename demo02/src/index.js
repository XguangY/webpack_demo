// 插件式引入lodash
import _ from "lodash";
// 引入CSS
import "./style.css";
// 引入图片
import img from "./img.png";
// 引入文件
import Data from "./data.xml"

function component() {
  var element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "css3"], " ");
  element.classList.add("hello");
  // 将图片注入现有dev
  const Png = new Image();
  Png.src = img;
  element.appendChild(Png);
  console.log('Data==', Data)
  return element;
}

document.body.appendChild(component());
