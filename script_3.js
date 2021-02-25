function Mario() {
    let result = "";
    let number;
    let sign = "#"
    const space = " ";
    while (true) {
    number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    
    if (number<1) {
        console.log("Veuillez Saisir Un Entier supérieur à 0");
    }
    if (number>0) {
        r = number - 1;
        count = 0;
            while ( count < number){
            console.log(`${space.repeat(r)+ sign}`);
            sign += "#";
            r -= 1;
            count  +=1
          }
        
          

       
    }


    break; // On quitte la boucle
}

}