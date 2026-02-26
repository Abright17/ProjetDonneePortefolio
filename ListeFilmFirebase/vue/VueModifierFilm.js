class VueModifierFilm {
  constructor() {
    this.html = document.getElementById("html-vue-modifier-film").innerHTML;
    this.actionModifierFilm = null;
    this.film = null;
  }

  initialiserActionModifierFilm(actionModifierFilm) {
    this.actionModifierFilm = actionModifierFilm;
  }

  initialiserFilm(film) {
    this.film = film;
  }

  afficher() {

   document.getElementsByTagName("body")[0].innerHTML = this.html;


    document.getElementById("film-titre").value = this.film.titre;
    document.getElementById("film-realisateur").value = this.film.realisateur;
    document.getElementById("film-duree").innerHTML = this.film.duree;
    document.getElementById("film-description").value = this.film.description;

    document
      .getElementById("action-enregistrer")
      .addEventListener("click", (evenement) => this.enregistrer(evenement));
  }

  enregistrer(evenement) {
    evenement.preventDefault();


    const titre = document.getElementById("film-titre").value;
    const realisateur = document.getElementById("film-realisateur").value;
    const duree = document.getElementById("film-duree").value;
    const description = document.getElementById("film-description").value;


    this.actionModifierFilm(
      new Film(titre, realisateur,duree, description, this.film.id)
    );
  }
}
