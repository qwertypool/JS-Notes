// normalFunc();
// console.log(normalFunc);
// arrowFunc();
// console.log(arrowFunc);
// function normalFunc(){
// 	console.log("Normal Function")
// }
// var arrowFunc = () => {
// 	console.log("Arrow Function")
// }


// console.log(arrowFunc);
// var arrowFunc = () => {
// 	console.log("Arrow Function")
// }
// console.log(arrowFunc());


//global scope / window / this
// var a = 5;  //inside global space
// function b (){
//   var x = 10; //not in global space
// }
// console.log(window.a);
// console.log(a);
// console.log(this.a);
// console.log(x);

// //loosely typedd language:
// var a;
// console.log(a);
// a = 10;
// console.log(a);
// a = "deepa"
// console.log(a);


//Lexical scope / scope chain
// function a(){
// 	var b = 10;
// 	c();
// 	function c(){
// 		console.log(b)
// 	}
// }
// a();

//SetTimeout examples:
function x(){
	for(var i = 1;i<=5;i++){ //It is happening bcz of closure which retains the value of it's lexical environment
		//we've used var so will point to the same reference of i each time & return the modified 
		//value of i which will be 6 after iteration completes. 
	setTimeout(
	function(){
		console.log(i);
	},i*1000);
}
console.log("Hello guys!") //will execute first,while settimeout is running in BG
}
x();