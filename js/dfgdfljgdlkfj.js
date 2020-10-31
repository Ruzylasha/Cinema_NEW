//Задача 1;
const massiv = ["Привет", 100, false];
console.log(massiv)

//Задача 2;
const a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};

for (const key in a3) {
    const element = a3[key];
    if (key.length > 4) {
        console.log(`${key}->${element}`)
    }

}

//Задача 3; 
const a7 = {};
document.querySelector('#button').onclick = function () {
    const keyInput = document.querySelector('#key')
    const
        // получаем значение 1 input
        key = keyInput.value,
        // получаем значение 2 input        
        value = document.querySelector('#value').value;

    // добавляем в объект ключ с соответствующим значением
    a7[key] = value;
    // выводи объект (ассоциативный массив) в консоль
    console.log(a7);
    keyInput.value = '';
    document.querySelector('#value').value = '';
};

//Задача 4; https://forum.jscourse.com/t/topic/462 
const a = ['Tor', 'Lokki', 'Odin',
    34, 'privet'
];
console.log(a.length);

let k = [];
for (let i = 0; i < a.length; i++) {
    a[i] = a[i] + '';
    let p = a[i].length;
    k.push(a[i].length);
}
console.log(k);

function arraySum(k) {
    let sum = 0;
    for (let i = 0; i < k.length; i++) {
        sum += k[i];
    }
    console.log(sum);
}
arraySum(k);


//Задача 5.

const x = [0, 2, 5, -4, 6, 22, -9, -12, , 13, 78]
let d = x.filter(function (el) {
    return el != null;
});
let a1 = [];
let a2 = [];

for (let i = 0; i < d.length; i++) {
    if (d[i] % 2 == 0) {
        a1.push(d[i])
    } else {
        a2.push(d[i]);
    }
};

a1.sort(function (a, b) {
    return a - b;
});

a2.sort(function (a, b) {
    return a - b;
});

console.log(d);
console.log(a1);
console.log(a2);

//Задача 6.

let d1 = [0, 2, 5, -4, 6, 22, -9, , -12, 13, 78];
let filtered = d1.filter(function (el) {
    return el != null;
});
let max = Math.max(...filtered);
console.log(max);