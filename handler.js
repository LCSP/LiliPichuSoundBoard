$("#btn_off").on("click",function(){
	$("#wrapper").hide("slow");
	$("#btn_off").text("Ok... (refresh the page to get it again)");
});

$("li").on("click", function() {
    let sound = new Howl({src: ['sounds/' + $(this).attr("id") + ".mp3"]});
    sound.play();
});
