
function Hello_world() {
    console.log("Bonjour monde");
  }

  function Hello_name() {
    nom = "";
    while (true) {
      nom = prompt('Quel est ton prénom ?');
      
      if (nom != " ") {
        console.log(`Bonjour ${nom}`);
      }
      break; // On quitte la boucle
    } 
  }
