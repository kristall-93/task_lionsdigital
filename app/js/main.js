$(document).ready(function () {
    $('#grid').masonry({
        // указываем элемент-контейнер в котором расположены блоки для динамической верстки
        itemSelector: '.item',
        // указываем класс элемента являющегося блоком в нашей сетке
        singleMode: true,
        // true - если у вас все блоки одинаковой ширины
        isResizable: true,
        // перестраивает блоки при изменении размеров окна
        isAnimated: true,
        // анимируем перестроение блоков
        animationOptions: {
            queue: false,
            duration: 500
        },
        // опции анимации - очередь и продолжительность анимации
        fitWidth: true,
        horizontalOrder: true,
    });
});

// обработка load_more :

$('.load_more').on('click', function () {
    $('.hidden:lt(3)').removeClass('hidden');
    $('#grid').masonry();
    // убираем кнопку load_more, если все скрытые блоки показаны:
    if ($('.hidden').length == 0) {
        $('.load_more').css({ 'display': 'none' })
    };
});