$(document).ready(function () {

    let offset = { offset: "70%" };

    $(".hero-text-h1").addClass(
        "animate__animated animate__fadeInUp"
    );

    $(".hero-text-h3").addClass(
        "animate__animated animate__fadeInUp"
    );
    // hover fadeIn and fadeOut of cards
    $(".product-card").hover(function () {
        $(this).find(".card-img-overlay").fadeIn();
    },
        function () {
            $(this).find(".card-img-overlay").fadeOut();
        }
    )

    //adding waypoint animation
    $(".about").waypoint(function () {
        $(".about").addClass("animate__animated animate__fadeInRight")
    }, offset);

    $(".product-card:nth-of-type(1)").waypoint(function () {
        $(".product-card:nth-of-type(1)").addClass("animate__animated animate__fadeInUpBig")
    }, offset)
    $(".product-card:nth-of-type(2)").waypoint(function () {
        $(".product-card:nth-of-type(2)").addClass("animate__animated animate__fadeInUpBig")
    }, offset)
    $(".product-card:nth-of-type(3)").waypoint(function () {
        $(".product-card:nth-of-type(3)").addClass("animate__animated animate__fadeInUpBig")
    }, offset)
    $(".product-card:nth-of-type(4)").waypoint(function () {
        $(".product-card:nth-of-type(4)").addClass("animate__animated animate__fadeInUpBig")
    }, offset)
    $(".product-card:nth-of-type(5)").waypoint(function () {
        $(".product-card:nth-of-type(5)").addClass("animate__animated animate__fadeInUpBig")
    }, offset)
    $(".product-card:nth-of-type(6)").waypoint(function () {
        $(".product-card:nth-of-type(6)").addClass("animate__animated animate__fadeInUpBig")
    }, offset)
    $(".product-card:nth-of-type(7)").waypoint(function () {
        $(".product-card:nth-of-type(7)").addClass("animate__animated animate__fadeInUpBig")
    }, offset)
    $(".product-card:nth-of-type(8)").waypoint(function () {
        $(".product-card:nth-of-type(8)").addClass("animate__animated animate__fadeInUpBig")
    }, offset)
    $(".product-card:nth-of-type(9)").waypoint(function () {
        $(".product-card:nth-of-type(9)").addClass("animate__animated animate__fadeInUpBig")
    }, offset)
    $(".product-card:nth-of-type(10)").waypoint(function () {
        $(".product-card:nth-of-type(10)").addClass("animate__animated animate__fadeInUpBig")
    }, offset)
});
