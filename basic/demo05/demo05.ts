/**
  * 练习对象：对象的类型 —— 接口
  */

{
	// 简单例子(确定属性)
	interface Person1 {
		name: string;
		age: number;
	}
	let person1: Person1 = {
		name: `Rick`,
		age: 25
	}

	// 可选属性
	interface Person2 {
		name: string;
		age?: number;
	}
	let person2: Person2 = {
		name: `Rick`
	}

	// 任意属性
	interface Person3 {
		name: string;
		age: number;
		[propName: string]: any;
	}
	let person3: Person3 = {
		name: `Rick`,
		age: 25,
		intrest: `eat`
	}

	// 只读属性
	interface Person4 {
		readonly id: number;
		name: string;
		age: number;
	}
	let person4: Person4 = {
		id: 1,
		name: `Rick`,
		age: 25
	}
}

/**
 * ============ 注意点 ============
 * 1.一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性；
 * 2.只读属性的约束在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候；
 */
