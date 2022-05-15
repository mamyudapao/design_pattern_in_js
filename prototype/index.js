class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return "Woof!";
    }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

console.log(Dog.prototype);
console.log(dog1.__proto__);

Dog.prototype.play = () => {
    console.log("Playing now!");
};

dog1.play();