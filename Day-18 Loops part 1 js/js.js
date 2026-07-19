//Loops Exercise

            // Write all programs using for loop,while loop,do while loop

            //1. 1 2 3 4 5 6 7 8  series of 1 to 20

            //2. 1 3 5 7 9   series of 1 to 20 odd

            //3. 0 2 4 6 8    series of even 0 to 20

            //4. 0 5 10 15 20 25(5 series)

            //5. 1 + 2 + 3 + 4 + .....

            //6. 0 + 2 + 4 + 6 + ...

            //7. 1 + 3 + 5 + 7 + 9.....   
            
            //8. 0 + 5 + 10 + 15 + 20 + .....

            //9. 1 / 1! + 2 / 2! + 3 / 3! + 4 / 4!..... 

            //10.  0 + 2 / 2! + 4 / 4! + 6 / 6!....

            //11. 1 / 1! + 3 / 3! + 5 / 5!.... 


//1. 1 2 3 4 5 6 7 8  series of 1 to 20###############################################
//forloop
let series='';
for(let i = 1;i<=20;i++){
    series += i + ' ';
}
console.log(series);


//while
series = '';
let i = 1;
while(i<=20){
    series += i +' ';
    i+=1;
}
console.log(series);

//do while
i = 1;
series='';
do{
    series += i+' ';
    i+=1;
}while(i<=20);
console.log(series);

 //2. 1 3 5 7 9   series of 1 to 20 odd################################################

series='';
for(let i = 1;i<=20;i+=2){
    series += i + ' ';
}
console.log(series);


//while
series = '';
i = 1;
while(i<=20){
    series += i +' ';
    i+=2;
}
console.log(series);

//do while
i = 1;
series='';
do{
    series += i+' ';
    i+=2;
}while(i<=20);
console.log(series);


 //3. 0 2 4 6 8    series of even 0 to 20 ###############################

 series='';
for(let i = 0;i<=20;i+=2){
    series += i + ' ';
}
console.log(series);


//while
series = '';
i = 0;
while(i<=20){
    series += i +' ';
    i+=2;
}
console.log(series);

//do while
i = 0;
series='';
do{
    series += i+' ';
    i+=2;
}while(i<=20);
console.log(series);

//4. 0 5 10 15 20 25(5 series)###############################################

series='';
for(let i = 0;i<=20;i+=5){
    series += i + ' ';
}
console.log(series);


//while
series = '';
i = 0;
while(i<=20){
    series += i +' ';
    i+=5;
}
console.log(series);

//do while
i = 0;
series='';
do{
    series += i+' ';
    i+=5;
}while(i<=20);
console.log(series);

//5. 1 + 2 + 3 + 4 + .....#########################################



series='';
for(let i = 1;i<=20;i+=1){
    series += i + ' + ';
}
console.log(series);


//while
series = '';
i = 1;
while(i<=20){
    series += i +' + ';
    i+=1;
}
console.log(series);

//do while
i = 1;
series='';
do{
    series += i+' + ';
    i+=1;
}while(i<=20);
console.log(series);


//6. 0 + 2 + 4 + 6 + ...#########################################################

series='';
for(let i = 0;i<=20;i+=2){
    series += i + ' + ';
}
console.log(series);


//while
series = '';
i = 0;
while(i<=20){
    series += i +' + ';
    i+=2;
}
console.log(series);

//do while
i = 0;
series='';
do{
    series += i+' + ';
    i+=2;
}while(i<=20);
console.log(series);

//8. 0 + 5 + 10 + 15 + 20 + .....

series='';
for(let i = 0;i<=20;i+=5){
    series += i + ' + ';
}
console.log(series);


//while
series = '';
i = 0;
while(i<=20){
    series += i +' + ';
    i+=5;
}
console.log(series);

//do while
i = 0;
series='';
do{
    series += i+' + ';
    i+=5;
}while(i<=20);
console.log(series);


//9. 1 / 1! + 2 / 2! + 3 / 3! + 4 / 4!.....

series='';
for(let i = 1;i<=20;i+=1){
    series += `${i} / ${i}! +`;
}
console.log(series);


//while
series = '';
i = 1;
while(i<=20){
    series += `${i} / ${i}! +`;
    i+=1;
}
console.log(series);

//do while
i = 1;
series='';
do{
    series += `${i} / ${i}! +`;
    i+=1;
}while(i<=20);
console.log(series);



//10.  0 + 2 / 2! + 4 / 4! + 6 / 6!....


series='0';
for(let i = 2;i<=20;i+=2){
    series += ` + ${i} / ${i}! + `;
}
console.log(series);


//while
series = '0';
i = 2;
while(i<=20){
    series += ` + ${i} / ${i}! + `;
    i+=2;
}
console.log(series);

//do while
i = 2;
series='0';
do{
    series += ` + ${i} / ${i}! + `;
    i+=2;
}while(i<=20);
console.log(series);



//11. 1 / 1! + 3 / 3! + 5 / 5!....



series='';
for(let i = 1;i<=20;i+=2){
    series += `${i} / ${i}! + `;
}
console.log(series);


//while
series = '';
i = 1;
while(i<=20){
    series += `${i} / ${i}! + `;
    i+=2;
}
console.log(series);

//do while
i = 1;
series='';
do{
    series += `${i} / ${i}! + `;
    i+=2;
}while(i<=20);
console.log(series);
