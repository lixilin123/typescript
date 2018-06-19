/**
  * 练习对象：内置对象
  * 简介：JS中有很多内置对象，他们可以直接再TS中当做定义好了的类型；
  */
{
    // ECMAScript 标准提供的内置对象有：Boolean、Error、Date、RegExp 等；
    var b = new Boolean(1);
    var e = new Error('Error occurrend');
    var d = new Date();
    var r = /[a-z]/;
    // DOM和BOM提供的内置对象有：Document、HTMLElement、Event、NodeList 等；
    var body = document.body;
    var allDiv = document.querySelectorAll('div');
    document.addEventListener('click', function (e) {
        // do something...
    });
    // 更多内置对象，转置MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects
}
