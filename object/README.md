<h3 align="center">Module Content</h3>

<p align="center">
  <a href="#-introduction-to-oo">Introduction to OO</a> ●
  <a href="#-objects-revision">Objects Revision</a> ● 
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