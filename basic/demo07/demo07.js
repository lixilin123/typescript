/**
  * 练习对象：函数的类型
  */
{
    // 函数声明
    function count1(m, n) {
        return m + n;
    }
    // 函数表达式
    var count2 = function (m, n) {
        return m + n;
    };
    var count3 = function (m, n) {
        return m + n;
    };
    // 默认参数、可选参数
    var count4 = function (m, n) {
        if (m === void 0) { m = 1; }
        return m + n;
    };
    // 剩余参数
    var count5 = function (m) {
        var item = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            item[_i - 1] = arguments[_i];
        }
        return m;
    };
    function reverse(x) {
        if (typeof x == "number") {
            return Number(x.toString().split("").reverse().join(""));
        }
        else if (typeof x == "string") {
            return x.split("").reverse().join("");
        }
    }
}
/**
 * ============ 注意点 ============
 * 1.可选参数和剩余参数要写到最后；
 */
