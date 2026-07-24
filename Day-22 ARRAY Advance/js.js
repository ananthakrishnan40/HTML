arr = [1,2,3,4,5,6,7,9,10,-1,-100,1]


const Sum = (arr)=>{
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum += parseInt(arr[i]);
    }
    console.log(`sum = ${sum}, avg =${ sum/arr.length}`);
}

Sum(arr);


const Largest = (arr)=>{
    let largest = arr[0]
    for(let i=0;i<arr.length;i++){
        largest = arr[i]>largest ? arr[i] : largest ;
    }
    console.log('Largest = '+largest);
}

Largest(arr)

const Smallest = (arr) =>{
    let smallest = arr[0];
    for(let i=0;i<arr.largest;i++){
        smallest = arr[i]>largest ? largest : arr[i];
    }
    console.log('Smallest = '+smallest);
}

Smallest(arr);

function PN(arr){
    let positive = 0,negative=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            positive+=1
        }
        else{
            negative+=1
        }
    }
    console.log(`Positive = ${positive}, Negative = ${negative}`);
}

PN(arr)

const Duplicate = (arr) =>{
    arr = arr;
    check = []
    duplicate = []
    for(let i=0;i<arr.length;i++){
        if(check.includes(arr[i])){
            duplicate.push(arr[i]);
        }
        else{
            check.push(arr[i]);
        }
    }
    console.log(`Duplicate Elements = ${duplicate}`)
}
Duplicate(arr);

const Search=(arr,target)=>{
    const result = arr.find(num => num == target);
    console.log(`result if search ${result}`);
}
Search(arr,10);

const Count = arr =>{
    dict = {}
    for(let i=0;i<arr.length;i++){
        if(arr[i] in dict){
            dict[arr[i]] += 1;
        }
        else{
            dict[arr[i]] = 1;
        }
    }
    console.log(dict);
}

Count(arr);

const isSorted = arr =>{
    prev = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>prev){
            prev = arr[i];
        }
        else{
            console.log(`array is not sorted..`);
            return 
        }
    }
    console.log(`the array is sorted..`);
}

isSorted(arr);


arr = [1,2,5,6,10];

const Missing = arr =>{
    let prev = 1;
    console.log(arr)
    for(let i = 0;i<arr.length;i++){
        if(arr[i]!=prev){
            for(let j=prev;j<arr[i];j++){
                console.log(`missing Elements are :${j}`);
            }
        }
        prev = arr[i]+1;
    }
}

Missing(arr);

const OddEven = arr=>{
    odd = [];
    even = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 == 0){
            even.push(arr[i]);
        }
        else{
            odd.push(arr[i]);
        }
    }
    console.log(`Even List : ${even}`);
    console.log(`Odd List : ${odd}`);
}

OddEven(arr);