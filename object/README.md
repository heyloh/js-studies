<h3 align="center">Module Content</h3>

<p align="center">
  <a href="#-introduction-to-oo">Introduction to OO</a> ●
  <a href="#-objects-revision">Objects Revision</a> ● 
  <a href="#-object-creation-strategies">Object Creation Strategies</a> ● 
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
