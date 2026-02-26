class FilmFirebaseDAO {
  constructor(dataBase) {
    this.dataBase = dataBase;
    this.collection = "films";
  }

  async lister() {
    const snap = await this.dataBase.collection(this.collection)
      .orderBy("titre")
      .get();

    const films = [];
    snap.forEach(doc => films.push(Film.depuisFirestore(doc)));
    return films;
  }

  async ajouter(film) {
    const data =
      film && typeof film.versObjetFirestore === "function"
        ? film.versObjetFirestore()
        : {
            titre: film.titre,
            realisateur: film.realisateur,
            duree: film.duree,
            description: film.description
          };

    const ref = await this.dataBase.collection(this.collection).add(data);
    film.id = ref.id;
    return film;
  }

  async trouverParId(id) {
    const doc = await this.dataBase.collection(this.collection).doc(id).get();
    if (!doc.exists) return null;
    return Film.depuisFirestore(doc);
  }

  async modifier(film) {
    if (!film.id) throw new Error("Film sans id (impossible de modifier).");
    const data =
      film && typeof film.versObjetFirestore === "function"
        ? film.versObjetFirestore()
        : {
            titre: film.titre,
            realisateur: film.realisateur,
            duree: film.duree,
            description: film.description
          };

    await this.dataBase.collection(this.collection).doc(film.id).set(data);
    return film;
  }

  async supprimer(id) {
    await this.dataBase.collection(this.collection).doc(id).delete();
  }
}
