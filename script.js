"use strict";


// Display an alert message and prompt for age

//     let alertMessage = alert('Hello, this is my final exam page');
//     let enterAge = prompt('Enter your age');

//     // Function to check age
// function ageCheck() {
//     if (enterAge < 18) {
//         prompt('you are under 18');
//     } else {
//         alert('you are an adult, welcome');
//     }
// }

// Call the ageCheck function
// ageCheck();

// Add an event listener to generate a random number
let btn = document.getElementById("btn1");
btn.addEventListener("click", () => {
    setTimeout(function () {
        let randomNumber = document.createElement("p");
        randomNumber.setAttribute("id", "randomnum");
        randomNumber.style.margin = "1em 4em";
        randomNumber.style.fontSize = "1.5rem";
        randomNumber.textContent = Math.floor(Math.random() * 100 + 1);
        document.body.appendChild(randomNumber);
    }, 1500);
});

// Define an array of fruits and a new object
let fruits = [
    { name: 'apple', price: 5 },
    { name: 'pear', price: 3 },
    { name: 'grape', price: 2 },
    { name: 'orange', price: 6 },
    { name: 'banana', price: 1 }
];

const newObject = { name: 'watermelon', price: 8 };

// Filter the fruits array
let filteredFruits = fruits.filter((product) => {
    return !(product.name === 'apple' || product.price === 6);
});

console.log(filteredFruits);

// Add the new object to the fruits array
fruits.push(newObject);
console.log(fruits);

// Function to skip a number
function skipNumber() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        } else {
            console.log(i);
        }
    }
}

// Add an event listener to trigger the skipNumber function
document.getElementById("skipButton").addEventListener("click", () => {
    console.clear();
    skipNumber();
});



// Using Callback to draw users from API

function getUsers(callback) {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => callback(data));
}

function drawUsersStartWithC(users) {
  
  let ul = document.querySelector('ul');
    let filteredNames = users.filter(user => !user.name.startsWith('c') && !user.name.startsWith('C'));  
    filteredNames.forEach((user) => {
    let  li = document.createElement('li');
    let  a = document.createElement('a');
    a.href= 'https://jsonplaceholder.typicode.com/users';
    a.setAttribute("Target",  "_Blank");
    a.textContent = `Name: ${user.name} Email: ${user.email}   User ID:  ${user.id}   Address: ${user.address.city}`;
    li.appendChild(a);
    ul.appendChild(li);

  });


}


getUsers(drawUsersStartWithC);


// User form and regex 

document.getElementById('userForm').addEventListener('submit', (event) => {
event.preventDefault();

let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    // Validate Email
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format.');
    }

    // Validate Phone Number
    let phoneRegex = /^(\(\d{3}\) |\d{3}-)\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        alert('Invalid phone number format.');
    }

    // Validate Password
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
});



class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        if(amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New Balance: $${this.balance}`);
        }

        else {
            console.log('Invalid deposit amount. Amount must be greater than 0');
        }
    }

    withdraw(amount) {
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }

        else if(amount <= 0) { 
            console.log('Invalid withdrawl amount. Amount must be greater than 0');
        }
        
        else {
            console.log('Insufficient funds for withdrawal')
        }
    }

    getBalance() {
        return this.balance;
    }
}

const account1 = new BankAccount(12345, 'John Doe', 1000);

function updateAccountInfo() {
    document.getElementById('accountNumber').textContent = account1.accountNumber;
    document.getElementById('accountHolder').textContent = account1.accountHolder;
    document.getElementById('balance').textContent = account1.getBalance();
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    if(!isNaN(depositAmount) && depositAmount > 0) {
        account1.deposit(depositAmount);
        updateAccountInfo();
    }

    else {
        alert('Invalid deposit amount. Amount must be a positive number.');
    }
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        account1.withdraw(withdrawAmount);
        updateAccountInfo();
    } else {
        alert("Invalid withdrawal amount. Amount must be a positive number.");
    }
}

// Initial display of account information
updateAccountInfo();