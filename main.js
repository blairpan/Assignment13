$(document).ready(function(){
	
	$("#input").keypress(function(event){
		if(event.keyCode == 13){
			var needTranslate = $("#input").val();
			$("h2").remove();
	
	$.ajax({
		'url': "https://api.funtranslations.com/translate/minion.json?",
		'type': "GET",
		'dataType': "JSON",
		'data':{
			'text': needTranslate ,
			},
			success: function(data){
				console.log(data.contents.translated);
				$('#container').append("<h2>" + needTranslate + " --> " + data.contents.translated + "</h2>")
			 },

			error: function(data, textStatus, errorThrown){
				console.log("error:(")
				console.log(errorThrown);
			},
		});
		}
	})
});

