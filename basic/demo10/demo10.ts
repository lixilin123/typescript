/**
  * 练习对象：内置对象
  * 简介：JS中有很多内置对象，他们可以直接再TS中当做定义好了的类型；
  */

{
	// ECMAScript 标准提供的内置对象有：Boolean、Error、Date、RegExp 等；
	let b: Boolean = new Boolean(1);
	let e: Error = new Error('Error occurrend');
	let d: Date = new Date();
	let r: RegExp = /[a-z]/;

	// DOM和BOM提供的内置对象有：Document、HTMLElement、Event、NodeList 等；
	let body: HTMLElement = document.body;
	let allDiv: NodeList = document.querySelectorAll('div');
	document.addEventListener('click', function(e: MouseEvent){
		// do something...
	})

	// 更多内置对象，转置MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects
	
}
