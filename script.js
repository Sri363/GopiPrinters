$(document).ready(function () {
    $(".hero-text-h1").addClass(
        "animate__animated animate__fadeInUp"
    );

    $(".hero-text-h3").addClass(
        "animate__animated animate__fadeInUp"
    );

    $(".product-card").hover(function () {
        $(this).find(".card-img-overlay").fadeIn();
    },
        function () {
            $(this).find(".card-img-overlay").fadeOut();
        }
    )
});
