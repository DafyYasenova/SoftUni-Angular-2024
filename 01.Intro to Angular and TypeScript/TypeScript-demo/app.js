var a = 5;
console.log(a * 2);
var text = "Hello!";
console.log(text);
var hasWords = true;
console.log(hasWords);
var numberArray = [1, 2, 3, 4, 5];
// let numberArray: Array<number> = [1,2,3,4,5];
console.log(numberArray);
numberArray.forEach(function (num) {
    console.log(num);
});
var x = 1;
x = "test";
x = { name: "Pesho" };
console.log(x);
var person = { name: "Ivo", age: 20 };
var myObject = { skinColor: 'green', legsCount: 3 };
/* valid: */
// const myObject: Dragon | Cat = {name:'green', furColor:'5'};
/* not valid -mixed props: */
// const myObject: Dragon | Cat = {name:'green', legsCount:3};
