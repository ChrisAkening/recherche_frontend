function additionner(...nombres) {
  let somme = 0
  for (let i = 0; i < nombres.length; i++) {
    somme = somme + nombres[i]
  }
  return somme
}
console.log(additionner(2,5))
console.log (additionner(6,2,9,5,1))

function afficherPremierEtAutres(premier,...autres){
console.log("Premier :", premier)
console.log("Autres :", autres)
}
afficherPremierEtAutres(4, 7, 8)

function creerFiche(nom, filiere, ...competences) {
  return { nom, filiere, competences };
}
console.log(creerFiche("Awa", "IAGE", "JavaScript", "SQL"))

// Le paramètre Rest doit être placé à la fin car il prend tout ce qui reste des arguments.

