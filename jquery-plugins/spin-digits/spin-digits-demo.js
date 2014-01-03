(function ($) {

"use strict";

var spinValue = generateRndValue();

function formatCurrency(value) {
	return ((value < 0) ? "-" : "") + "$\xA0" + Math.abs(value).toFixed(2).replace(/(\d)(?=(?:\d{3})+\.)/g, "$1\xA0");
}

function generateRndValue() {
	return Math.random() * 100000 - 50000;
}

$(".spin-test")
	.text(formatCurrency(spinValue))
	.spinDigits("init");
$("body").on("click", ".spin-down, .spin-up, .spin-rnd", function (e) {
	var $this = $(this),
		spin = $this.siblings(".spin-test");
	if (spin.find(":spinned").length === 0) {
		if ($this.is(".spin-rnd")) {
			spinValue = generateRndValue();
		} else {
			spinValue += $this.is(".spin-up") ? Math.random() : -Math.random();
		}
		spin.spinDigits("set", formatCurrency(spinValue));
	}
	e.preventDefault();
});

})(window.jQuery);