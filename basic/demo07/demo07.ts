/**
  * 练习对象：函数的类型
  */

{
	// 函数声明
	function count1(m: number, n: number): number {
		return m + n;
	}

	// 函数表达式
	let count2: (m: number, n: number) => number = (m: number, n: number): number => {
		return m + n;
	}

	// 接口
	interface count {
		(m: number, n: number): number;
	}
	let count3: count = (m: number, n: number) => {
		return m + n;
	}

	// 默认参数、可选参数
	let count4: (m: number, n: number) => number = (m: number = 1, n?: number) => {
		return m + n;
	} 

	// 剩余参数
	let count5: (m: number, ...item: any[]) => number = (m: number, ...item: any[]) => {
		return m;
	}

	// 重载
	function reverse(x: number): number;
	function reverse(x: string): string;
	function reverse(x: number | string): number | string {
		if (typeof x == `number`) {
			return Number(x.toString().split(``).reverse().join(``));
		} else if (typeof x == `string`) {
			return x.split(``).reverse().join(``);
		}
	}
	
}

/**
 * ============ 注意点 ============
 * 1.可选参数和剩余参数要写到最后；
 */
