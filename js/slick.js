$(".slick-carousel").slick({
	centerMode: true,
	autoplay: true,
	autoplaySpeed: 1500,
	arrows: false,
	mobileFirst: true,
	slidesToShow: 1,
	centerPadding: "40px",
	infinite: true,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 3,
			},
		},
	],
});
