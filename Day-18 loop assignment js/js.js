
//sum of given number ################################
console.log('_____________________sum of given number______________________');
let n1 = 10;
let sum1 =0;
for(let i = 0 ; i<=n1;i++){
    sum1 += i;
}
console.log(`The sum1 of ${n1} numbers = ${sum1}`);
console.log(`the avg i = ${sum1/n1}`);





//fibinosi ###########################################
console.log('___________fibinosi_________________');
let n2 = 10;
let first = 1;
let second = 2;
let sum2 = 0;
for(let i = 0 ; i <= n2; i++){
    sum2 = first + second;
    second = first;
    first = sum2;
    console.log(sum2);
}





// palindrome ##########################################
console.log('______________________palindrome___________________');
let string5 = 'malayalam'
let checkstring5 = '';
console.log(string5);
for(let i = string5.length -1 ; i>=0 ; i--){
    checkstring5 += string5[i];
}

if(checkstring5 == string5){
    console.log(string5 + 'its a palindrome');
}
else{
    console.log(string5 +'its not a palindrome');
}


//12 factorial of a given number ###############
console.log('_____________________________factorial________________________________');
let n6 = 5;
let factorial = 1;
for(let i = 1;i<=n6;i++){
    factorial *= i;
}
console.log(factorial);

//13 prime or not  #############################################
console.log('____________________________prime or not input=9____________________________');
let number6 = 9;
let count =0;
for(let i= 1 ; i<=number6 ; i++){
    if(number6%i==0){
        count+=1;
        continue;
    }
    if(count > 2){
        break;
    }
}
if(count>2){
    console.log('the number is not a prime');
}
else{
    console.log('the number is a prime');
}

//14 print the prime series ###########################################
console.log('_____________________________________prime number series input=100___________________________');
let n7 = 100;
for(let number = 1;number<= n7 ;number++){

    let count =0;
    for(let i= 1 ; i<=number ; i++){
        if(number%i==0){
            count+=1;
            continue;
        }
        if(count > 2){
            break;
        }
    }
    if(count<=2){
        console.log(number);
    }

}

console.log('_____________________table of 5______________________');
for(let i = 0; i<=10;i++){
    console.log(i*5);
}