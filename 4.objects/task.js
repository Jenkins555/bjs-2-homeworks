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

Student.prototype.getAverage = function (marks) {
  var sum = 0;
for(var i = 0; i < this.marks.length; i++) {
    sum = (sum + this.marks[i]) / this.marks.length;;
}
return sum;
  ///среднее арифметическое оценок студента
}

Student.prototype.exclude = function (reason) {
  delete Student['subject'];
  delete Student['marks'];
  Student['exclude'] = reason;

  ///Исключить студента и установить причину
}

// ваш код для остальных методов