function Heybot() {
var phr;

while (true) {
    phr = prompt('Ecris une phrase :');
    //a = phr.length + 1;
    letter = phr.substr(phr.length-1,1);
    
    if (letter === "?") {
        console.log('Ouais Ouais...');
    } 
    else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        break; // On quitte la boucle
    }
}
}
