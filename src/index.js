import _ from 'lodash';
import "./style/index.css"
import "./font/iconfont.css"
import print from "./js/print.js"
import {square} from "./js/math.js"

  function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    print()

    return element;
  }

  console.log(square(5))
  document.body.appendChild(component());
  if (module.hot) {
    module.hot.accept('./js/print.js', function() {
      // console.log('热模块替换刷新');
      // print();
    })
  }