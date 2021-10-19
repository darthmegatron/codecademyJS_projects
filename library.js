class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(bool) {
    this._isCheckedOut = bool;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    return (Math.fround(this.ratings.reduce((val1, val2) => val1 + val2) / this.ratings.length).toFixed(1));
  }

  addRating(rating) {
    this._ratings.push(rating)
  }
};

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
};

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
};

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)

console.log(historyOfEverything.title);
historyOfEverything.toggleCheckOutStatus();
console.log(`Checked Out: ${historyOfEverything.isCheckedOut}`);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(`Average Rating: ${historyOfEverything.getAverageRating()}`);

const speed = new Movie('Speed', 'Jan de Bont', 116);

console.log('\n'+speed.title);
speed.toggleCheckOutStatus();
console.log(`Checked Out: ${speed.isCheckedOut}`);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(`Average Rating: ${speed.getAverageRating()}`);
