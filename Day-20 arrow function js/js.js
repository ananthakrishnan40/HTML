const isEven = (n) => n%2==0 ? 'Even' : 'odd';

console.log(isEven(121));





const Series = (n) =>{
    console.log(`______________________________________________`)
    for(let i = 0 ; i<=n ; i++){
        console.log(i);
    }
}

const FiveSeries = (n) =>{
    console.log(`______________________________________________`)
    for(let i = 0;i<=n;i+=5){
        console.log(i)
    }
}

const EvenSeries = (n) =>{
    console.log(`______________________________________________`)
    for(let i = 0;i<=n;i+=2){
        console.log(i)
    }
}

const OddSeries = (n) =>{
    console.log(`______________________________________________`)
    for(let i = 1 ; i<=n;i+=2)
        console.log(i)
}

const Palindrome = (word) => {
    let check = '';
    for(let i = word.length-1;i>-1;i--){
        check+=word[i];
    }
    console.log(check);
    if(check==word){
        console.log(`${word} its a palindrome`);
    }
    else{
        console.log(`${word} its not a palindrome`)
    }
}


Palindrome(`malayalam`);

const Armstrong = (n) =>{
    let temp = n;
    let number = 0
    let sum = 0
    while(temp>0){
        number = temp%10;
        temp -= number;
        temp/= 10;
        sum+= number**3;
    }
    console.log(sum);
    if(sum == n){
        console.log(`${n} its a Armstrong`);
    }
    else{
        console.log(`${n} is not Armstring`);
    }

}

Armstrong(153);

const Factorial = (n) =>{
    let product=1;
    for(let i = 1;i<=n;i++){
        product *= i
    }
    console.log(`factorial of ${n} = ${product}`);
}

Factorial(5);

const Prime = (n)=>{
    let count = 0
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count+=1
        }
    }
    if(count>2){
        console.log(`${n} is not a Prime`)
    }
    else{

        console.log(`${n} is a Prime`)
    }
}

Prime(3);

const PrimeSeries = (n) =>{
    for(let num = 1;num<=n;num++){
        let count = 0;
        for(let i =0 ; i<= Math.sqrt(num)+1;i++){
            if(num%i==0){
                count+=1
            }
        }
        if(count>2){
            continue
        }
        else{
            console.log(num)
        }
    }
}

PrimeSeries(10000);

const FS=(n)=>{
    let first = 1;
    let second = 1;
    let sum = 0;
    console.log(`fibinacieSeries`)
    for(let i=1;i<=n;i++){
        sum = first + second;
        second = first;
        first = sum;
        console.log(sum);
    }
}
FS(10);

const mul=(n) =>{
    for(let i =1;i<=10;i++){
        console.log(`${i} x ${n} = ${i*n}`);
    }
}
mul(7);

const SumOf=(n)=>{
    let sum = 0
    for(let i=0;i<=n;i++){
        sum += i;
    }
    console.log(sum);
}

SumOf(20);