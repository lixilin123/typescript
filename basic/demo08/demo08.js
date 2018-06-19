/**
  * 练习对象：类型断言
  * 简介：类型断言用来手动将一个联合类型的变量指定为一个更加具体的类型；
  */
{
    function getLength(something) {
        if (something.length) {
            return something.length;
        }
        else {
            return something.toString().length;
        }
    }
}
