class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
        this.owner = null;
    }

    assignOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log(`Власник повинен бути старшим 18 років!`);
        }
    }

    getInfo() {
        console.log(`Марка: ${this.brand}; Модель: ${this.model}; Рік виписку: ${this.year}; Номерний знак: ${this.number}`);
        if (this.owner !== null) {
            console.log(`Власник:`);
            this.owner.getInfo();
        } else {
            console.log(`Автомобіль не має власника`);
        }
    }
}

const person1 = new Person('Василь', 25);
const person2 = new Person('Іван', 17);

const car1 = new Car('Toyota', 'Camry', 2015, 'BC1234AA');
const car2 = new Car('Honda', 'Civic', 2010, 'AB5678BC');

car1.assignOwner(person1);
car2.assignOwner(person2);

car1.getInfo();
car2.getInfo();
