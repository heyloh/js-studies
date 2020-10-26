function Person(name) {
  this.name = name;

  this.talk = function () {
    console.log(`My name is ${this.name}`);
  }
}

const p1 = new Person('Lohana');
p1.talk();

// easy