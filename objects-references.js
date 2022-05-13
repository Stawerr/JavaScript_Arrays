let myAccount ={
    name: 'Andrew Mead',
    expenses:0,
    income:0
}

function addExpense(account,amount){
    account.expenses=account.expenses+amount
}

function addIncome(account, amount) {
    account.income=account.income+amount
}

function resetAccount(account) {
    account.income=0
    account.expenses=0
}

function getSummary(account){
    let balace=account.income-account.expenses
    console.log(`${account.name} tem ${account.income} ... ${account.expenses}`)
}

addIncome(myAccount,10)

getSummary(myAccount)

resetAccount(myAccount)

getSummary(myAccount)