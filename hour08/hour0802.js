function update() {
	$("span").css("background-color", "lightgrey");
	$("div").each(function () {
		var $input = $(this).children("input:first");
		var $value = $input.val();
		var filter = "span:lt(" + $value + ")";
		$input.siblings(filter).css("background-color", "blue");
	})
}
