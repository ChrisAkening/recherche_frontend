const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];
const etudiantBase = { nom: "Diop", filiere: "IAGE", niveau: "L2" };

const  tousLesEtudiants = [...groupeA,...groupeB]
console.log(tousLesEtudiants)

const copieA = [...groupeA,"Cheikh"]
console.log(copieA)
console.log(groupeA)

const etudiantComplet = {...etudiantBase, age:22 , ville:"Dakar"}
console.log(etudiantComplet)

const L3= {...etudiantBase,niveau:"L3"}
console.log(L3.niveau)
console.log(etudiantBase.niveau)

const coordonnees = { ville: "Dakar", telephone: "771784309" };
const contact = { ville: "KM", email:" christianakeningd@gmail.com" }

const profil = { ...coordonnees, ...contact }
console.log(profil)


