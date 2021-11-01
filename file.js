let money = +prompt("Enter your monthly budget", ''),
    time = prompt("Enter data in YYYY-MM-DD format", '2021-10-29');


let appData = {
    timeData: time,
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?");

        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {

        }
      
};


appData.moneyPerDay = appData.budget / 30;

alert("Daily budget: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Minimal salary");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Average salary");
} else if(appData.moneyPerDay > 2000) {
    console.log("High salary");
} else {
    console.log("Error!");
}