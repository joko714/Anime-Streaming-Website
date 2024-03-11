 $(document).ready(function () {
    $(".custom-carousel").owlCarousel({
      autoWidth: true,
      loop: false,
    });

    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });