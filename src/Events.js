import { doc } from 'prettier';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    document.body.insertAdjacentElement('afterbegin', button);
    button.addEventListener('click', function () {
        button.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    document.body.insertAdjacentHTML('beforeend', '<ul></ul>');
    let a = document.body.querySelector('ul');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        li.addEventListener('mouseover', () =>
            li.setAttribute('title', arr[i]),
        );
        a.append(li);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.textContent = 'tensor';
    document.body.insertAdjacentElement('afterbegin', link);
    link.addEventListener(
        'click',
        () => (link.textContent += ' ' + 'https://tensor.ru/'),
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.insertAdjacentHTML('beforeend', '<ul></ul>');
    let a = document.body.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = 'Пункт';
    li.addEventListener('click', () => (li.textContent += '!'));
    a.append(li);
    let button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    document.body.insertAdjacentElement('beforeend', button);
    button.addEventListener('click', function () {
        let li1 = document.createElement('li');
        li1.textContent = 'Пункт';
        li1.addEventListener('click', () => (li1.textContent += '!'));
        a.append(li1);
    });
}
