const etudiantL2 = {
  id: 104,
  prenom: "Aminata",
  nom: "Fall",
  notes: [13, 16, 12],
  filiere: "IAGE"
}

function extraireIdentite(etudiant) {
const {prenom,nom,filiere}=etudiant
return { prenom, nom, filiere }
}

console.log(extraireIdentite(etudiantL2))

function calculerMoyenneNotes(notes) {
  if (notes.length === 0) {
    return 0
  }
  let somme = 0
  for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i]
  }
  return somme / notes.length
}

console.log(calculerMoyenneNotes([13, 16, 12]))
console.log(calculerMoyenneNotes([]))   

function ajouterNote(etudiant, nouvelleNote) {
  const nouvellesNotes = [...etudiant.notes, nouvelleNote];
  const nouvelEtudiant = { ...etudiant, notes: nouvellesNotes };
  return nouvelEtudiant;
}

const etudiantAvecNote = ajouterNote(etudiantL2, 18)
console.log(etudiantAvecNote.notes)

function creerResume(etudiant, ...options) {
  const identite = extraireIdentite(etudiant);
  const moyenne = calculerMoyenneNotes(etudiant.notes);
  return { identite, moyenne, options };
}

console.log(creerResume(etudiantL2, "formation", "master"))