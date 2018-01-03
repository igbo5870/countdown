/*********************************************************
 ** Nom du fichier : app.js                             **
 ** Auteur : Grégory                                    **
 ** Date de création : 03/01/2018                       **
 ** Dernière mise à jour : 03/01/2018                   **
 ** Objectif : Permettre de lancer un compte à rebours  **
 *********************************************************/
function countDown(){
	// Création d'une variable pour Selection du span compte à rebours HTML
	//********************************************************
	var html_jours = document.getElementById("id_jours");
	var html_heures = document.getElementById("id_heures");
	var html_minutes = document.getElementById("id_minutes");
	var html_secondes = document.getElementById("id_secondes");

	// Création d'une virable pour avoir la date actuelle 
	//********************************************************
	var date_actuelle = new Date();

	// Création d'une variable pour avoir la date de l'évenement
	//********************************************************
	var date_evenement = new Date("Jan 1 00:00:00 2019");

	/********************************************************
	 **   calcule de la différence entre les deux dates    **
	 ********************************************************/
	var totale_secondes = (date_evenement - date_actuelle) / 1000;          // Diviser par 1000 permet de savoir																		 // les secondes totales restants 

	// Nombre de jours
	//*******************************************************
	var jours = Math.floor(totale_secondes / ( 3600 * 24));

	// Nombre d'heures
	//*******************************************************
	var heures = Math.floor(( totale_secondes - (jours * 3600 * 24 )) / 3600 );

	// Nombre de minutes 
	//*******************************************************
	var minutes = Math.floor(( totale_secondes - ((jours * 3600 * 24 + heures * 3600))) / 60);

	// Nombre de secondes 
	//*******************************************************
	var secondes = Math.floor(( totale_secondes - ((jours * 3600 * 24 + heures * 3600 + minutes * 60))));

	// Affichage du compte à rebours dans la page html 
	// ******************************************************
	//html_jours.innerHTML = jours + '';
	html_heures.innerHTML = heures + '';
	html_minutes.innerHTML =  minutes + '';
	html_secondes.innerHTML =  secondes + '';

	// Rafraichissement de l'image toutes les secondes 
	//*******************************************************
	 var actualisation = setTimeout("countDown();", 1000);
}

countDown();