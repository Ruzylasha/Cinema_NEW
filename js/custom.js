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

//закрытие формочки
const closePopupButton = document.getElementById('popup-close');
const popup = document.getElementById('popup');
const openPopupButton = document.getElementById('popup-open');
const sendForm = document.getElementById('submit');

closePopupButton.onclick = function (event) {
    event.preventDefault();
    popup.classList.add('hidden'); //добавляет классы
}

openPopupButton.onclick = function (event) {
    event.preventDefault();
    popup.classList.remove('hidden'); //удаляет классы
}

sendForm.onclick = function (event) {
    event.preventDefault();
    let name = document.getElementById('name');
    let nameParent = name.parentNode;
    let email = document.getElementById('email');
    let select = document.getElementById('select');
    let agree = document.getElementById('agree');

    if (!name.value) {
        nameParent.classList.add('error'),
            nameParent.getElementsByClassName('popup-error-message')[0].innerHTML = "заполните поле Имя"
    }
    if (!email.value) {
        nameParent.classList.add('error'),
            nameParent.getElementsByClassName('popup-error-message')[1].innerHTML = "заполните поле E-mail"

    }

    console.log(name.value, email.value, select.value, agree.value)
}