function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

}
let student3 = new Student("Михаил", "male", 20);
let student4 = new Student("Виктория", "female", 19);



Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;

}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark]; // первая оценка
  } else {
    this.marks.push(mark); //последующие оценки
  }
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [...mark]; // если нет оценок
  } else {
    this.marks.push(...mark); //добавление оценок
  }
}

Student.prototype.getAverage = function () {

const sum = this.marks.reduce((total,amount)=> total + amount);
let x = (sum / this.marks.length) ;
return x;
  ///среднее арифметическое оценок студента
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;

  ///Исключить студента и установить причину
}

