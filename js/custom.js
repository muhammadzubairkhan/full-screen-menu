$("#items").hide();
var isShow=false;
$(document).ready(()=>{
	var isShow=false;
	$("#openDialog").click((e)=>{
		$("#openDialog").show();
			if(!isShow){
					$("#icDialog").attr("src","img/close.png" );
					isShow=true;
					$("#items").delay(500).queue(function (next) { $(this).show(); next(); });
				}else{
					$("#icDialog").attr("src","img/menu.png" );
					isShow=false;
					$("#items").delay(350).queue(function (next) { $(this).hide(); next(); });
				}
		$("#dialog").toggleClass("openDialog");
	});

});