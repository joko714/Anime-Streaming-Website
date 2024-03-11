$(".owl-carousel").owlCarousel({
  loop:false,
  stagePadding:0,
  margin:10,
  nav: true,
  navText: [
    '<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>',
    '<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'
  ],
  responsive: {
    0: {
      items: 2
    },
    640: {
      items: 3
    },
    960: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
});
