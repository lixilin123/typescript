/**
  * 练习对象：数组的类型
  */

{
	// 表示法1: 类型+方括号
	let arr1: number[] = [1,2,3];
	let arr2: (number | string)[] = [1,2,`3`];
	let arr3: any[] = [1,2,true]

	// 表示法2：数组泛型
	let arr4: Array<number> = [1,2,3];

	// 表示法3：用接口表示数组
	interface NumberArray {
		[propName: number]: number;
	}
	let arr5: NumberArray = [1,2,3]
}

/**
 * ============ 注意点 ============
 * 1.类数组都有自己的接口定义，如类数组arguments的接口定义是IArguments;
 */
