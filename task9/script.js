function add( a , b){
    return a+b;

}
function substract(a, b){
    return b-a;
}
function multiply( a , b){
    return a*b;
}

function divide(a, b){
    if(b==0) return console.log("Error");
    return a/b;
}

function myCalculator(opeartion, num1, num2){
    if(opeartion=="add") return add(num1, num2);
    else if(opeartion=="substract") return substract(num1, num2);
    else if(opeartion=="multiply") return multiply(num1,num2);
    else if(opeartion=="divide") return divide(num1,num2);
}


console.log(myCalculator("divide", 12,3));
console.log(myCalculator("add", 17,106));

console.log(myCalculator("substract", 155,205));

console.log(myCalculator("multiply", 17,106));