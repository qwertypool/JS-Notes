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
// function x(){
// 	for(var i = 1;i<=5;i++){ 
// 		//It is happening bcz of closure which retains the value of it's lexical environment
// 		// we've used var so when the loop runs first time it will make a copy of this func, attach a timer and point to the reference of i
// 		//the 5 copies of this func will point to the same ref
// 		// & will finally return the modified copy
// 		//js will run in the bg & till then the value will be 6 which it will print 
// 	setTimeout(
// 	function(){
// 		console.log(i);
// 	},i*1000);
// }
// }
//x();

// function y(){
// 	for(let i = 1;i<=5;i++){ 
// 	setTimeout(
// 	function(){
// 		console.log(i);
// 	},i*1000);
// }
// }
// y();

var x = function (param){
  return function (){
	console.log(param);
    console.log("I am anonymous function assigned to x");
  }
}
var y = function deepa (param){
  return function deepak(){
	console.log(param);
	console.log(param());
    console.log("I am anonymous function assigned to y");
  }
}
function xyz(){
  console.log("I am from function xyz");
}
x(xyz)();
x(xyz())();
y(xyz)();


