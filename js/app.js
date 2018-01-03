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
	var compte_a_rebours = document.getElementById("compte_a_rebours");

	// Création d'une virable pour avoir la date actuelle 
	//********************************************************
	var date_actuelle = new Date();
	console.log("Date: " + date_actuelle);

	// Création d'une variable pour avoir la date de l'évenement
	//********************************************************
	var date_evenement = new Date("Jan 1 00:00:00 2019");
	console.log("Evenement: " + date_evenement);


	/********************************************************
	 **   calcule de la différence entre les deux dates    **
	 ********************************************************/
	var totale_secondes = (date_evenement - date_actuelle) / 1000;          // Diviser par 1000 permet de savoir
	console.log("Secondes totale restante: " + totale_secondes);																		 // les secondes totales restants 

	// Nombre de jours
	//*******************************************************
	var jours = Math.floor(totale_secondes / ( 3600 * 24));
	console.log("Jours restant: " + jours);

	// Nombre d'heures
	//*******************************************************
	var heures = Math.floor(( totale_secondes - (jours * 3600 * 24 )) / 3600 );
	console.log("Heures restante: " + heures);

	// Nombre de minutes 
	//*******************************************************
	var minutes = Math.floor(( totale_secondes - ((jours * 3600 * 24 + heures * 3600))) / 60);
	console.log("Minutes restante: " + minutes);

	// Nombre de secondes 
	//*******************************************************
	var secondes = Math.floor(( totale_secondes - ((jours * 3600 * 24 + heures * 3600 + minutes * 60))));
	console.log("Minutes restante: " + secondes);

	// Affichage du compte à rebours dans la page html 
	// ******************************************************
	compte_a_rebours.innerHTML = jours + ' jours ' + heures + ' heures ' + minutes + ' minutes et ' + secondes + ' secondes.';

	// Rafraichissement de l'image toutes les secondes 
	//*******************************************************
	 var actualisation = setTimeout("countDown();", 1000);
}

countDown();