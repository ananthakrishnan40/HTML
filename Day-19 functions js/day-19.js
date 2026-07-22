function series1_10(){
    console.log('__________________1-20_____________________');
    for(let i=0;i<=20;i++){
        console.log(i);
    }
}

series1_10()


function Odd1_20(){
    console.log('__________________1-20 odd_____________________');
    for(let i=1;i<=20;i+=2){
        console.log(i);
    }
}

Odd1_20()


function Even1_20(){
    console.log('__________________1-20 Even_____________________');
    for(let i=0;i<=20;i+=2){
        console.log(i);
    }
}

Even1_20()

function Five(){
    console.log(`_______________________five______________________`);
    for(let i= 0;i<=20;i+=5){
        console.log(i);
    }
}
Five()

function Series(){
    console.log(`_______________________series___________________`);
    let series='';
        for(let i = 1;i<=20;i++){
            series += i + ' ';
        }
        console.log(series);
}
