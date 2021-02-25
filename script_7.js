function Heybot() {
var phr;
while (true) {
    phr = prompt('Ecris une phrase :');
    letter = phr.substr(phr.length-1,1);
    mphr = phr.toUpperCase();
    

    if (letter === "?") {
        console.log('Ouais Ouais...');
    } 

    if (phr == mphr && phr != "") {
        console.log('Pwa, calme-toi...');
    } 

    if (phr.includes("Fortnite") || phr.includes("fortnite")) {
        console.log("on s' fait une partie soum-soum ?");
    } 

    if (phr == "") {
        console.log("t'es en PLS ?");
    } 

    if (phr != "" && phr != mphr && letter != "?" && (phr.includes("Fortnite") || phr.includes("fortnite") == false)){
        console.log("balek");
    }

    else {
        break; // On quitte la boucle
        
        
    }
    
}
}
