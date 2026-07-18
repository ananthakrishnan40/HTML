console.log('________________==________________');
let a1 = 10;
let b1 = '10';
console.log(a1 == b1);

console.log('________________===________________');
console.log(a1 === b1);

console.log('_______________+__________________');
console.log(a1+b1);

console.log('_______________-__________________');
console.log(a1-b1);

console.log('_______________/__________________');
console.log(a1/b1);

console.log('_______________%__________________');
console.log(a1%b1);

console.log('_______________*__________________');
console.log(a1*b1);

console.log('_______________**__________________');
console.log(a1**b1);

a1 = 20;
console.log('________________&&______________');
console.log((a1>b1 && a1==b1));

console.log('________________||______________');
console.log((a1>b1 || a1==b1));

console.log('______________positive or negative_____________');
let a2 = -1;
if(a2 < 0){
    console.log(`${a2} is a negative number`);
}
else{
    console.log(`${a2} is a positive number`);
}

console.log('_____________switch case________________');

let day = 2;
switch(day){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('the input is invalid');
        break;
}

