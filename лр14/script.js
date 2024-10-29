function MyDate(date, month, year) {
  this.date = date;
  this.month = month;
  this.year = year;

  this.leapYear = function () {
    if (this.year % 4 === 0) return true;
    return false;
  };

  this.fiveDay = function () {
    let data = new Date(this.year, this.month - 1, this.date);
    data.setDate(data.getDate() + 5);
    this.date = data.getDate();
    this.month = data.getMonth() + 1;
    this.year = data.getFullYear();
    return this;
  };
}

let date = new MyDate(31, 2, 2004);
console.log(date.leapYear());
date.fiveDay();
console.log(`${date.date}-${date.month}-${date.year}`);
