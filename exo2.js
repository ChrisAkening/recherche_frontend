
const etudiant ={
    id:2026,
    nom:"D",
    prenom:"Chris",
    filiere:"GL",
    niveau:"L1",
    ville:"Dakar"
}

const {nom,prenom,filiere}=etudiant
const{niveau:classe}=etudiant
const tab=[15,11,17,13,16]
const [T1,T2,,,T5]=tab
const [n1,,n3]=tab

const { email = "christianakeningd@gmail.com" } = etudiant
console.log(email);
console.log(`Salut,je me nomme ${prenom} ${nom} et je suis en ${classe} ${filiere} `)