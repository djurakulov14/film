/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1
document.querySelectorAll('.promo__adv img').forEach(div => div.remove());
//2
document.querySelector('.promo__genre').innerHTML = 'Драмма'
//3
document.querySelector('.promo__bg').style.background = 'url(./img/bg.jpg)'
//4

movieDB.movies.sort()

let ul = document.createElement('ul')

ul.classList.add('promo__interactive-list')

let num = 1
for(let item of movieDB.movies){
    let li = document.createElement('li')
    let div = document.createElement('div')

    li.classList.add('promo__interactive-item')
    div.classList.add('delete')

    li.innerHTML = num + " " +item

    ul.append(li)
    li.append(div)

    div.onclick = () => {
        li.style.display = 'none'
    }
    num++
}


document.querySelector('.promo__interactive-title').after(ul)

let offset = 0;
const sliderLine = document.querySelector('.slide');

document.querySelector('.next').onclick = () => {
    offset = offset + 1303;
    if (offset > 2606) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
};

document.querySelector('.prev').onclick = () => {
    offset = offset - 1303;
    if (offset < 0) {
        offset = 2606;
    }
    sliderLine.style.left = -offset + 'px';
};