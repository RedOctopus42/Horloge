/****************/
/** horloge.js **/
/****************/

/*** fonction de rotation des éléments en css crossBrowser ***/
function rotation(div, degres){
	$("#"+div).css({
          '-moz-transform':'rotate('+degres+'deg)',
          '-webkit-transform':'rotate('+degres+'deg)',
          '-o-transform':'rotate('+degres+'deg)',
          '-ms-transform':'rotate('+degres+'deg)',
          'transform': 'rotate('+degres+'deg)'
     });
} 

/*** fonction principale ***/
function showHorloge(jour, mois, secondes){
	$("#horloge").append("<div id='horlogeContenu'></div>");
	var hauteur = $("#horloge").width()-((6.67/100)*$("#horloge").width());
	$("#horloge").css({"height": hauteur});
	$("#horlogeContenu").append("<div id='cercleBase'></div>");
	$("#horlogeContenu").append("<div id='trotteuse'></div>");
	$("#horlogeContenu").append("<div id='loupe'></div>");
	$("#horlogeContenu").append("<div id='logo'></div>");
	$("#horlogeContenu").append("<div id='texte'>Retour à l'esprit pionnier dans...</div>");
	$("#horlogeContenu").append("<div id='cadran'></div>");


	/*** calibrer trotteuse ***/
	var timeSec = secondes*4;
	rotation('trotteuse', timeSec);
	if(mois == 1){ var departLoupe = 0;}
	if(mois == 2){ var departLoupe = 0;}
	if(mois == 3){ var departLoupe = 0;}
	if(mois == 4){ var departLoupe = (jour*1.5); if(jour == 31){jour = 30;}}
	if(mois == 5){ var departLoupe = (((mois-4)*30)*1.5)+(jour*1.5); if(jour == 31){jour = 30;}}
	if(mois == 6){ var departLoupe = (((mois-4)*30)*1.5)+(jour*1.5); if(jour == 31){jour = 30;}}
	if(mois == 7){ var departLoupe = (((mois-4)*30)*1.5)+(jour*1.5);}
	if(mois == 8){ var departLoupe = (((mois-4)*30)*1.5)+(jour*1.5);}
	if(mois == 9){ var departLoupe = (((mois-4)*30)*1.5)+(jour*1.5); if(jour == 31){jour = 30;}}
	if(mois == 10){ var departLoupe = 0;}
	if(mois == 11){ var departLoupe = 0;}
	if(mois == 12){ var departLoupe = 0;}

	rotation('loupe', departLoupe);


	for(i=0;i<departLoupe/1.5;i++){
		$("#horlogeContenu").append("<div id='indicateur"+i+"' class='indicateur'></div>");
		rotation('indicateur'+i, 1.5*i);
	}

	/*** trotteuse pour les secondes ***/
	setInterval(
		function (){
			rotation('trotteuse', timeSec);
			timeSec += 1.5;
		}, 1000
	);


	/*** calcul et affichage du temps restant ***/
    var date_actuelle = new Date();
    var annee = date_actuelle.getFullYear();

    var fin = new Date(annee, 9, 1, 0, 0, 0);
				
	if (fin.getTime() < date_actuelle.getTime()){fin = new Date(++annee, 9, 1, 0, 0, 0);}
    var tps_restant = fin.getTime() - date_actuelle.getTime();

	var s_restantes = tps_restant / 1000;
	var i_restantes = s_restantes / 60;
	var H_restantes = i_restantes / 60;
	var d_restants = H_restantes / 24;
    s_restantes = Math.floor(s_restantes % 60);
    i_restantes = Math.floor(i_restantes % 60);
    H_restantes = Math.floor(H_restantes % 24);
    d_restants = Math.floor(d_restants);

	$("#cadran").append("<p>"+d_restants+"J // "+H_restantes+"h"+i_restantes+"</p>");
};
