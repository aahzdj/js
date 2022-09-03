//在if语句中，undefined和null都会被转换为false
if(!undefined){
    console.log("undefined")
}
if(!null){
    console.log("null")
}
//null表示的是空对象，转为数值是为0，undefined表示无定义，转为数值是为NaN
console.log(Number(undefined))
console.log(Number(null))

//js会在需要布尔数值的地方将非boo转换为bool，以下六个值被转换为false其他为true
// undefined
// null
// false
// 0
// NaN
// ""
// ''


// 空数组[]和空对象{}都会转换为布尔值true
