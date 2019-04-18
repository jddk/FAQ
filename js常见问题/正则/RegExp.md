# js正则

## 1、serch

```javascript
let str = '0123456';
console.log(str.search('u'));  //-1    不存在的都会是-1
console.log(str.search('2'));  //2     返回第一个匹配到的索引
```
## 2、substr和substring
```javascript
let str = '0123456'
console.log(str.substring(3,4))  //3 从第几位到第几位（不包括结束位置）
console.log(str.substr(3,4)) //3456  从第几位开始，往后数几位

```
## charAt
```javascript 
console.log(str.charAt(2))//2获取第几位
```
## split
```javascript
var str = '12-56-aaa-89';
console.log(str.split('-'))   //['12','56','aaa','89'] 字符串转数组

```

## search
```javascript
let str = 'efeer3'
let reg = /e/i  //i忽略大小写
console.log(str.search(reg));//0
//返回第一个找到的索引
```
## match
```javascript
// 把匹配到的东西提取出来
let str = 'aa33bb2'
let reg = /\d+/g;//['33','2']
let reg1 = /\d/ //["3", "3", "2"]
```
## replace 替换
```javascript
let str = 'aaadff dfd'
let reg = /aa/g
let fn = str.replace(reg,'0')//0adff dfd
```
## test()
```javascript
var re = /^([a-z0-9])+@([a-z0-9])+\.([a-z0-9])+$/i;
if(re.test(val)){
    console.log('正确')
}else{
    console.log('错误')
}
```

# 特殊字符
## i 和 g
```javascript
let reg = /fefeADDD/i //忽略大小写
let reg2 = /fefeADD/g //应用于所有字符，而非发现第一个匹配字符立即停止
```
## \ 和 \d 和 +
```javascript
// \表示转义 
// \d表示数字
//+ 表示若干
let reg1 = /\d+/ 
```

## [ ]
```javascript
// []里面任意字符都可以
// [a-z]	a到z
// [0-9]	0到9
// [^a-z]   除了a-z
let str = 'apc xpc ppc bpc spc tpc';
let reg = /[apx]pc/g;
console.log(str.match(re));
//['apc','xpc','ppc'];

```

## | 符号
```javascript
let str = '北京爱情故事啊啊啊啊大淘宝';
 var reg = /北京|百度|淘宝/g;
 console.log(str.replace(reg,'***'));
 //***爱情故事啊啊啊啊大***

```
## . 点
```javascript
//表示任意字符
```
### \w \s \d
```javascript 
// \d 	数字  	[0-9]
// \w  英文、数字、下划线  [a-z0-9]
// \s  空白字符
```
### \D \W \S
```javascript 
// \D 	除了数字  	[^0-9]
// \w  除了英文、数字、下划线  [a-z0-9]
// \S  空白字符
```

### { }
```javascript
// {n}  正好出现n次
// {n,m}	最少n次，最多m次
// {n,}		最少n次，最多不限
// +号等价于	{1,}
// \d{8}
// \[1-9]\d{7}\		第一位是1-9后面七位是[0-9]的数字
```