// Do action once document is loaded
$(function() {
	$('form[autocomplete="off"], input[autocomplete="off"]').nw_force_autocomplete();
});