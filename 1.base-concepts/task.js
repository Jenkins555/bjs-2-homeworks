"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr; // array
}

"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let payMonth;//Платёж
  let nowDate;//Сегдняшняя дата
  let oneMonth;//Один день
  let p;//Процентная ставка
  let s;//Тело кредита
  let diffInTime;//Разница в датах
  let diffInMonth;//Количество месяцев
  if (isNaN(percent)) {
    return 'Параметр "Процентная ставка" содержит неправильное значение "test"';
  } else if (isNaN(contribution)) {
    return 'Параметр "Начальный взнос" содержит неправильное значение "test"';
  } else if (isNaN(amount)) {
    return 'Параметр "Общая стоимость" содержит неправильное значение "test"';
  }
  nowDate = new Date();
  oneMonth = 1000 * 60 * 60 * 24 * 30.5;
  p = (percent / 12) / 100;
  s = amount - contribution;
  diffInTime = date - nowDate;
  diffInMonth = Math.round(diffInTime / oneMonth);
  payMonth = s * (p + (p / ((Math.pow((1 + p), diffInMonth)) - 1)));
  totalAmount = payMonth * diffInMonth;
  totalAmount = totalAmount.toFixed(2);
  console.log(+totalAmount);
  return +totalAmount;
}
