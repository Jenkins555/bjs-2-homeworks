"use strick"

function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = Math.pow(b,b) - 4*a*c;
  if (d = 0) {
   x1 = (-b/(2*a));
   arr.push(x1);
  }  else {
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a); 
    arr.push(x1 , x2); 
  }
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  percent; 
  contribution;
  amount;
  date;
  let payMonth;//Платёж
  nowDate = new Date();//сегодняшняя дата
  oneMonth = 1000 * 60 * 60 * 24 * 30; //один день
  p = (percent / 12) / 100; //процентная ставка
  s = amount - contribution;//тело кредита
  diffInTime = date - nowDate;//Разница в датах
  diffInMonth = Math.round(diffInTime / oneMonth);//Определение количества месяцев
  payMonth = s * (p + (p / (((1 + p)^diffInMonth) - 1)));//Ежемесячный платёж
  totalAmount = payMonth * diffInMonth;
  totalAmount = totalAmount.toFixed(2);
  console.log(totalAmount);
  return totalAmount;
}
