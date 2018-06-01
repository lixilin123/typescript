/**
  * 练习对象：原始数据类型
  */

{
	// 布尔值
	let bln1: boolean = true;
	let bln2: boolean = Boolean(1);

	// 数值
	let num: number = 666;

	// 字符串
	let str: string = `test string`;

	let myName: string = `Rick`;
	let age: number = 25;
	let sentence: string = `My name is ${myName}, and I am ${age}`;

	// null
	let n: null = null;

	// undefined
	let u: undefined = undefined;

	// 空值
	let v1: void = null;
	let v2: void = undefined;
	let fn: () => void = (): void => {
		alert(`I am a void function!`)
	}
}

/**
 * ============ 注意点 ============
 * 1.void与null、undefined的区别是：null、undefined是所有类型的子类型，也就是说undefined类型的变量可以赋值给number类型的变量;
 */
