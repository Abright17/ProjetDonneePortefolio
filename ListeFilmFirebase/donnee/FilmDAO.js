class FilmDAO {
  constructor() {
   /* this.listeFilm = [
      { titre: "Inception", realisateur: "Christopher Nolan", description: "Un film sur les rêves et la réalité.", id: 0 },
      { titre: "Interstellar", realisateur: "Christopher Nolan", description: "Une épopée spatiale et humaine.", id: 1 },
      { titre: "Le Seigneur des Anneaux", realisateur: "Peter Jackson", description: "Une quête épique en Terre du Milieu.", id: 2 }
    ];*/
    this.listeFilm = [];
  }

  lister() {
    if(localStorage['film']){
      this.listeFilm = JSON.parse(localStorage['film']);
    }
    for (let position in this.listeFilm) {
      let film = new Film(
        this.listeFilm[position].titre,
        this.listeFilm[position].realisateur,
        this.listeFilm[position].duree,
        this.listeFilm[position].description,
        this.listeFilm[position].id
      );

      this.listeFilm[film.id] = film;
    }

    return this.listeFilm;
  }

  ajouter(film) {
    if (this.listeFilm.length > 0)
      film.id = this.listeFilm[this.listeFilm.length - 1].id + 1;
    else
      film.id = 0;

    this.listeFilm[film.id] = film;
    localStorage['film'] = JSON.stringify(this.listeFilm);
    console.log("JSON.stringify(this.listeFilm) : " + JSON.stringify(this.listeFilm));
  }
  modifier(filmModifie) {
    let index = this.listeFilm.findIndex(f => f.id === filmModifie.id);

    if (index !== -1) {
      this.listeFilm[index] = filmModifie;
    } else {
      console.warn(`Film avec l'id ${filmModifie.id} introuvable.`);
    }
    localStorage['film'] = JSON.stringify(this.listeFilm);
  }
}
