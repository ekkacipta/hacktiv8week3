function palindrome(name){
    var balik = [...name].reverse().join('')
    return name === balik
  }
  
  console.log(palindrome('katak')); 
  console.log(palindrome('blanket')); 
  console.log(palindrome('civic')); 
  console.log(palindrome('kasur rusak')); 
  console.log(palindrome('mister')); 