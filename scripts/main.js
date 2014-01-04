(function ($) {

"use strict";

$("body").on("click", ".demo-src-block summary", function () {
	var $this = $(this),
		altText = $this.data("altText");
	if (altText) {
		$this.data("altText", $this.text());
		$this.text(altText);
	}
	$this.closest(".demo-src-block").toggleClass("demo-src-hidden");
});

})(window.jQuery);