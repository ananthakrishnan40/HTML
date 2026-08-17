console.log('check');
// quesion one
class Car{
    constructor(Brand,Model,Year){
        this.Brand = Brand;
        this.Model = Model;
        this.Year = Year;
    }
    Display(){
        console.log(`Brand Name : ${this.Brand}`);
        console.log(`Model : ${this.Model}`);
        console.log(`Make : ${this.Year}`);
    }

}
car1 = new Car('BMW','M3','2019');
car1.Display();

class Employee{
    constructor(){
        this.intro = 'an Employee of ABC company';
    }
}

class Persion extends Employee{
    constructor(){
        super();
        this.name = 'my name is Noble !'
    }
}

let persion = new Persion()

console.log(persion.name,persion.intro);


class Animal{
    sound(){
        console.log('Anumal calss i am an Animal');
    }
    walk(){
        console.log('walking');
    }
}

class Dog extends Animal{
    sound(){
        console.log('Bow bow');
    }
}

class Cat extends Animal{
    sound(){
        console.log('Mew Mew');
    }
}


dog = new Dog();
cat = new Cat();
cat.sound();
dog.sound();
cat.walk()


class Book{
    constructor(title,author,price){
        this.title = title;
        this.price = price;
        this.author = author
    }

    display(){
        console.log(this.title,this.author,this.price);
    }
}

let book = new Book('Adventures of Programming','AnanthaKrishnan',1000);
book.display();


class Calculator{
    constructor (num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    add(){
        console.log(this.num1+this.num2);
    }
    sub(){
        console.log(this.num1-this.num2);
    }
    mul(){
        console.log(this.num1*this.num2);
    }
    div(){
        console.log(this.num1/this.num2);
    }
}


let cal = new Calculator(20,10)
cal.div()
cal.mul()
cal.add()
cal.sub()