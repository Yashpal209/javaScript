//type conversion and type coercion
console.log('tute5')

let myVar;
myVar = String(45);
console.log(myVar,(typeof myVar));

let date =new Date();
console.log(date);
console.log(date,(typeof date));


let date2 =String(new Date());
console.log(date2,(typeof date2));

let arr =String([1,2,3,4,5,6])
console.log(arr.length,(typeof arr));

let i =6;
console.log(i.toString());

let stri=Number("233243");
stri=Number("yash");
console.log(stri, (typeof stri));

let number = 332.232;
console.log(number,(typeof number));
console.log(number.toFixed(1),(typeof number));  //decimal ked baaD kitna no dekhna chtey h


//type coersion
let myst='234';
let num=34;
console.log(myst+num);

// this

let myst1=Number('234');
let num1=34;
console.log(myst1+num1);