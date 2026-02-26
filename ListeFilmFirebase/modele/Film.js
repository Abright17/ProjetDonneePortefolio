class Film {
  constructor(titre, realisateur, duree, description, id = null) {
    this.id = id;
    this.titre = titre;
    this.realisateur = realisateur;
    this.duree = duree;
    this.description = description;
  }

  versObjetFirestore() {
    return {
      titre: this.titre,
      realisateur: this.realisateur,
      duree: this.duree,
      description: this.description
    };
  }

  static depuisFirestore(doc) {
    const data = doc.data();
    return new Film(
      data.titre,
      data.realisateur,
      data.duree,
      data.description,
      doc.id
    );
  }
}
