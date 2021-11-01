let money, time;

function start() {
    money = +prompt("Enter your monthly budget", '');
    time = prompt("Enter data in YYYY-MM-DD format", '2021-10-29');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Enter your monthly budget", '');
    }
}
start();



let appData = {
    timeData: time,
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?");

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Daily budget " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Minimal salary");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Average salary");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High salary");
        } else {
            console.log("Error!");
        }
    },
    checkSaving: function () {
        if (appData.savings == true) {
            let save = +prompt("What is the amount of saving?", ''),
                percent = +prompt("What is percent?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Monthly income: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Stat'ya neobyazatelnyh rashodov?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt('Chto prineset dopolnitelnyi dohod?', '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Maybe smth else?'));
        appData.income.sort();
    }
};


// appData.moneyPerDay = (appData.budget / 30).toFixed();

// alert("Daily budget: " + appData.moneyPerDay);

