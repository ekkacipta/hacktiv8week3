function palindrome(kata) {
  var hasilKata = '';
  for (var i=kata.length-1; i>=0; i--){
    hasilKata += kata[i];
  }
   return hasilKata === kata;
}
  console.log(palindrome('katak')); 
  console.log(palindrome('blanket')); 
  console.log(palindrome('civic')); 
  console.log(palindrome('kasur rusak')); 
  console.log(palindrome('mister')); 