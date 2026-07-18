
//sum of given number ################################
console.log('_____________________sum of given number______________________');
let n = Number(prompt('Enter the number'));
let sum =0;
for(let i = 0 ; i>=n;i++){
    sum += 1
}
console.log(`The sum of ${n} numbers = ${sum}`);
console.log(`the avg i = ${sum/n}`);





//fibinosi ###########################################
console.log('___________fibinosi_________________');
let n = 10;
let first = 1;
let second = 2;
let sum = 0;
for(let i = 0 ; i <= n; i++){
    sum = first + second;
    second = first;
    first = sum;
    console.log(sum);
}





// palindrome ##########################################
console.log('______________________palindrome___________________');
let string = 'malayalam'
let checkstring = '';
console.log(string);
for(let i = string.length -1 ; i>=0 ; i--){
    checkstring += string[i];
}
console.log(checkstring);

if(checkstring == string){
    console.log(string + 'its a palindrome');
}
else{
    console.log(string +'its not a palindrome');
}


//12 factorial of a given number ###############
console.log('_____________________________factorial________________________________');
let n = 5;
let factorial = 1;
for(let i = 1;i<=n;i++){
    factorial *= i;
}
console.log(factorial);

//13 prime or not  #############################################
console.log('____________________________prime or not input=9____________________________');
let number = 9;
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
if(count>2){
    console.log('the number is not a prime');
}
else{
    console.log('the number is a prime');
}

//14 print the prime series ###########################################
console.log('_____________________________________prime number series input=100___________________________');
let n = 100;
for(let number = 1;number<= n ;number++){

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