(function () {

"use strict";

var styleSheetsSrc = [
	"LkFsaWNlQmx1ZXtiYWNrZ3JvdW5kOkFsaWNlQmx1ZX0=", // AliceBlue
	"LkJsdWVWaW9sZXR7YmFja2dyb3VuZDpCbHVlVmlvbGV0fQ==", // BlueViolet
	"LkJyb3due2JhY2tncm91bmQ6QnJvd259", // Brown
	"LkJ1cmx5V29vZHtiYWNrZ3JvdW5kOkJ1cmx5V29vZH0=", // BurlyWood
	"LkNhZGV0Qmx1ZXtiYWNrZ3JvdW5kOkNhZGV0Qmx1ZX0=", // CadetBlue
	"LkNoYXJ0cmV1c2V7YmFja2dyb3VuZDpDaGFydHJldXNlfQ==", // Chartreuse
	"LkNob2NvbGF0ZXtiYWNrZ3JvdW5kOkNob2NvbGF0ZX0=", // Chocolate
	"LkNvcmFse2JhY2tncm91bmQ6Q29yYWx9", // Coral
	"LkNvcm5mbG93ZXJCbHVle2JhY2tncm91bmQ6Q29ybmZsb3dlckJsdWV9", // CornflowerBlue
	"LkNvcm5zaWxre2JhY2tncm91bmQ6Q29ybnNpbGt9", // Cornsilk
	"LkNyaW1zb257YmFja2dyb3VuZDpDcmltc29ufQ==", // Crimson
	"LkN5YW57YmFja2dyb3VuZDpDeWFufQ==", // Cyan
	"LkRhcmtCbHVle2JhY2tncm91bmQ6RGFya0JsdWV9", // DarkBlue
	"LkRhcmtDeWFue2JhY2tncm91bmQ6RGFya0N5YW59", // DarkCyan
	"LkRhcmtHb2xkZW5yb2R7YmFja2dyb3VuZDpEYXJrR29sZGVucm9kfQ==", // DarkGoldenrod
	"LkRhcmtHcmF5e2JhY2tncm91bmQ6RGFya0dyYXl9", // DarkGray
	"LkRhcmtHcmVlbntiYWNrZ3JvdW5kOkRhcmtHcmVlbn0=", // DarkGreen
	"LkRhcmtLaGFraXtiYWNrZ3JvdW5kOkRhcmtLaGFraX0=", // DarkKhaki
	"LkRhcmtNYWdlbnRhe2JhY2tncm91bmQ6RGFya01hZ2VudGF9", // DarkMagenta
	"LkRhcmtPbGl2ZUdyZWVue2JhY2tncm91bmQ6RGFya09saXZlR3JlZW59", // DarkOliveGreen
	"LkRhcmtPcmFuZ2V7YmFja2dyb3VuZDpEYXJrT3JhbmdlfQ==", // DarkOrange
	"LkRhcmtPcmNoaWR7YmFja2dyb3VuZDpEYXJrT3JjaGlkfQ==", // DarkOrchid
	"LkRhcmtSZWR7YmFja2dyb3VuZDpEYXJrUmVkfQ==", // DarkRed
	"LkRhcmtTYWxtb257YmFja2dyb3VuZDpEYXJrU2FsbW9ufQ==", // DarkSalmon
	"LkRhcmtTZWFHcmVlbntiYWNrZ3JvdW5kOkRhcmtTZWFHcmVlbn0=", // DarkSeaGreen
	"LkRhcmtTbGF0ZUJsdWV7YmFja2dyb3VuZDpEYXJrU2xhdGVCbHVlfQ==", // DarkSlateBlue
	"LkRhcmtTbGF0ZUdyYXl7YmFja2dyb3VuZDpEYXJrU2xhdGVHcmF5fQ==", // DarkSlateGray
	"LkFudGlxdWVXaGl0ZXtiYWNrZ3JvdW5kOkFudGlxdWVXaGl0ZX0=", // AntiqueWhite
	"LkdhaW5zYm9yb3tiYWNrZ3JvdW5kOkdhaW5zYm9yb30=", // Gainsboro
	"Lkdob3N0V2hpdGV7YmFja2dyb3VuZDpHaG9zdFdoaXRlfQ==", // GhostWhite
	"LkdvbGR7YmFja2dyb3VuZDpHb2xkfQ==", // Gold
	"LkdvbGRlbnJvZHtiYWNrZ3JvdW5kOkdvbGRlbnJvZH0=", // Goldenrod
	"LkFxdWF7YmFja2dyb3VuZDpBcXVhfQ==", // Aqua
	"LkFxdWFtYXJpbmV7YmFja2dyb3VuZDpBcXVhbWFyaW5lfQ==", // Aquamarine
	"LkF6dXJle2JhY2tncm91bmQ6QXp1cmV9", // Azure
	"LkJlaWdle2JhY2tncm91bmQ6QmVpZ2V9", // Beige
	"LkJpc3F1ZXtiYWNrZ3JvdW5kOkJpc3F1ZX0=", // Bisque
	"LkJsYWNre2JhY2tncm91bmQ6QmxhY2t9", // Black
	"LkJsYW5jaGVkQWxtb25ke2JhY2tncm91bmQ6QmxhbmNoZWRBbG1vbmR9", // BlanchedAlmond
	"LkJsdWV7YmFja2dyb3VuZDpCbHVlfQ==", // Blue
	"LkRhcmtUdXJxdW9pc2V7YmFja2dyb3VuZDpEYXJrVHVycXVvaXNlfQ==", // DarkTurquoise
	"LkRhcmtWaW9sZXR7YmFja2dyb3VuZDpEYXJrVmlvbGV0fQ==", // DarkViolet
	"LkRlZXBQaW5re2JhY2tncm91bmQ6RGVlcFBpbmt9", // DeepPink
	"LkRlZXBTa3lCbHVle2JhY2tncm91bmQ6RGVlcFNreUJsdWV9", // DeepSkyBlue
	"LkRpbUdyYXl7YmFja2dyb3VuZDpEaW1HcmF5fQ==", // DimGray
	"LkRvZGdlckJsdWV7YmFja2dyb3VuZDpEb2RnZXJCbHVlfQ==", // DodgerBlue
	"LkZpcmVCcmlja3tiYWNrZ3JvdW5kOkZpcmVCcmlja30=", // FireBrick
	"LkZsb3JhbFdoaXRle2JhY2tncm91bmQ6RmxvcmFsV2hpdGV9", // FloralWhite
	"LkZvcmVzdEdyZWVue2JhY2tncm91bmQ6Rm9yZXN0R3JlZW59", // ForestGreen
	"LkZ1Y2hzaWF7YmFja2dyb3VuZDpGdWNoc2lhfQ==" // Fuchsia
],
html = "",
i = 0,
len = styleSheetsSrc.length;

for (; i < len; i++) {
	html += "<link rel='stylesheet' type='text/css' href='data:text/css;base64," +
		styleSheetsSrc[i] + "'/>";
}
document.write(html);

if (location.search.indexOf("disable-fix=1") > -1) {
	// this prevents stylesheet processing by the fix-ie-css-limit snippet
	window.cssFixCountIE = 1000;
}

})();