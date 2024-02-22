const a: number = 5;
console.log(a * 2);

let text: string = "Hello!";
console.log(text);

let hasWords = true;
console.log(hasWords);

let numberArray: number[] = [1, 2, 3, 4, 5];
// let numberArray: Array<number> = [1,2,3,4,5];
console.log(numberArray);

numberArray.forEach(num => {
    console.log(num);
})


let x: unknown = 1;
x = "test";
x = { name: "Pesho" };
console.log(x);


type Person = {
    name: string;
    age: number;
}

let person: Person = { name: "Ivo", age: 20 }; 

type Cat = {
    name: string;
    furColor: string;
}

type Dragon = {
    skinColor: string;
    legsCount:number;
}

const myObject: Dragon | Cat = {skinColor:'green', legsCount:3};
/* valid: */
// const myObject: Dragon | Cat = {name:'green', furColor:'5'};

/* not valid -mixed props: */
// const myObject: Dragon | Cat = {name:'green', legsCount:3};


