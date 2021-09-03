/* projects cursor ==
===========================================================================  */

var $cursor = $(".cursor"),
$overlay = $(".project-overlay");

function moveCircle(e) {
TweenLite.to($cursor, 0.5, {
  css: {
    left: e.pageX,
    top: e.pageY
  },
  delay: 0.03
});
}

$(".p-1").hover(function() {
$(".cursor").css({ "background-image": "url(./assets/images/watchNgo.png)" });
});
$(".p-2").hover(function() {
$(".cursor").css({ "background-image": "url(./assets/images/moviehype.png)" });
});
$(".p-3").hover(function() {
$(".cursor").css({ "background-image": "url(./assets/images/resto-img.png)" });
});
$(".p-4").hover(function() {
$(".cursor").css({ "background-image": "url(./assets/images/obsession.png)" });
});

var flag = false;
$($overlay).mousemove(function() {
flag = true;
TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
$($overlay).on("mousemove", moveCircle);
});

$($overlay).mouseout(function() {
flag = false;
TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});




/* Menu page transition =====
================================================================================== */
var t1 = new TimelineMax({ paused: true });

			t1.to(".nav-container", 3, {
				left: 0,
				ease: Expo.easeInOut,
			});

			t1.reverse();
			$(document).on("click", ".menu-open", function () {
				t1.reversed(!t1.reversed());
			});
			$(document).on("click", ".menu-close", function () {
				t1.reversed(!t1.reversed());
			});





