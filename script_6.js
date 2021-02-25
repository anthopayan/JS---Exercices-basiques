const codegen = [
    { codon: 'UCU', aa: 'Sérine'},
    { codon: 'UCC', aa: 'Sérine'},
    { codon: 'UCA', aa: 'Sérine'},
    { codon: 'UCG', aa: 'Sérine'},
    { codon: 'AGU', aa: 'Sérine'},
    { codon: 'AGC', aa: 'Sérine'},
    { codon: 'CCU', aa: 'Proline'},
    { codon: 'CCC', aa: 'Proline'},
    { codon: 'CCA', aa: 'Proline'},
    { codon: 'CCG', aa: 'Proline'},
    { codon: 'UUA', aa: 'Leucine'},
    { codon: 'UUG', aa: 'Leucine'},
    { codon: 'UUU', aa: 'Phénylalanine'},
    { codon: 'UUC', aa: 'Phénylalanine'},
    { codon: 'CGU', aa: 'Arginine'},
    { codon: 'CGC', aa: 'Arginine'},
    { codon: 'CGA', aa: 'Arginine'},
    { codon: 'CGG', aa: 'Arginine'},
    { codon: 'AGA', aa: 'Arginine'},
    { codon: 'AGG', aa: 'Arginine'},
    { codon: 'UAU', aa: 'Tyrosine'},
    { codon: 'UAC', aa: 'Tyrosine'}
  ];

  function traduction(string) {
    ls = string.length;
    groupe = ls / 3;
    count =0;
    lac =[];

    while ( count < groupe ){
     codon = string.substr(3*count,3);
     count2 = 0;
     while ( count2 < codegen.length ){
      if (codegen[count2].codon == codon){
          lac.push(codegen[count2].aa);
      }
      count2 +=1;
      }
      count += 1;
    }
    console.log(lac.join("-"))
  }