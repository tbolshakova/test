let money = prompt("Enter your monthly budget", 0),
 time = prompt("Enter data in YYYY-MM-DD format", '2021-10-29');


let appData = {
    timeData: time,
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
} 

 
let q1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    q2 = prompt("Во сколько обойдется?")


alert(money / 30)