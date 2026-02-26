class VueAjouterFilm {
  constructor() {
    this.html = document.getElementById("html-vue-ajouter-film").innerHTML;
    this.actionAjouterFilm = null;
  }

  initialiserActionAjouterFilm(actionAjouterFilm) {
    this.actionAjouterFilm = actionAjouterFilm;
  }

  afficher() {
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    document
      .getElementById("formulaire-ajouter")
      .addEventListener("submit", (evenement) => this.enregistrer(evenement));
  }

  enregistrer(evenement) {
    evenement.preventDefault();

    const titre = document.getElementById("film-titre").value;
    const realisateur = document.getElementById("film-realisateur").value;
    const duree = document.getElementById("film-duree").value;
    const description = document.getElementById("film-description").value;

    const film = new Film(titre, realisateur, duree, description, null);

    // Envoie au Application.js
    this.actionAjouterFilm(film);
  }
}
