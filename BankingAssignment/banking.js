// four accounts as objects
const accountOne = {
    name: "John",
    balance: 5000,
    currency: "USD",
    type: "savings"
}

const accountTwo = {
    name: "Bob",
    balance: 10,
    currency: "USD",
    type: "checking"
}

const accountThree = {
    name: "Jane",
    balance: 7000,
    currency: "USD",
    type: "savings"
}

const accountFour = {
    name: "Darlene",
    balance: 20000,
    currency: "EUR",
    type: "checking"
}

// adding different deposit amounts
accountOne.balance += 1250;
accountFour.balance += 2800;

// printing new balances to the console
console.log(`${accountOne.name}'s new balance: ${accountOne.balance} ${accountOne.currency}`);
console.log(`${accountFour.name}'s new balance: ${accountFour.balance} ${accountFour.currency}`);



// attempt withdrawals
// amount to be withdrawn
let withdrawalAmount = 4000;

// withdraw from account two
if (accountTwo.balance >= withdrawalAmount) {
    accountTwo.balance -= withdrawalAmount;
    console.log(`${accountTwo.name} withdrew ${withdrawalAmount} ${accountTwo.currency}. New balance: ${accountTwo.balance} ${accountTwo.currency}`);
} else {
    console.log(`Withdrawal denied for ${accountTwo.name}: insufficient funds`);
}

// withdraw from account three
if (accountThree.balance >= withdrawalAmount) {
    accountThree.balance -= withdrawalAmount;
    console.log(`${accountThree.name} withdrew ${withdrawalAmount} ${accountThree.currency}. New balance: ${accountThree.balance} ${accountThree.currency}`);
} else {
    console.log(`Withdrawal denied for ${accountThree.name}: insufficient funds`);
}



// transfer money between two accounts only if they have the same currency
// amount to transfer
let transferAmount = 2020;

// transfer from account four to  account two
if (accountTwo.currency === accountFour.currency) {
    if (accountFour.balance >= transferAmount) {
        accountTwo.balance += transferAmount;
        accountFour.balance -= transferAmount;
        console.log(`Successfully transferred ${transferAmount} ${accountTwo.currency} from ${accountFour.name} to ${accountTwo.name}`);
    } else {
        console.log(`Transfer denied: insufficient funds in ${accountFour.name}'s account`);
    }
} else {
    console.log("Transfer failed: currency mismatch");
}

// transfer from account three to account one
if (accountOne.currency === accountThree.currency) {
    if (accountThree.balance >= transferAmount) {
        accountOne.balance += transferAmount;
        accountThree.balance -= transferAmount;
        console.log(`Successfully transferred ${transferAmount} ${accountOne.currency} from ${accountThree.name} to ${accountOne.name}`);
    } else {
        console.log(`Transfer denied: insufficient funds in ${accountThree.name}'s account`);
    }
} else {
    console.log("Transfer failed: currency mismatch");
}



// monthly maintenance
// add 2% interest to savings account
// deduct 50 units from checking account

// monthly maintenance for accountOne
if (accountOne.type === "savings") {
    accountOne.balance += accountOne.balance * 0.02;
} else if (accountOne.type === "checking") {
    accountOne.balance -= 50;
}

// monthly maintenance for accountTwo
if (accountTwo.type === "savings") {
    accountTwo.balance += accountTwo.balance * 0.02;
} else if (accountTwo.type === "checking") {
    accountTwo.balance -= 50;
}

// monthly maintenance for accountThree
if (accountThree.type === "savings") {
    accountThree.balance += accountThree.balance * 0.02;
} else if (accountThree.type === "checking") {
    accountThree.balance -= 50;
}

// monthly maintenance for accountFour
if (accountFour.type === "savings") {
    accountFour.balance += accountFour.balance * 0.02;
} else if (accountFour.type === "checking") {
    accountFour.balance -= 50;
}

// print results on the console after monthly maintenance
console.log(`${accountOne.name}'s balance after maintenance: ${accountOne.balance} ${accountOne.currency}`);
console.log(`${accountTwo.name}'s balance after maintenance: ${accountTwo.balance} ${accountTwo.currency}`);
console.log(`${accountThree.name}'s balance after maintenance: ${accountThree.balance} ${accountThree.currency}`);
console.log(`${accountFour.name}'s balance after maintenance: ${accountFour.balance} ${accountFour.currency}`);



// comparisons
// find highest and lowest balance
// assume accountOne is  oth highest and lowest
let highest = accountOne;
let lowest = accountOne;

// compare with accountTwo
if (accountTwo.balance > highest.balance) {
    highest = accountTwo;
}

if (accountTwo.balance < lowest.balance) {
    lowest = accountTwo;
}

// compare with accountThree
if (accountThree.balance > highest.balance) {
    highest = accountThree;
}

if (accountThree.balance < lowest.balance) {
    lowest = accountThree;
}

// compare with accountFour
if (accountFour.balance > highest.balance) {
    highest = accountFour;
}
if (accountFour.balance < lowest.balance) {
    lowest = accountFour;
}

console.log(`Highest balance: ${highest.name} with ${highest.balance} ${highest.currency}`);
console.log(`Lowest balance: ${lowest.name} with ${lowest.balance} ${lowest.currency}`);



// account status check for each account
// accountOne status check
let statusOne
if (accountOne.balance > 0) {
    statusOne = "Active"
    console.log(`${accountOne.name}'s account is active`);
} else if (accountOne.balance === 0) {
    statusOne = "Empty";
    console.log(`${accountOne.name}'s account is empty`);
} else {
    statusOne = "Overdrawn";
    console.log(`${accountOne.name}'s account is overdrawn`);
}

// accountTwo status check
let statusTwo
if (accountTwo.balance > 0) {
    statusTwo = "Active"
    console.log(`${accountTwo.name}'s account is active`);
} else if (accountTwo.balance === 0) {
    statusTwo = "Empty";
    console.log(`${accountTwo.name}'s account is empty`);
} else {
    statusTwo = "Overdrawn";
    console.log(`${accountTwo.name}'s account is overdrawn`);
}

// accountThree status check
let statusThree
if (accountThree.balance > 0) {
    statusThree = "Active"
    console.log(`${accountThree.name}'s account is active`);
} else if (accountThree.balance === 0) {
    statusThree = "Empty";
    console.log(`${accountThree.name}'s account is empty`);
} else {
    statusThree = "Overdrawn";
    console.log(`${accountThree.name}'s account is overdrawn`);
}

// accountFour status check
let statusFour
if (accountFour.balance > 0) {
    statusFour = "Active"
    console.log(`${accountFour.name}'s account is active`);
} else if (accountFour.balance === 0) {
    statusFour = "Empty";
    console.log(`${accountFour.name}'s account is empty`);
} else {
    statusFour = "Overdrawn";
    console.log(`${accountFour.name}'s account is overdrawn`);
}


// transaction summary
console.log(`${accountOne.name}'s account balance: ${accountOne.balance} ${accountOne.currency}. \nStatus: ${statusOne}`)
console.log(`${accountTwo.name}'s account balance: ${accountTwo.balance} ${accountTwo.currency}. \nStatus: ${statusTwo}`)
console.log(`${accountThree.name}'s account balance: ${accountThree.balance} ${accountThree.currency}. \nStatus: ${statusThree}`)
console.log(`${accountFour.name}'s account balance: ${accountFour.balance} ${accountFour.currency}. \nStatus: ${statusFour}`)
