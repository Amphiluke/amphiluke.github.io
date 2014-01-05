(function($) {

"use strict";

$("#tabs").extratabs({
	thumbnails: true,
	multiline: true
});
$("#tabs-switcher").on("change", "input", function () {
	$("#tabs").extratabs("option", this.id, (this.type == "checkbox") ? this.checked : (+this.value || 150));
});

})(window.jQuery);