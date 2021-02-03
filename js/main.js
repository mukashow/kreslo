$('.reviews__slider').slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<img src="../img/products/prev.png" class="prev"></img>',
    nextArrow: '<img src="../img/products/next.png" class="next"></img>',
    responsive: [
        {
            breakpoint: 1367,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
        ]
});


$('.products__slider').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img src="../img/products/prev.png" class="prev"></img>',
    nextArrow: '<img src="../img/products/next.png" class="next"></img>',
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
