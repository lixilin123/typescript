/**
  * 练习对象：原始数据类型
  */
{
    // 布尔值
    var bln1 = true;
    var bln2 = Boolean(1);
    // 数值
    var num = 666;
    // 字符串
    var str = "test string";
    var myName = "Rick";
    var age = 25;
    var sentence = "My name is " + myName + ", and I am " + age;
    // null
    var n = null;
    // undefined
    var u = undefined;
    // 空值
    var v1 = null;
    var v2 = undefined;
    var fn = function () {
        alert("I am a void function!");
    };
}
/**
 * ============ 注意点 ============
 * 1.void与null、undefined的区别是：null、undefined是所有类型的子类型，也就是说undefined类型的变量可以赋值给number类型的变量;
 */
