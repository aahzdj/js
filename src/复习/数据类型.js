// 数值（number）：整数和小数（比如1和3.14）。
// 字符串（string）：文本（比如Hello World）。
// 布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）。
// undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值。
// null：表示空值，即此处的值为空。
// 对象（object）：各种值组成的集合。

//获取数据类型
console.log(typeof 123)
console.log(typeof '123')
console.log(typeof false)
console.log(typeof null)
console.log(typeof undefined)

function a(){}
console.log(typeof a)

// 对于没有初始化的变量可以使用typeof检测，返回值是undefined
var b
console.log(typeof b)
//注意 null [] {}都返回的是object类型，在js中这三者都是特殊的对象


