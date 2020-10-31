//Занятие 17
//Задача №1
document.querySelector('#button').onclick = function () {
    alert('Привет, ' + (document.getElementById("name").value));
}

//Задача №2-3
//Спросить про какую-то ошибку с "е"
document.querySelector('#button1').onclick = function () {
    let g = +document.getElementById("number1").value;
    let g1 = +document.getElementById("number2").value;

    if (g >= g1) {
        alert(g)
    } else {
        alert(g1)
    }
};

//Задача №4
document.querySelector('#button2').onclick = function () {
    let a = +document.getElementById("numberMin").value;
    let b = +document.getElementById("numberMax").value;
    if (a >= b) {
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    };
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    alert(Math.round(rand));
}


//Норм, но если min и max перепутать, то не работает.
//document.querySelector('#button2').onclick = function () {
//    let min = document.getElementById("numberMin").value;
//   let max = document.getElementById("numberMax").value;
//   let rand = min - 0.5 + Math.random() * (max - min + 1);
///  alert(Math.round(rand));
//}

//ТЗ 18
// вариант 1
//const arr = [10, 12, 15, 21];
//for (let i = 0; i < arr.length; i++) {
//    setTimeout(function () {
//        console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
//}

//ТЗ 18
// вариант 1

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    (function (i) {
        setTimeout(function () {
            console.log('Index: ' + i + ', element: ' + arr[i]);
        }, 3000);
    })(i)
}


//ТЗ 18
// вариант вопросы
//https://habr.com/ru/company/ruvds/blog/340194/ - где прочитала

// Спросить как обратиться к arr[i]
//const arr = [10, 12, 15, 21];
//for (var i = 0; i < arr.length; i++) {
// setTimeout(function () {
//return function () {
//    console.log('Index: ' + i_local + ', element: ' + arr[i]);
// }
//}(i), 3000);
//}