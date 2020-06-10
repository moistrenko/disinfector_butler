var myFullpage = new fullpage('#fullpage', {
    //Навигация
    menu: '#menu',
    lockAnchors: false,
    anchors:['firstPage', 'secondPage'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Скроллинг
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //Доступ
    keyboardScrolling: false,
    animateAnchor: true,
    recordHistory: true,

    //Дизайн
    controlArrows: false,
    verticalCentered: true,
    sectionsColor : ['#E7010E', '#5981BC'],
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    cards: false,
    cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

    //Настроить селекторы
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //события
    onLeave: function(origin, destination, direction){},
    afterLoad: function(origin, destination, direction){},
    afterRender: function(){},
    afterResize: function(width, height){},
    afterReBuild: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(section, origin, destination, direction){},
    onSlideLeave: function(section, origin, destination, direction){}
});

// ======================таймер===============
let controlClick = document.querySelector('.fp-controlArrow-click');
let clickNext = document.querySelector('.fp-controlArrow-next')
 
        controlClick.onclick = function () {
             var myCanvas = document.getElementById("myCanvas");
    context = myCanvas.getContext("2d"),
    timeLimit = 30000,
    timeStart = (new Date).getTime(),
    canvasSize = 200,
    lineWidth = 45,
    drawX = drawY = radius = canvasSize / 2;
    radius -= lineWidth / 2;
    myCanvas.width = canvasSize;
    myCanvas.height = canvasSize;
function go() {
    context.beginPath();
    context.lineWidth = lineWidth;
    context.lineCap = "round";
    context.strokeStyle = "rgb(255, 255, 255)";
    var a = ((new Date).getTime() - timeStart) / timeLimit;
    context.clearRect(0, 0, canvasSize, canvasSize);
    context.font = ' 600 96px "Montserrat"';
    context.textAlign = "center";
    context.fillText((31 - a*30)|0, 100, 130);
    context.arc(100, 100, 100, -Math.PI / 2 + 2 * Math.PI * a, -Math.PI / 2, !1);
    context.stroke();
    1 < a && (timeStart = (new Date).getTime());
    timer = window.setTimeout(go, 5)
}
go();

clickNext.classList.add('fp-controlArrow');

function foo() {
    clickNext.click();
}
setTimeout(foo, 30000);
}
