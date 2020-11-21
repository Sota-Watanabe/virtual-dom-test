// 参考にできるコード
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

// ビューをアップデート
function update() {
  console.log('update')
  var newTree = render(counter);
  var patches = diff(newTree, newTree);
  // console.log('patches', patches)
  // console.log('patches', JSON.stringify(patches))
  patch(node, patches);
  tree = newTree;
}

// 仮想DOMを生成（レンダリング）
function render(counter) {
  console.log('rendering')
  return h('div', [
    h('p', String(counter.value)),
    h('button', { onclick: function () { counter.increment(); } }, 'Increment')
  ]);
}

var counter = {
  value: 0,
  increment: function () {
    this.value += 1;
    update();
  }
};

var tree = render(counter);
// console.log('first-tree', tree)

var node = createElement(tree);
document.body.appendChild(node);