function bt1(){
    document.getElementById('headding').innerText='Hello world form JS';
}

function bt2(){
    const p1 = document.getElementById('p1');
    p1.style.color='blue';
    const p1tag = document.getElementsByTagName('p');
    p1tag[0].style.fontSize='20px';
}

function bt3(){
    const p=document.getElementsByTagName('p');
    for(let i=1;i<p.length;i++){
        p[i].style.color='green';
    }
}
function bt4(){
    const ul = document.getElementsByClassName('ulist');
    let li = ul[0].getElementsByTagName('li');
    document.getElementById('count').innerText=li.length;
    console.log(li.length);
    
}
function btn5(){
    const p = document.getElementsByClassName('Q5');
    for(let i of p){
        i.style.color='yellow';
    }
}
function diableButton(button,className){
    console.log(button);
    const allButton = document.querySelectorAll('.'+className);
    for(let i of allButton){
        if(i === button){
            continue
        }
        else{
            i.style.backgroundColor = 'black';
            i.disabled=true;
        }
    }
}

function q7(className){
    obj = document.querySelector(className);
    obj.innerText='button is Clicked'
}

function q8(className){
    obj = document.querySelectorAll(className);
    for(let i of obj){
        i.style.color='blue'
        i.style.fontStyle = 'italic'
    }
}