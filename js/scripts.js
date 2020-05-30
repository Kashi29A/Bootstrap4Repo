$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// $(document).button('toggle')

$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 1000 });
    // $("#carousel-pause").click(function () {
    //     $("#mycarousel").carousel('pause');
    // });
    // $("#carousel-play").click(function () {
    //     $("#mycarousel").carousel('cycle');
    // });
    $("#buttonLogin").click(function () {
        $('#loginModal').modal('show');
    });
    $("#buttonReservation").click(function () {
        $('#reservationFormModal').modal('show');
    });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});