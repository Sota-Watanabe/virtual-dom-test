var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

function render(count) {
  // VNodeを返す
  // h('タグ.クラス名', 'プロパティ', '中身') →1要素
  return h('div', {
    style: {
      textAlign: 'center',
      lineHeight: (100 + count) + 'px',
      border: '1px solid red',
      width: (100 + count) + 'px',
      height: (100 + count) + 'px'
    }
  }, [String(count)]);
}


var count = 0;
var tree = render(count); // countに合わせたVNode作成
var rootNode = createElement(tree); // VNodeからルートDOMの実体(実HTML)を生成
document.body.appendChild(rootNode);

  setInterval(function () {
    console.log('setInterval')
    count++;
    var newTree = render(count); // countに合わせたVNode作成
    var patches = diff(tree, newTree); // 直前のVNodeと比較

    // console.log('tree', JSON.stringify(tree)) // 追加
    // console.log('newTree', JSON.stringify(newTree)) // 追加
    // console.log('patches', JSON.stringify(patches)) // 追加

    patch(rootNode, patches); //実DOMを更新
    // rootNode = patch(rootNode, patches);
    tree = newTree;
  }, 1000);
