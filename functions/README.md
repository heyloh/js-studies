<h3 align="center">Section Content</h3>
<p align="center">
  | <a href="#-callback-functions">Callback Functions</a> | 
  <a href="#-standard-observer-">Standard Observer</a> | 
  <a href="#-closures">Closures</a> | 
  <a href="#-factory-functions">Factory Functions</a> | 
</p>

# 🤔 Callback Functions

Basically, callback is passing a function to another function and when an event 
happens the function you first passed is called (back 😉).

Example 1:
```js
const manufacturers = ["Mercedes", "Audi", "BMW"];

function print(name, index) {
  console.log(`${index + 1}.${name}`);
}

//callback

manufacturers.forEach(print);
manufacturers.forEach(fabricante => console.log(fabricante));
```

Example 2:
```js
const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Whitout callback

const lowGrades1 = [];

for(let i in grades) {
  if(grades[i] < 7) {
    lowGrades1.push(grades[i]);
  }
}

console.log(lowGrades1);

//Using callback and Arrow Function

const lowGrades2 = grades.filter(grade => grade < 7);

console.log(lowGrades2);
```

### 👀 Standard Observer - The most used project standard ?!

#### 😕 Why Observer?
1. Javascript is based on Observer. 
2. Web is based on Javascript. 
3. Then web is extremely important.
4. So Observer is the most used project standard.
It's a surviving rule.

In Javascript observer is usually called Event Handler. In Java, is called 
Listener but stills the same standard. Callback function uses observer.

# ❓ Closures

It's the scope created when a function is declared. This scope allows the function access and manipulate variables external to the function.

```js
const x = 'Global';

function out() {
  const x = 'Local';
  function in() {
    return x;
  }
  return in;
}

const myFunction = out();
console.log(myFunction); //returns 'Local'
```



# 🏭 Factory Functions

Factory is a function that always returns a new object.

Example 1: 
```js
function createPerson() {
  return {
    firstname: 'Lohana',
    lastname: 'Leopoldo',
  }
}
```

Example 2:
```js
function createProduct(name, price) {
  return {
    name,
    price,
    discount: 0.1,
  }
}

console.log(createProduct('Notebook', 1999.00));
```

# 👊🏽 Class x Factory Function

The usage of this two depends on for what exactly you're using this function. 

For example, if you use the Class constructor, you may know that the 'this' can change depending of the lexical context, if that's a problem you can use the Factory. 

There are always cons and pros of using each of them. 

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log(`My name is ${this.name}`);
  }
}

const p1 = new Person('Lohana');
p1.talk();

const createPerson = name => {
  return {
    talk: () => console.log(`My name is ${name}`),
  }
}

const p2 = createPerson('Lohana');
p2.talk();  
```

# 🏅 Constructor Function Challenge

See the "constructor-function-challenge.js" for the results.
