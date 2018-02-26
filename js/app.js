/*********************************************************
 ** Nom du fichier : app.js                             **
 ** Auteur : Grégory                                    **
 ** Date de création : 03/01/2018                       **
 ** Dernière mise à jour : 03/01/2018                   **
 ** Objectif : Permettre de lancer un compte à rebours  **
 *********************************************************/
function countDown () {
  // Création d'une variable pour Selection du span compte à rebours HTML
  //* *******************************************************
  var button_start = document.getElementById('button_start')
  button_start.addEventListener('click', function () {
    var html_jours = document.getElementById('id_jours')
    var html_heures = document.getElementById('id_heures')
    var html_minutes = document.getElementById('id_minutes')
    var html_secondes = document.getElementById('id_secondes')

    var input_heures = '0'// document.getElementById("input_heures").value;
    var input_minutes = '0'
    var input_secondes = '0'

    var input_jours = document.getElementById('input_jours').value
    var select_mois = document.getElementById('id_mois').value
    var input_annee = document.getElementById('id_annee').value
    var horaire

  // Création d'une virable pour avoir la date actuelle
  //* *******************************************************
    var date_actuelle = new Date()

  // Création d'une variable pour avoir la date de l'évenement
  //* *******************************************************
    var date_evenement = new Date('Jan' + ' ' + '1' + ' ' + input_heures + ':' + input_minutes + ':' + input_secondes + ' 2019')

  // Evenement au clicque
  // *******************************************************
    function reload () {
      input_heures = document.getElementById('input_heures').value
      date_evenement = new Date(select_mois + ' ' + input_jours.toString() + ' ' + input_heures + ' ' + input_annee.toString())
      console.log('hello')
    /********************************************************
     **   calcule de la différence entre les deux dates    **
     ********************************************************/
      var totale_secondes = (date_evenement - date_actuelle) / 1000
      var jours = Math.floor(totale_secondes / (3600 * 24))
      var heures = Math.floor((totale_secondes - (jours * 3600 * 24)) / 3600)
      var minutes = Math.floor((totale_secondes - ((jours * 3600 * 24 + heures * 3600))) / 60)
      var secondes = Math.floor((totale_secondes - ((jours * 3600 * 24 + heures * 3600 + minutes * 60))))

    // Affichage du compte à rebours dans la page html
    // ******************************************************
      html_jours.innerHTML = jours + ''
      html_heures.innerHTML = heures + ''
      html_minutes.innerHTML = minutes + ''
      html_secondes.innerHTML = secondes + ''
    }
    // reload()
    setInterval(reload, 1000)
  })

  // Rafraichissement de l'image toutes les secondes
  //* *****************************************************
}

countDown()
