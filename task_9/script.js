function add(num1,num2){
let s = num1+num2;
return s;
}
function substract(num1,num2){
    let s = num1-num2;
    return s;
}
function multiply(num1,num2){
  let s = num1*num2;
  return s;
}
function devide(num1,num2){
    if(num2==0){
    return("Invalid division");
    }
    else{
        let s = num1/num2;
        return s;
    }
}
function myCalculate(num1,op,num2){
    switch(op){
        case '+':
            return add(num1,num2);break;
        case '-':
        return substract(num1,num2);break;
        case '*':
         return multiply(num1,num2);break;
        case '/':
        return devide(num1,num2);break;
        default:
        return("invalid")           
    }
}
console.log(myCalculate(10,'+',5));
console.log(myCalculate(10,'*',5));
console.log(myCalculate(10,'/',5));
console.log(myCalculate(10,'-',5));