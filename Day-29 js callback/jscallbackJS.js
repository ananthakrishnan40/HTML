
//question 1

function display(value){
    console.log(value);
}
function calculate(a, b, callback){
    callback(a+b);
}

calculate(5, 10, display);


// question 2
function greetUser(name,callback){
    callback(name);
}

function Q1(message){
    document.getElementById('Q1_greet').innerText ='Welcome ' + message;
}

greetUser('AnanthaKrishnan s kumar',Q1)


//Question 3
function processArray(arr,callback){
    print('befor doubling :'+arr)
    console.log(callback(arr))
}

function double(list){
    for(let i =0;i<list.length;i++){
        list[i]*=2
    }
    return list
}
processArray([10,20,30,40,50,60],double)

// Question 4
function filterNumber(list,callback){
    console.log('befor filter '+list);
    console.log(callback(list))
}


function posNumber(list){
    arr = []
    for(let i of list){
        if(i>0){
            arr.push(i)
        }
        else{
            continue
        }
    }
    return arr
}

filterNumber([-1,2,-3,4,5,-6,-7,8,9,-10],posNumber)

//Question 5

function findNumber(list,callback){
    console.log('Q5')
    console.log(callback(list));
}

function Even(list){
    for(let i of list){
        if(i%2==0){
            return i
        }
        return null
    }
}

findNumber([1,2,3,4,10],Even)

//Question 6 

function removeNegative(list,callback){
    console.log('Q6')
    console.log(callback(list))
}

function rmneg(list){
    let result = []
    for(let i of list){
        if(i>0){
            result.push(i)
        }
    }
    return result
}

removeNegative([-1,-2,10,20,-10,1],rmneg)


//Question 7

function checkEligibility(age,callback){
    console.log(callback(age))
}

function ageCheck(age){
    if(age>=18){
        return 'Is Eligible'
    }
    else{
        return 'Not Eligible'
    }
}

checkEligibility(23,ageCheck)


//Question 8

function orderFood(callback,time){

    setTimeout(callback,time)
}

function food(){
    console.log('food is redy...')
}

orderFood(food,3000)

//Question 9

function sumArray(list,callback){
    console.log(callback(list))
}

function sum(list){
    sum_ = 0
    for(let i of list){
        sum_+= i
    }
    return sum_
}

sumArray([1,2,3,4,5,6,7,8,9,10],sum)

//Question 10


function sortArray(list,callback){
    console.log('Q10')
    console.log(callback(list));
}

function Sort(list){
    swap = true
    while(swap){
        swap = false
        let index = 0
        while(index<list.length-1){
            if(list[index] > list[index+1]){
                temp = list[index]
                list[index] = list[index+1]
                list[index+1] = temp
                swap = true
                continue
            }
            index+=1
        }
    }
    return list
}

sortArray([1,2,10,6,1,0,2],Sort)