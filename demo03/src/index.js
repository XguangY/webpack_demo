// 插件式引入lodash
import _ from "lodash";
import printMe from './print'

function component() {
  var element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack666666"], " ");
  return element;
}

document.body.appendChild(component());

printMe()