```json
{
  "0": { // 差分がある VNode その1
    "type": 4, // 4->PROPS要素の変更
    "vNode": {
      "tagName": "DIV",
      "properties": {
        "style": {
          "textAlign": "center",
          "lineHeight": "100px",
          "border": "1px solid red",
          "width": "100px",
          "height": "100px"
        }
      },
      "children": [{ "text": "0" }],
      "namespace": null,
      "count": 1, // 子孫ノードの数
      "hasWidgets": false,
      "hasThunks": false,
      "descendantHooks": false
    },
    "patch": { // 差分の詳細
      "style": {
        "lineHeight": "101px",
        "width": "101px",
        "height": "101px"
      }
    }
  },
  "1": { // 差分がある VNode その2
    "type": 1, // 1 -> VTEXT要素の変更
    "vNode": { "text": "0" },
    "patch": { "text": "1" }　// 差分の詳細
  },
  "a": { //比較するベース
    "tagName": "DIV",
    "properties": {
      "style": {
        "textAlign": "center",
        "lineHeight": "100px",
        "border": "1px solid red",
        "width": "100px",
        "height": "100px"
      }
    },
    "children": [{ "text": "0" }],
    "namespace": null,
    "count": 1,
    "hasWidgets": false,
    "hasThunks": false,
    "descendantHooks": false
  }
}
```