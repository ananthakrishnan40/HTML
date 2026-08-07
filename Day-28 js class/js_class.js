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

