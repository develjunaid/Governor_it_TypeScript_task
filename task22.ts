//22-Intentional Error: If you haven’t received an array index error in one of your
// programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.

//from task21
let countries=["america","india","pakistan","china","africa"];
console.log("List of countries are :");
for(let i =0;i<countries.length+1;i++){   //yaha loop 5 tk chlyga 5 m kch nh h tu undefine show kryga
    console.log(countries[i]);  
}
