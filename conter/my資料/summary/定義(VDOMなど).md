### 描画後

<div style="text-align: center; line-height: 106px; border: 1px solid red; width: 106px; height: 106px;">6</div>

### 実 DOM

```html
<div
  style="
    text-align: center;
    line-height: 106px;
    border: 1px solid red;
    width: 106px;
    height: 106px;
  "
>
  6
</div>
```

### VDOM

```json
{
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
```

### VNode

VDOM の一部。tree とも言う

```json
{
  "children": [{ "text": "0" }]
}
```
