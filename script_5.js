const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  const books2 = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

function emprunt() {
    count = 0;
    f = 0;
    
    while ( count < books.length ){

        if (books[count].rented > 0){
            count  +=1;
        }

        else{
            count += 1;
            f +=1;
           
     }   
      }
        if (f === 0){
      console.log("Les livres ont tous été empruntés une fois");
    }
        else{
            console.log("Les livres n'ont pas tous été empruntés une fois");   
        }
  }

  function most() {
    max = 0;
    count =0;
    indice_max = 0;
    while ( count < books.length ){
      
      if (books[count].rented > max){
          max = (books[count].rented);
          indice_max = count;

      }
      count += 1;
    }
    console.log(books[indice_max]);
  }

  function least() {
    min = 100;
    count = 0;
    indice_min = 0;
    while ( count < books.length ){
      
      if (books[count].rented < min){
          min = (books[count].rented);
          indice_min = count;

      }
      count += 1;
    }
    console.log(books[indice_min]);
  }

   
  
  function show() {
    count = 0;
    indice = 0;
    
    while ( count < books.length ){

      if (books[count].id == 873495){
        indice = count; 
      }
      count  +=1;
    }
    console.log(books[indice]);
  }

  function supp() {
    count = 0;
    indice = 0;
    
    while ( count < books2.length ){

      if (books2[count].id == 133712){
        indice = count; 
      }
      count  +=1;
    }
   books2.splice(indice,1);
   console.log("Le livre ave l'id 133712 est bien supprimé");
  }

  function sortbook() {
    console.log("Voici les livres par ordre alphabétique:");
    books2.sort(function(a,b){
        var keyA = new String(a.title),
         keyB = new String(b.title);
        b= [keyA, keyB];
        b.sort();
        if (b[0]==keyA) return -1;
        if (b[0]==keyB) return 1;
        return 0;
    });
    for(var count = 0; count <books2.length; count++){
        console.log(books2[count]);
      }
  }
