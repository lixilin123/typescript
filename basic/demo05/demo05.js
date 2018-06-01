/**
  * 练习对象：对象的类型 —— 接口
  */
{
    var person1 = {
        name: "Rick",
        age: 25
    };
    var person2 = {
        name: "Rick"
    };
    var person3 = {
        name: "Rick",
        age: 25,
        intrest: "eat"
    };
    var person4 = {
        id: 1,
        name: "Rick",
        age: 25
    };
}
/**
 * ============ 注意点 ============
 * 1.一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性；
 * 2.只读属性的约束在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候；
 */
