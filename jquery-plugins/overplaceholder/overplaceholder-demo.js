(function ($) {

"use strict";

var ophOptions = {
	emailfld: {
		onshow: function () {
			$(this).slideDown("slow");
		},
		onhide: function () {
			$(this).fadeOut("fast");
		}
	},
	fromfld: {
		onshow: function () {
			$(this).animate({left: "0"});
		},
		onhide: function () {
			$(this).animate({left: ($("#" + this.htmlFor).outerWidth() + 2) + "px"});
		},
		reEmpty: /^\u2014$/
	},
	commentfld: {
		reEmpty: /\s/g
	},
	captchafld: {
		onshow: function () {
			$(this).animate({width: "toggle"});
		}
	}
};

$(".oph-label").overplaceholder(function () {
	return ophOptions[this.htmlFor];
});

$(".oph-form").validate({
	rules: {
		loginfld: {
			required: true,
			minlength: 2
		},
		pswfld: {
			required: true,
			minlength: 4
		},
		emailfld: {
			required: true,
			email: true
		},
		captchafld: {
			required: true,
			digits: true
		}
	},
	debug: true,
	submitHandler: function(form) {
		$(".successmsg").fadeOut("slow").fadeIn("slow");
		form.reset();
	},
	errorPlacement: function (error, element) {
		var ophWrapper = element.closest(".oph-wrapper");
		error.insertAfter(ophWrapper.length > 0 ? ophWrapper : element);
	}
});

})(window.jQuery);