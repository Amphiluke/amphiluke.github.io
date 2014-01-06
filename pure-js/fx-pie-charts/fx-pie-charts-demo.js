(function ($) {

"use strict";

var colors, data;

colors = ["red", "green", "blue"];
$("#chart-wrap-jquery").fxPieChart({
	data: [12, 20, 15],
	colors: colors,
	handlers: {
		click: function (event, pieIndex) {
			$("#selected-pie").html(
				"\x3Cspan style='color:" + colors[pieIndex] + "'\x3E" +
				colors[pieIndex] + "\x3C/span\x3E pie is clicked"
			);
		}
	}
});

data = $("#chart-wrap-standalone").fxPieChart({
	colors: ["red", "blue", "yellow", "maroon", "silver", "#0a0"],
	handlers: {
		mouseover: function (e, index) {
			$("#hovered-pie-data").text(data[index]);
		}
	}
})
.data("fxChart").split(",");

})(window.jQuery);