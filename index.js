// Arrow functions in ES6
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(5, 10)); // Output: 15

// Classes in ES6
class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    makeSound() {
      return "Some generic sound";
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name, "Dog");
      this.breed = breed;
    }
  
    makeSound() {
      return "Woof!";
    }
  }
  
  const myDog = new Dog("Buddy", "Labrador");
  console.log(myDog.name); // Output: "Buddy"
  console.log(myDog.species); // Output: "Dog"
  console.log(myDog.makeSound()); // Output: "Woof!"

  //Destructuring Assignment
const person = { name: "John", age: 30, country: "USA" };

// Traditional way
const name = person.name;
const age = person.age;

// Using destructuring
const { name, age } = person;

console.log(name); // Output: "John"
console.log(age); // Output: 30

//useState in react

// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      greeting: 'Hello',
    };
  }

  render() {
    return (
      <div>
        <ChildComponent greeting={this.state.greeting} />
      </div>
    );
  }
}

export default ParentComponent;


