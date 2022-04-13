define(["jquery"], function () {
	function color(element, color) {
		$(element).css("color", color);
	}
	const label = {
		p: "#label-principal",
		r: "#label-rate",
		t: "#label-time",
	};
	const input = {
		p: "#input-principal",
		r: "#input-rate",
		t: "#input-time",
	};
	let values = {
		p: null,
		r: null,
		t: null,
	};
	let canCalc = false;
	const error = $("#error");
	function convert() {
		values.p = Number($(input.p).val());
		values.r = Number($(input.r).val());
		values.t = Number($(input.t).val());
	}
	return {
		calculate: (code) => {
			convert();
			per = values.r / 100;
			final = values.p * per * values.t;
			$("#SI-outFormula").text(`$$\\displaystyle{\\displaylines{\\color{Magenta}${final.toFixed(2)}\\color{Black}=${values.p}*(\\frac{${values.r}}{100})*${values.t}\\\\\\color{Magenta}${final.toFixed(2)}\\color{Black}=${values.p}*${per}\\%*${values.t}}}$$`);
			code();
			// $("#SI-outFormula").width("px");

		},
		loadTex: (code) => {
			code();
		}
	};
});
