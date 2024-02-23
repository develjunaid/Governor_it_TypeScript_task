// 24-More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests.
//  Have at least one True and one False result for each of the following:


let a='hello'
let b = 'Hello'


//Tests for equality and inequality with strings

console.log("Step 1")

console.log("a ==b?|False")
console.log(a==b)

//• Tests using the lower case function

console.log("Step 2")

console.log(a==a.toLocaleLowerCase());  //return true

//Numerical tests involving equality and inequality, 
//greater than and less than, greater than or equal to, and less than or equal to

console.log("Step 3")

let c =3;
let d=4;
console.log(c>d) //return false
console.log(c<d)  //return true
console.log(c==d)  //return false
console.log(c>=d) //return false
console.log(c>=d) //return false

//Tests using "and" and "or" operators
console.log("step 4")

let num1 =3;
let num2 =4;
console.log(num1==num2 || num2==4)
console.log(num1==num2 && num2==4)

//Test whether an item is in a array
console.log("step 5")
let arr=[3,5,6,7,8,9];


for (let i = 0; i < arr.length; i++) {
    if(arr[i]=3){
        console.log("3 is in the array at index "+i);
        break;
       
    }
}
//• Test whether an item is not in a array
let count =0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==4){
        count++
    }
}
if(count==0){
    console.log("10 is not in the array ");
}
