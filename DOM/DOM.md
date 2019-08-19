# node节点
## nodeType
Node类型
- 元素节点：1
- 属性节点：2
- 文本节点：3
- 注释：8
```html
<!-- p,div,span,a标签都是元素节点 -->
<p>p标签</p>
<!-- p标签里面的内容是文本节点 -->
<!-- 空行也是文本节点 -->
```
## nodeName 和 nodeValue
> 元素节点的`nodeName`始终是标签名（如div的是`DIV`），`nodeValue`始终是null

> 文本节点：nodeName是`#text`，nodeValue是内容

> 注释：nodeName是'#comment',nodeValue是注释的内容
## childNodes
值是一种类数组对象
```
node.childNodes
```
## parentNode
父节点
## previousSibling
当前节点的上一个同胞节点，没有为null
## nextSibling
当前节点的下一个同胞节点,没有为null
## firstChild和lastChild
第一个子节点和最后一个子节点

## appendChild()
添加节点后返回新的节点
```javascript
let nodes = someNode.appendChild(newNode)
```
## insertBefore(要插入的节点,参考节点)
可以在指定节点前插入,
`insertBefore(要插入的节点,参考节点)`
```
someNode.insertBefore(newNodes, someNode.firstChild)
```
## replaceChild()
replaceChild(要插入的节点, 要替换的节点)
## removeChild()
removeChild(要替换的节点)
## cloneNode()
cloneNode(true)深克隆，会复制当前节点所有的节点，
cloneNode(false)浅克隆，只会复制当前节点

# 事件
## addEventListener
> 用法
```
let node = Element||Document||Window
let type = eventName
let parameter = {
  once: true //只触发一次
}
node.addEventListener(type,e => {
  //do something ...
},parameter)
```
- click
- keydown 键盘按下时触发
- keyup 按键被释放时触发（一般用keyup因为中间可能按下长时间未松开）