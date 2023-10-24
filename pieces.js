// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

//Création des balises html dans notre code grâce à document.createElement
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
// Ici on utilise un template strings avec les backticks "`"
//prixElement.innerText = `Prix: ${article.prix} FCFA`;
prixElement.innerText = `Prix: ${article.prix} FCFA (${article.prix < 35 ? "moins cher !" : "cher !"})`;

const categorieElement = document.createElement("p");
// Founir une valeur par défaut grâce à l'opérateur nullish (??)
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
const stockElement = document.createElement("p")
stockElement.innerText = `${article.disponibilite === true ? "En stock" : "Rupture de stock"}`

// Récupération de la balise parent à laquelle seront rattachées les balise créées
const sectionFiches = document.querySelector(".fiches");
// Ensuite on fait le rattachemet grâce à "appendChild"
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);
