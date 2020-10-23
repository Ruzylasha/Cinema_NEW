const initOwl = function () {
    $(".owl-carousel").owlCarousel({
        nav: true,
    });
}

$(document).ready(initOwl);

const films = [{
        start: '10:00',
        name: 'Человек-паук',
        genre: [
            0,
            1,
            2
        ]
    },
    {
        start: '12:00',
        name: 'Собачья жизнь  2',
        genre: [
            0,
            1,
            2
        ]
    },
    {
        start: '14:00',
        name: 'История игрушек 4',
        genre: [
            0,
            1,
            2
        ]
    },

    {
        start: '16:00',
        name: 'Люди в черном: Интернешнл',
        genre: [
            0,
            1,
            2
        ]
    },
];


for (let i = 0; i < films.length; i++) {
    const filmStartId = 'film_start_' + (i + 1);
    const film_start = document.getElementById(filmStartId);
    film_start.innerHTML = films[i].start;

}

/*
const film_name_1 = document.getElementById('film_name_1');
const film_genre_1 = document.getElementById('film_genre_1');


film_name_1.innerHTML = films[0].name;
film_genre_1.innerHTML = films[0].genre;

const film_name_2 = document.getElementById('film_name_2');
const film_genre_2 = document.getElementById('film_genre_2');

film_name_2.innerHTML = films[1].name;
film_genre_2.innerHTML = films[1].genre;

const film_name_3 = document.getElementById('film_name_3');
const film_genre_3 = document.getElementById('film_genre_3');

film_name_3.innerHTML = films[2].name;
film_genre_3.innerHTML = films[2].genre;

const film_name_4 = document.getElementById('film_name_4');
const film_genre_4 = document.getElementById('film_genre_4');

film_name_4.innerHTML = films[3].name;
film_genre_4.innerHTML = films[3].genre;

console.log(film_start_1)

const form = document.getElementById('form');
form.onsubmit = function (event) {
    //Остановить стандартную обработку браузером;
    event.preventDefault();
}
Object.keys(form.elements).forEach(function (element) {
    if (form.elements[element].type != "submit") {
        console.log(form.elements[element].name, form.elements[element].value)
    }
})*/


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