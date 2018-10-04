var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

  var udahDiSplit = []
  var udahDiSplit = input[3].split('/')

function dataHandling2(input){
  input.splice(1, 4, "Roman Alamsyah Elsharawy,")
  input.push ("Provinsi Bandar Lampung")
  input.push ("21/05/1989")
  input.push ("Pria")
  input.push ("SMA Internasional Metro")
  console.log(input)
  


switch(udahDiSplit[1]){
  case '01':  
    console.log("Januari"); 
    break;
  case '02':  
    console.log("Febuari"); 
    break;
  case '03':  
    console.log("Maret"); 
    break;
  case '04':  
    console.log("April"); 
    break;
  case '05':  
    console.log("Mei"); 
    break
  case '06':  
    console.log("Juni"); 
    break;
  case '07':  
    console.log("Juli"); 
    break;
  case '08':  
    console.log("Agustus"); 
    break;
  case '09':  
    console.log("September"); 
    break;
  case '10':  
    console.log("Oktober"); 
    break;
  case '11':  
    console.log("November"); 
    break;
  case '12':  
    console.log("Desember")
    break;
} 
}

var newString = udahDiSplit.join('-')
console.log(newString)

dataHandling2(input);


var baru = ''
for(var i = 0; i< udahDiSplit.length; i++){
  baru = udahDiSplit.sort(function(a, b){return b-a})
}console.log(baru)

console.log (input[1].split('',15).join(''));