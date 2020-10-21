const manufacturers = ["Mercedes", "Audi", "BMW"];

function print(name, index) {
  console.log(`${index + 1}.${name}`);
}

manufacturers.forEach(print);
manufacturers.forEach(fabricante => console.log(fabricante));