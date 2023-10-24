// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {

    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d'une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // On crée l'élément img.
    const imageElement = document.createElement("img");
    // On accède à l'indice i de la liste pieces pour configurer la source de l'image.
    imageElement.src = pieces[i].image;
    // On crée l'élément du nom
    const nomElement = document.createElement("h2");
    // On accède à l'indice i de la liste pieces pour configurer le nom
    nomElement.innerText = pieces[i].nom;
    // On crée l'élément du prix
    const prixElement = document.createElement("p");
    // On accède à l'indice i de la liste pieces pour configurer le prix
    prixElement.innerText = `Prix: ${pieces[i].prix} FCFA (${pieces[i].prix < 35 ? "moins cher !" : "cher !"})`;
    // On crée l'élément de la catégorie
    const categorieElement = document.createElement("p");
    // Founir une valeur par défaut grâce à l'opérateur nullish (??)
    categorieElement.innerText = pieces[i].categorie ?? "(aucune catégorie)";
    // On crée l'élément de la description
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = pieces[i].description ?? "Pas de description pour le moment.";
    // On crée l'élément de la disponibilité
    const stockElement = document.createElement("p");
    stockElement.innerText = `${pieces[i].disponibilite === true ? "En stock" : "Rupture de stock"}`;

    // On rattache la balise article à la section fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache les éléments à pièceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
}

// Ajoutons un listner au bouton "Trier par prix croissants"
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    console.log(piecesOrdonnees);
});

//Ajoutons un listner sur le bouton Filtrer... pour n'afficher que les pièces dont le prix
// est inférieur ou égal à 35 FCFA
const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });

    console.log(piecesFiltrees)
});
