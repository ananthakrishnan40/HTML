//task 1

class Student{
    constructor (Name,Age,Course){
        this.Name = Name;
        this.Age = Age;
        this.Course = Course;
    }
}

Student1 = new Student('AnanthaKrishnan s Kumar',23,'JavaScript');

console.log(`Student Name :${Student1.Name} Age :${Student1.Age}, Course :${Student1.Course}`);

// task 2

class Employee{
    constructor(Id,Name,Salary){
        this.Name = Name;
        this.Id = Id;
        this.Salary= Salary;
    }

    Display(){
        console.log(`Id : ${this.Id}\nName : ${this.Name}\nSalary : ${this.Salary}`)
    }
}

Employee1=new Employee(1,'Gokul',50000);
Employee1.Display();

//task 3

class Rectangel{
    constructor(Length,Bredth){
        this.Length = Length;
        this.Bredth = Bredth;
    }

    area(){
        console.log(`Area :${this.Length * this.Bredth}`);
    }
}

rect = new Rectangel(10,20);
rect.area();

//task 4

class Circle{
    constructor(Radius){
        this.Radius = Radius;
    }

    Circumference(){
        console.log(`Circumference = ${(3.14 * this.Radius) * 2}`);
    }
}

Circle1 = new Circle(10);
Circle1.Circumference();

//task 5

class Bank{
    #AccountNumber = null;
    #Balance = null;

    constructor(AccountNumber,Balance){
        this.#AccountNumber = AccountNumber;
        this.#Balance = Balance;
    }

    Deposit(Amount){
        this.#Balance+=Amount;
    }

    WithDraw(Amount){
        this.#Balance -= Amount;
    }

    Display(){
        console.log(`Account Number : ${this.#AccountNumber}\nBalance : ${this.#Balance}`);
    }
}

account1 = new Bank(123,10000);
account1.Deposit(100);
account1.Display();


