import { cube } from "./math.js";

function component() {
  var element = document.createElement("pre");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );
  // 注意，我们并未从 src/math.js 模块中 import 导入 square 方法。这个功能是所谓的“未引用代码(dead code)”，也就是说，应该删除掉未被引用的 export。
  return element;
}

document.body.appendChild(component());
