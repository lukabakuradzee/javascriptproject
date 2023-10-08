localStorage.setItem('myPhone', 'Iphone 15 Pro Max');
localStorage.setItem('myPhone', 'Iphone 14 Pro');

let phone = localStorage.getItem('myPhone');
localStorage.removeItem('MyPhone');
console.log(phone);
