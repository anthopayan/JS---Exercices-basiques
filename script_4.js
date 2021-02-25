const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  const entrepreneurs2 = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  const noms = [];
  const a = [];

function birth() {
    count = 0;
    console.log("Voici les entrepreneurs nés dans les années 70 :");
    while ( count < entrepreneurs.length){
        if (entrepreneurs[count].year < 1980 &&  entrepreneurs[count].year > 1969){
        console.log(entrepreneurs[count]);
    }
        count  +=1
      }
    
  }

function nomprenom() {
    count = 0;
 
    console.log("Voici l'array Prénoms et Noms des entrepreneurs :");
    while ( count < entrepreneurs.length ){

        
        noms.push({first: entrepreneurs[count].first, last: entrepreneurs[count].last});
        console.log(noms[count]);
        count  +=1;

        
        
      }
   
  }

function age() {
  
    console.log("Voici l'âge qu'aurait chaque inventeur aujourd'hui (en 2021):");
    count = 0;
    while ( count < entrepreneurs.length ){
        console.log(entrepreneurs[count].first, entrepreneurs[count].last, 2021 - entrepreneurs[count].year );
        count  +=1;  
    }
  }


  function alpha() {
    console.log("Voici le nom des entrepreneurs par ordre alphabétique:");
    entrepreneurs2.sort(function(a,b){
        var keyA = new String(a.last),
         keyB = new String(b.last);
        b= [keyA, keyB];
        b.sort();
        if (b[0]==keyA) return -1;
        if (b[0]==keyB) return 1;
        return 0;
    });
    for(var count = 0; count <entrepreneurs.length; count++){
        console.log(entrepreneurs2[count]);
      }
   
  }