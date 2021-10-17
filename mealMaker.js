const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get courses() {
    return {appetizers: this.appetizers, mains: this.mains, desserts: this.desserts};
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(value) {

  },
  get mains() {
    return this._courses.mains;
  },
  set mains(value) {

  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(value) {

  },
  addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: (courseName) => {
    let dishes = menu.courses[courseName];
    return dishes[Math.floor(Math.random() * dishes.length)];
  },
  generateRandomMeal: () => {
    const appetizer = menu.getRandomDishFromCourse('appetizers');
    const main =  menu.getRandomDishFromCourse('mains');
    const dessert = menu.getRandomDishFromCourse('desserts');
    // Calculate total cost with 6% tax rate and 20% tip
    const subTotal = appetizer.price + main.price + dessert.price;
    const tax = subTotal * 0.06;
    const tip = subTotal * 0.20;
    const totalPrice = Math.fround(subTotal + tax + tip).toFixed(2);
    console.log(`Appetizer: ${appetizer.name}\nMain Course: ${main.name}\nDessert: ${dessert.name}\nTotal Price: $${totalPrice}`);
  }
};

// I borrowed the menu items from Red Robin...Yuuum
menu.addDishToCourse('appetizers', 'Boneless Wings', 10.99);
menu.addDishToCourse('appetizers', 'Large Onion Rings', 10.49);
menu.addDishToCourse('appetizers', 'Mozzarella Sticks', 8.49);
menu.addDishToCourse('mains', 'Chicken Tenders & Fries', 12.49);
menu.addDishToCourse('mains', 'Fish & Chips', 14.99);
menu.addDishToCourse('mains', 'Monster Burger', 15.49);
menu.addDishToCourse('desserts', 'Mudd Pie', 8.69);
menu.addDishToCourse('desserts', 'Brownie Cake', 7.49);
menu.addDishToCourse('desserts', 'Sundae', 2.99);
menu.generateRandomMeal();
