let i = 1;
    for(let li of reviews__slider.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    /* конфигурация */
    let width = 410; // ширина картинки
    let count = 2; // видимое количество изображений

    let list = reviews__slider.querySelector('ul');
    let listElems = reviews__slider.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    reviews__slider.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    reviews__slider.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
