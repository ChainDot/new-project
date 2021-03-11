const chalk = require('chalk')

// liste de prénoms, recuperer pour chacun des prenoms le nombre de lettres, 
// si le nombre de lettre est pair la premiere lettre du prenom doit en majuscule et en couleur bleu. 
// si impair la derniere lettre du prenom doit etre en majuscule et de couleur verte 

const arrayFirstname = ['dotcycle', 'amine', 'bsk', 'romain']
 


for (let i = 0; i < arrayFirstname.length; i++){
  let tmp = arrayFirstname[i]
  let nom = ''
  if(arrayFirstname[i].length % 2 !== 0){ 
    for (let j = 0; j < arrayFirstname[i].length - 1; ++j){
      nom += tmp[j]
     }
     nom += tmp[tmp.length - 1].toUpperCase()
     console.log(chalk.green(nom))
    } else {
      nom += tmp[0].toUpperCase()
      for (let j = 1; j < arrayFirstname[i].length; ++j){
        nom += tmp[j]
      }
      console.log(chalk.blue(nom))
 }
}



