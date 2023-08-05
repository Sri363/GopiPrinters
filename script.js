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

    $(".product-card").waypoint(function () {
        $(".product-card").addClass("animate__animated animate__fadeInUpBig")
    }, offset)
});
