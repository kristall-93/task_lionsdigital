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

    $('#grid2').masonry({
        itemSelector: '.item2',
        singleMode: true,
        isResizable: true,
        isAnimated: true,
        animationOptions: {
            queue: false,
            duration: 500
        },
        fitWidth: true,
    });

    document.getElementById('grid2').classList.add("grid_loaded_hidden");
});

// обработка load_more :

$('.load_more').on('click', function () {
    $('.grid_loaded').slideToggle('slow');
});
