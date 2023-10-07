$(document).ready(function () {
    $(".card").hide();

    $("body").waypoint(function(){
        $(".card").show();
        $(".card").addClass("animate__animated animate__fadeInUpBig"), {offset:"20%"};
    })

    
});