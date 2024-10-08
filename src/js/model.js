class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log(`Hello. My name is ${this.firstName} ${this.lastName}`);
  }
}

export const john = new Person('John', 'Doe');
