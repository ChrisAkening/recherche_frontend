function calculerMoyenne(note1, note2, note3) {
    let moy =  (note1 + note2 + note3) / 3
  return moy
}

function estAdmis(moy) {
  return moy>= 10
}

function calculerPrixTTC(prixHT, tauxTVA = 0.18) {
    let TTC = prixHT + (prixHT*tauxTVA)
  return TTC 
}

const convertirEnMinutes = (heures) => heures * 60


console.log(calculerMoyenne(12, 14, 16))
console.log(calculerMoyenne(5, 11, 16))    

console.log(estAdmis(9))
console.log(estAdmis(10))

console.log(calculerPrixTTC(8))
console.log(calculerPrixTTC(10))

console.log(convertirEnMinutes(2))
console.log(convertirEnMinutes(9))