1. new 操作符后跟 Object 构造函数
var person = new Object();
person.age = 29;

2. 对象字面量
var person = {
    age: 29
}

3. 数组方法
push() 向数组末端添加项并返回数组的长 度
join() 接收一个参数作为分隔符， 并返回所包含数组项的字符串
pop() 移除数组的最后一项并返回该项
shift() 移除数组的 第 一项并返回该项
unshift() 在数组前端添加任意项并返回新数组长度

数组排序
reverse() 反转数组排序顺序
sort() 升序排序(只会比较第一项)

concat() 基于当前数组中的所有项创建一个新数组
clice(1, 3) 去掉原数组的1, 4 位置的项组成新的数组

splice(起始位置, 要删除项数) 删除： splice(0, 2) 删除数组前两项
splice(起始位置, 要删除项数, 要插入的项) 插入： splice(2, 0, 'red', 'green')
splice(起始位置, 要删除项数, 要插入的任意数量项)
替换： 删除项与插入项相等

第四章 变量、 作用域和内存问题

变量类型： 基本类型 和 引用类型；
基本类型： 简单的数据段； Undefined、 Null、 Boolean、 Number 和 String
引用类型： 由多个值构成的对象： 对象、 数组；

传递参数： 所有函数的参数都是按值传递的。

BOM

window对象
全局变量不能通过delete操作符删除，
而直接在window对象上的定义属性可以删除。

窗口位置: 窗口相对于屏幕左边和上边的距离
IE safari opera chrome screenLeft和screenTop
Firefox screenX 和 screenY

var leftPos = (typeof window.screenLeft == "number") ?
    window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ?
    window.screenTop : window.screenY;

在 IE、 Opera 中， screenLeft 和 screenTop 中保存的是
从屏幕左边和上边到由 window 对象表示的页面可见区域的距离。

在 Chrome、 Firefox和 Safari中， screenY 或 screenTop
中保存的是整个浏览器窗口相对于屏幕的坐标值

//将窗口移动到屏幕左上角 禁用
window.moveTo(0, 0);
//将窗向下移动 100 像素
window.moveBy(0, 100);

窗口大小
window.outWidth 浏览器宽度
window.outHeight 浏览器高度

window.innerWidth 视口宽度
window.innerHeight 视口高度

在 IE、 Firefox、 Safari、 Opera 和 Chrome 中，
document.documentElement.clientWidth 和
document.documentElement.clientHeight 中
保存了页面视口的信息。

//调整到 100×100 禁用
window.resizeTo(100, 100);
//调整到 200×150
window.resizeBy(100, 50);

定时器
setTimeout() //延时执行 

clearTimeout(timeoutId);

setInterval() //多长时间执行一次重复

location.reload(); //重新加载（有可能从缓存中加载）
location.reload(true); //重新加载（从服务器重新加载）


第6章面对对象
1 创建对象：
考虑到在 ECMAScript 中无法创建类，
开发人员就发明了一种函数，
用函数来封装以特定接口创建对象的细节

1.1 工厂模式

function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        alert(this.name);
    };
    return o;
}
var person1 = createPerson("Nicholas", 29, "Software Engineer");

1.2 构造函数模式
构造函数： 用来创建对象的函数叫构造函数，
函数名首字母用大小区分；
任何函数， 只要通过 new 操作符来调用，
那它就可以作为构造函数；
而任何函数， 如果不通过 new 操作符来调用
那它跟普通函数也不会有什么两样

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        alert(this.name);
    };
}
var person2 = new Person("Greg", 27, "Doctor");

1.3 原型模式
当为对象实例添加一个属性时，
这个属性就会屏蔽原型对象中保存的同名属性

1.4 组合模式： 原型模式和构造函数模式组合

1.5 动态原型模式

1.6 寄生构造函数模式

1.7 稳妥构造函数模式


面对对象

理解对象：
创建对象：
Object构造函数语法：
1: var person = new Object();
2: person.name = 'Nicholas';
person.sayName = function() {
    console.log(this.name);
}

对象字面量语法：
var person = {
        name: 'Nicholas';
        sayName: function() {
            console.log(this.name);
        }

        DOM
        文档元素： 文档最外层元素,
        只有一个；

        DOM1定义了一个Node接口， 该接口将由DOM中的所有节点类型实现；
        js中所有节点类型都继承自Node类型;nodeType属性
        节点：
        var Node = { //12个node节点
            元素节点
            特性节点
            文档类型节点
            注释节点
            ...
            ...
            共12种节点类型
        }
        节点类型：
        var nodeType = { //12个node节点对应的节点类型
            Node.ELEMENT_NODE(1) element元素 Node.ATTRIBUTE_NODE(2) attribute属性 Node.TEXT_NODE(3) text文本 Node.CDATA_SECTION_NODE(4) cdata_section_node Node.ENTITY_REFERENCE_NODE(5) entity_reference_node Node.ENTITY_NODE(6) entity_node Node.PROCESSING_INSTRUCTION_NODE(7) processing_instruction_node Node.COMMENT_NODE(8) comment_node Node.DOCUMENT_NODE(9) document_node Node.DOCUMENT_TYPE_NODE(10) document_type_node Node.DOCUMENT_FRAGMENT_NODE(11) document_fragment_node Node.NOTATION_NODE(12) notation_node
        }
        节点具体信息: 获取nodeName 和 nodeValue
        if (someNode.nodeType == 1) { // 适用于所有浏览器
            alert("Node is an element.");
        }

        if (someNode.nodeType == 1) {
            value = someNode.nodeName; //nodeName 的值是元素的标签名
        }

        nodeName 中保存的始终都是元素的标签名， 而 nodeValue 的值则始终为 null。

        var firstChild = someNode.childNodes[0]; //没有浏览器支持
        var secondChild = someNode.childNodes.item(1); //此写法兼容
        var count = someNode.childNodes.length;


        离线应用与客户端储存

        1.1 离线检测 navigator.onLine
        1.2 应用缓存 applicationCache.status
        1.3 数据存储 {
            1.3 .1 Cookie{
            	创建cookie：document.cookie = "username = John";
            	cookie过期时间： 默认情况下，cookie在浏览器关闭时删除；
            	document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT";
            	读取Cookie： var x = document.cookie;
            }
            1.3 .2 IE用户数据
            1.3 .3 Web存储机制 {
                1. Storage类型 {
                    setItem(name, value)
                    getItem(name)
                    removeItem(name)
                }
                2. sessionStorage 对象 {
                    //使用方法存储数据
                    sessionStorage.setItem("name", "Nicholas");
                    //使用属性存储数据
                    sessionStorage.book = "Professional JavaScript";
                }
                3. globalStorage 对象 {
                    //保存数据
                    globalStorage["wrox.com"].name = "Nicholas";
                    //获取数据
                    var name = globalStorage["wrox.com"].name;
                }
                4. localStorage 对象 {
                    //使用方法存储数据
                    localStorage.setItem("name", "Nicholas");
                    //使用属性存储数据
                    localStorage.book = "Professional JavaScript";
                    //使用方法读取数据
                    var name = localStorage.getItem("name");
                    //使用属性读取数据
                    var book = localStorage.book;
                }
            }
        }