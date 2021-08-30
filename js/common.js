$(document).ready(function () {
	window.setTimeout(function () {
		jQuery('.logo-block').addClass('animate');
	}, 1500);
	window.setTimeout(function () {
		jQuery('.txt-animation').addClass('animate');
	}, 2500);


	window.setTimeout(function () {
		jQuery('.related-text').addClass('animate');
		jQuery('.social-box a').addClass('animate');
	}, 3000);

	jQuery('#myButton').on('click', function () {
		jQuery("#mask").addClass('open');
		jQuery(".section1, .section2").addClass('blur');
		jQuery("body").addClass('o-hidden');
		jQuery('.overlay-bg').fadeIn(1000);
		jQuery('.loopmein-popup').fadeIn(1000);
	});

	jQuery('.close').on('click', function (e) {
		e.preventDefault();
		jQuery("#mask").removeClass('open');
		jQuery(".section1, .section2").removeClass('blur');
		jQuery("body").removeClass('o-hidden');
		jQuery('.overlay-bg').fadeOut(1000);
		jQuery('.loopmein-popup').fadeOut(1000);
	});

	jQuery('#knowmore').on('click', function () {
		jQuery("#mask1").addClass('open');
		jQuery(".section6, .section9, .section8, .toc, footer").addClass('blur');
		jQuery("body").addClass('o-hidden');
		jQuery('.overlay-bg').fadeIn(1000);
		jQuery('.loopmein-popup1').fadeIn(1000);
	});

	jQuery('.close').on('click', function (e) {
		e.preventDefault();
		jQuery("#mask1").removeClass('open');
		jQuery(".section6, .section9, .section8, .toc, footer").removeClass('blur');
		jQuery("body").removeClass('o-hidden');
		jQuery('.overlay-bg').fadeOut(1000);
		jQuery('.loopmein-popup1').fadeOut(500);
	});

	jQuery('#showrunners').on('click', function () {
		jQuery("#mask2").addClass('open');
		jQuery(".section4, .section3, .section5, .toc").addClass('blur');
		jQuery("body").addClass('o-hidden');
		jQuery('.overlay-bg').fadeIn(1000);
		jQuery('.loopmein-popup2').fadeIn(1000);
	});

	jQuery('.close').on('click', function (e) {
		e.preventDefault();
		jQuery("#mask2").removeClass('open');
		jQuery(".section4, .section3, .section5, .toc").removeClass('blur');
		jQuery("body").removeClass('o-hidden');
		jQuery('.overlay-bg').fadeOut(1000);
		jQuery('.loopmein-popup2').fadeOut(500);
	});

	jQuery('.seeall-popup').on('click', function () {
		jQuery("#mask3").addClass('open');
		jQuery(".section7, .section8, .toc").addClass('blur');
		jQuery("body").addClass('o-hidden');
		jQuery('.overlay-bg').fadeIn(1000);
		jQuery('.loopmein-popup3').fadeIn(1000);
	});

	jQuery('.close').on('click', function (e) {
		e.preventDefault();
		jQuery("#mask3").removeClass('open');
		jQuery(".section7, .section8, .toc").removeClass('blur');
		jQuery("body").removeClass('o-hidden');
		jQuery('.overlay-bg').fadeOut(1000);
		jQuery('.loopmein-popup3').fadeOut(500);
	});

	jQuery('.seeall-popup-invs').on('click', function () {
		jQuery("#mask4").addClass('open');
		jQuery(".section8, .section6, .toc, footer").addClass('blur');
		jQuery("body").addClass('o-hidden');
		jQuery('.overlay-bg').fadeIn(1000);
		jQuery('.loopmein-popup4').fadeIn(1000);
		slickinit();
	});

	jQuery('.close').on('click', function (e) {
		e.preventDefault();
		jQuery("#mask4").removeClass('open');
		jQuery(".section8, .section6, .toc, footer").removeClass('blur');
		jQuery("body").removeClass('o-hidden');
		jQuery('.overlay-bg').fadeOut(1000);
		jQuery('.loopmein-popup4').fadeOut(500);
	});

	jQuery('#exploremore').on('click', function () {
		jQuery("#mask5").addClass('open');
		jQuery(".section5, .section4, .section7, .toc, footer").addClass('blur');
		jQuery("body").addClass('o-hidden');
		jQuery('.overlay-bg').fadeIn(1000);
		jQuery('.loopmein-popup5').fadeIn(1000);
	});

	jQuery('.close').on('click', function (e) {
		e.preventDefault();
		jQuery("#mask5").removeClass('open');
		jQuery(".section5, .section4,.section7, .toc, footer").removeClass('blur');
		jQuery("body").removeClass('o-hidden');
		jQuery('.overlay-bg').fadeOut(1000);
		jQuery('.loopmein-popup5').fadeOut(500);
	});


	$(".accordion").each(function () {
		$(this).find('.accordion-item:first').find(".toggle").addClass('expand');
		$(this).find('.accordion-item:first').find(".toggle").next().addClass('show');
		$(this).find('.accordion-item:first').find(".toggle").next().slideDown(350);
	});

	$('.toggle').click(function (e) {
		e.preventDefault();

		var $this = $(this);
		$('.toggle').removeClass('expand');
		$this.addClass('expand');

		if ($this.next().hasClass('show')) {
			$this.removeClass('expand');
			$this.next().removeClass('show');
			$this.next().slideUp(350);
		} else {
			$this.parent().parent().find('.accordion-detail').removeClass('show');
			$this.parent().parent().find('.accordion-detail').slideUp(350);
			$this.next().toggleClass('show');
			$this.next().slideToggle(350);
		}
	});


	// Isotop Masonary
	$('.massonary-group .grid').isotope({
		itemSelector: '.grid-item',
		masonry: {
			isFitWidth: true,
			gutter: 20
		}
	});

	$('.flip-box-big .grid').isotope({
		itemSelector: '.grid-item',
		masonry: {
			isFitWidth: true,
			gutter: 20
		}
	});


	$(document).on('click', '.toc a', function (e) {
		e.preventDefault();
		$('.toc a').removeClass('active');
		$(this).addClass('active');

		var targetid = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(targetid).offset().top - 50
		}, 100);
	});

	$(window).scroll(function () {
		var scrollTop = $(document).scrollTop();
		var anchors = $('.tocitem');
		var firstitemoffset = $('#section-1').offset().top;
		var lastitemoffset = $('#section-5').offset().top;
		var lastitemheight = $('#section-5').height();
		if (scrollTop > firstitemoffset - 300 && scrollTop < (lastitemoffset + lastitemheight) - 300) {
			$('.toc').fadeIn();
		}
		else {
			$('.toc').fadeOut();
		}
		for (var i = 0; i < anchors.length; i++) {
			var mainsectionheight = $(anchors[i]).height();
			if (scrollTop > $(anchors[i]).offset().top - 100 && scrollTop < $(anchors[i]).offset().top + mainsectionheight) {
				$('a[href="#' + $(anchors[i]).attr('id') + '"]').addClass('active');
			} else {
				$('a[href="#' + $(anchors[i]).attr('id') + '"]').removeClass('active');
			}
		}


		//image animation js
		var imgoffset = $('.image_wrapper').offset().top;
		if ($(window).scrollTop() > (imgoffset - 150)) {
			$('.image_wrapper').addClass('imageanimation');
		}
		//image animation js end


	});
	//open video in popup
	if ($('.video-modal').length) {
		$('.video-modal').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});
	}

	//open video in popup end

	$('.grid .grid-crew:nth-child(4) ~ .grid-crew').hide();
	$('.see-all').on('click', function (e) {
		$(this).closest('.grid').find('.grid-crew').fadeIn();
		$(this).hide();
	});


	//testimonials slider 
	$('.popupslider_cast--slider').slick({
		centerMode: true,
		centerPadding: '380px',
		slidesToShow: 1,
		dots: false,
		arrows: false,
		asNavFor: '.slider_dots',
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					centerPadding: '250px',
				}
			},
			{
				breakpoint: 1400,
				settings: {
					centerPadding: '160px',
				}
			},
			{
				breakpoint: 1201,
				settings: {
					centerPadding: '5%',
				}
			},
		]
	});
	$('.slider_dots').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.popupslider_cast--slider',
		arrows: false,
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '48px',
	});
	//testimonials slider





	var width = 0;
	$('.full-page-slider .flip-box-big1 .grid-crew').each(function () { width += $(this).width(); });
	$('.full-page-slider .flip-box-big1').width(width);
	$('.full-page-slider .flip-box-big1').height($('.full-page-slider').height());


	$.fn.hScroll = function (amount) {
		amount = amount || 120;
		$(this).bind("DOMMouseScroll mousewheel tap", function (event) {
			var oEvent = event.originalEvent,
				direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
				position = $(this).scrollLeft();
			position += direction > 0 ? -amount : amount;
			$(this).scrollLeft(position);
			event.preventDefault();
		})
	};
	if ($(window).width() >= 1025) {
		$('.full-page-slider').hScroll(60);
	}
	$(window).resize(function () {
		if ($(window).width() >= 1025) {
			$('.full-page-slider').hScroll(60);
		}
	});

	// crow tab js
	$('.crew_icon li').on('click', function () {
		var targetclass = $(this).attr('rel');
		$('.crew_icon li').removeClass('active');
		$('.crew_img_box .crew_img').hide();
		$(this).addClass('active');
		$('.crew_img_box .' + targetclass).show();

		if ($(window).width() <= 767) {
			$("html, body").animate({
				scrollTop: $('.crew_img_box').offset().top
			});
		}
	})
	// crow tab jsend
});

$(window).resize(function () {
	// Isotop Masonary
	$('.massonary-group .grid').isotope({
		itemSelector: '.grid-item',
		masonry: {
			isFitWidth: true,
			gutter: 20
		}
	});
	$('.flip-box-big .grid').isotope({
		itemSelector: '.grid-item',
		masonry: {
			isFitWidth: true,
			gutter: 20
		}
	});
});



// ScrollTop Effect Start
(function ($) {
	$.fn.visible = function (partial) {
		var $t = $(this),
			$w = $(window),
			viewTop = $w.scrollTop(),
			viewBottom = viewTop + $w.height(),
			_top = $t.offset().top + 200,
			_bottom = _top + $t.height(),
			compareTop = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	};
})(jQuery);

var win = $(window);
var allMods = $(".aniBox");
win.scroll(function (event) {
	allMods.each(function (i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("visible animated fadeInTop");
		}
	});
});
// ScrollTop Effect End

$(document).ready(function () {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});


$(".chosen-select").chosen({
	no_results_text: "Oops, nothing found!"
})