window.onload = function() {
	var characters;
	var listChars = [];

	$.ajax({
        url : 'https://rickandmortyapi.com/api/character',
        type : 'get',
        dataType : 'json',
        async: false,
        success : function(data){
        	characters = data["info"]["count"]
        },
        error: function(){ 
            alert('Ocorreu um erro, tente novamente'); 
        }
    })
	
	for(var i = 0; i < 4; i++){
		listChars[i] = numRandom(0, parseInt(characters, 10));
	}

  	$.ajax({
        url : 'https://rickandmortyapi.com/api/character/' + listChars,
        type : 'get',
        dataType : 'json',
        success : function(data){
            preencherTela(data);
        },
        error: function(){ 
            alert('Ocorreu um erro, tente novamente'); 
        }
    })
};

function preencherTela(dados){
	for(var i = 0; i < 4; i++){
		$("#nome" + i).html(dados[i]["name"]);
		$("#img" + i).attr('src', dados[i]["image"]);
	}
}

function numRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}