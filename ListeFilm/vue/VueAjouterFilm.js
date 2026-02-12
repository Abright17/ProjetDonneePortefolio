class VueAjouterFilm{
  constructor(){
    this.html = document.getElementById("html-vue-ajouter-film").innerHTML;
    this.actionAjouterFilm = null;
  }

  initialiserActionAjouterFilm(actionAjouterFilm){
    this.actionAjouterFilm = actionAjouterFilm;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
  }

  enregistrer(evenement){
    evenement.preventDefault();

    let titre = document.getElementById("film-titre").value;
    let realisateur = document.getElementById("film-realisateur").value;
    let duree = document.getElementById("film-duree").value;
    let description = document.getElementById("film-description").value;

    this.actionAjouterFilm (new Film(titre, realisateur,duree, description, null));

  }
  ajouter(film)
   {

    if(this.listeFilm.length > 0)
      film.id = this.listeFilm[this.listeFilm.length-1].id + 1;
    else
      film.id = 0;

    this.listeFilm[film.id] = film;
  }

}





















