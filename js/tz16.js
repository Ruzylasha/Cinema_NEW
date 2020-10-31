//Это вырезано из Custom.js, чтобы не мешало 
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


//Задача 4; https://forum.jscourse.com/t/topic/462
const a = ['Tor', 'Lokki', 'Odin',
    34, 'privet'
];
console.log(a.length);
console.log(("" + a).length);
console.log((a[0] + a[1] + a[2] + a[3] + a[4]).length);

//Задача 5.https://fooobar.com/questions/7073424/javascript-odd-and-even-separation-in-an-array-of-numbers

const d = [0, 2, 5, -4, 6, 22, -9, -12, , 13, 78]
const a1 = [];
const a2 = [];

for (var i = 0; i < d.length; i++) {
    if (d[i] % 2 == 0) {
        d.push(d.splice(i, 1)[0]);
    }
}

console.log(d);

//Задача 6.