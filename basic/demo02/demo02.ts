/**
  * 练习对象：任意值
  */

{
	let myName: any;

	myName = `Rick`;
	myName = 25;
	myName = true;
	myName = null;
	myName = undefined;
}

/**
 * ============ 注意点 ============
 * 1.变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型;
 * 2.声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值；
 */
