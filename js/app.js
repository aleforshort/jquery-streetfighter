$(document).ready(function() {
  var isactive=false;
  $(".ryu").mouseenter(function() {
  	if(!isactive) {
  	$(".ryu-still").hide();
    $(".ryu-throwing").hide();
    $(".ryu-ready").show();
  	}

  })
	.mouseleave(function() {
	$(".ryu-ready").hide();
	 $(".ryu-throwing").hide();
	$(".ryu-still").show();
	})
	.mousedown(function() {
	playHadouken();
	$(".ryu-ready").hide();
	$(".ryu-still").hide();
	$(".ryu-throwing").show();
	isactive=true;
	$(".hadouken").finish().show().animate(
		{"left":"1020px"}, 500,
		function() {
			$(this).hide();
			$(this).css("left","520px");
			isactive=false;
	});
})
	.mouseup(function() {
	$(".ryu-throwing").hide();
	$(".ryu-still").hide();
	$("ryu-ready").show();
	
	});
});
function playHadouken () {
	$("#hadouken-sound") [0] .volume=.05;
	$("#hadouken-sound") [0] .load();
	$("#hadouken-sound") [0] .play();
}