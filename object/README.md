<h3 align="center">Module Content</h3>

<p align="center">
  <a href="#-introduction-to-oo">Introduction to OO</a> ●
  <a href="#-objects-revision">Objects Revision</a> ● 
  <a href="#-object-creation-strategies">Object Creation Strategies</a> ● 
  <a href="#-constant-objects">Constant Objects</a> ●  
</p>

---
# 🏁 Introduction to OO

In Object-Oriented Programming everything is based on objects, objects have their attributes, data and can have relation with others objects.

The idea is to see the world based on objects and bring it in a simple way to the software.

### Important Principles

1. <strong>Abstraction</strong> - Take an object from the real world and translate it to your system, abstracting what's important for it and leaving out all the rest.
2. <strong>Encapsulation</strong> - Have the implementation details hidden, show to who needs to use only a simple interface for them to interact with the objects. 
3. <strong>Heritage</strong> (Prototype) - Receive attributes and characterictics of a Mother structure.
4. <strong>Polymorphism</strong> - Have multiple shapes declaring on generic object a specialized instance. Like instantiating a Dog class in an Animal object.

---
# 📖 Objects Revision

<strong>Object</strong> is a dynamically collection of key/value pairs.

Example 1:
```js
const product = new Object;
product.name = 'Chair'; // Defining name value
product['Product Brand'] = 'Generic'; // Defining brand value
product.price = 220;
console.log(product);

// delete attributes
delete product.price;
delete product['Product Brand'];
console.log(product);
```

Example 2:
```js
const car = {
  model: 'A4',
  value: 89000,
  owner: {
    name: 'Lohana',
    age: 19,
    address: {
      street: 'Rua de Xangô',
      number: 153,
    }
  },
  conductors: [{
    name: 'Zoe',
    age: 30,
  }, {
    name: 'Armin',
    age: 21,
  }],
  calculateInsuranceValue: function() {
    // ...
  },
}

car.owner.address.number = 1000; // access with dot notation
// same with brackets

delete car.conductors; // deleting
```
---
# 🌱 Object Creation Strategies

Using the literal notation for object creation.
```js
const obj1 = {};
console.log(obj1);
```

<br>

Using the Object function of JS.
```js
const obj2 = new Object;
console.log(obj2);
```

<br>

Creating your own constructor function.
```js
function Product(name, price, discount) {
  this.name = name;
  // price and discount are encapsulated
  this.getPriceWithDiscount = () => {
    return price * (1 - discount);
  };
}

const p1 = new Product('Pen', 7.99, 0.15);
const p2 = new Product('Notebook', 2998.99, 0.25);
console.log(p1.getPriceWithDiscount(), p2.getPriceWithDiscount());
```

<br>

Using Factory functions.
```js
function createEmployee(name, baseSalary, absenceCount) {
  return {
    name,
    baseSalary,
    absenceCount,
    getSalary() {
      return (baseSalary / 30) * (30 - absenceCount);
    }
  }
}

const f1 = createEmployee('Lohana', 5000, 4);
const f2 = createEmployee('Zoe', 11000, 1);
console.log(f1.getSalary(), f2.getSalary());
```

<br>

Using Object.create notation.
```js
const daughter = Object.create(null);
daughter.name = 'Zoe';
console.log(daughter);
```

<br>

Using JSON.parse, a famous function that returns an Object.
```js
const fromJSON = JSON.parse('{"Info": "I am Jason"}');
console.log(fromJSON.info);
```

---
# 🧐 Constant Objects

This topic starts because of a question: Why you assign an Object to a constant but keeps altering its values along the code.
```js
const person = { name: 'Lohana' };
person.name = 'Loh';
```
<strong>Explaining</strong>: The constant is storing a reference to an address on memory that the Object is stored. When you alter a value, like shown in the example above, you aren't altering the reference, but the content of this reference. You can't change the reference because it's a constant, but you can do like the example and it's okay.

#### ⚠ What you can't do:
```js
person = { name: 'Zoe' };
```
That's the wrong way, cause you're trying to change the reference. You're telling a constant to start looking for a new Object instead of altering the values of the existing one who the constant already references. You're trying to re-assign the value of that constant!!!

<br>

<strong>What if I want to lock my Object from suffering alterations? </strong>

Just use the Object.freeze method!
```js
Object.freeze(person);
person.name = 'John'; // not gonna work!
person.address = 'Rua de Xangô'; // nope!
delete person.name; // nothing...Give up fren!
```
With that done, nobody can: alter an existing attribute, add a new attribute or delete any attributes. Now you've a constant object! 😁

Declaring from the beginning: 
```js
const constantPerson = Object.freeze({ name: 'Lohana' });
```
# 🤔 Literal Notation

<i>Haven't we talked about that before?</i> 🤔
Yes we did, but there were a few updates and fixes for Literal Notation, so let's take a look!

```js
const a = 1;
const b = 2;
const c = 3;
```
<br>

We have this three constants and we want to assign their values to attributes in an object. Before the JavaScript ES6, we had to do like this:
```js
const obj1 = { a:a, b:b, c:c };
```
<br>

Now, with JavaScript ES6, we can simply do like this:
```js
const obj2 = { a, b, c };
```
By default, those attributes will get the same name as the constants assigned to them.

#### Same happens with Functions:

Before ES6:
```js
const obj5 = {
  function1: function() { return },
};
```

Now, with ES6: 
```js
const obj5 = {
  function1() { return },
};
```
