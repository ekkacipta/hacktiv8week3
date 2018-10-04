function angkaPalindrome(num) {

    function Palindrome1(n) {
      var atas = n.toString()
      var bawah = []
      for (var i = atas.length - 1; i >= 0; i--) {
        bawah.push(atas[i])
      }
      bawah = bawah.join('')
      return atas === bawah
    }
    var tambah1 = num + 1
    while (true) {
      if (Palindrome1(tambah1)) {
        return tambah1
      } else {
        tambah1 += 1
      }
    }
  
  }
  
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  