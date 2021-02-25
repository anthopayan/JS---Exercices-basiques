function Factorial() {
let result = "";
let number;
while (true) {
    number = prompt('De quel nombre veux-tu calculer la factorielle ?');

    if (number<0) {
        console.log("Veuillez Saisir Un Entier Positif ou null");
    }
    if (number == 0) {
    result = 1;
    console.log("Le résultat est : ",result);
    }
    if (number>0) {
        result=1;
        var i=1;
        while(i<number){
            
	        result= result + result*i;
	        i=i+1;
        }
        console.log("Le résultat est : ",result);
    }
    
        else { // on rentre dans ce else si le nombre est vide (l'utilisateur ne saisit rien)
        break; // On quitte la boucle
    }
}
}