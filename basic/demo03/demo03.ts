/**
  * 练习对象：类型推论
  */

{
	// 初始定义并赋值
	let myName1 = `Rick`;
	// 等价于
	let myName2: string = `Rick`

	// 初始仅定义
	let age1;
	// 等价于
	let age2: any;
}

/**
 * ============ 注意点 ============
 * 1.如果变量声明的时候没有指定类型，ts会根据初始化的值来推断，如果初始化时没有赋值，则推断为any;
 */
