console.log('Parsing String...') //DEBUG - Remove for production

// let string = "Address: 1625 W Lane Ave, Upper Arlington, OH 43221";
let string = "Hours: Open ⋅ Closes 9PM · See more hours";
console.log(parseString(string));

function parseString(string){
  
  let stringArr = string.split(':');
  
  let key = stringArr[0];

  if(key === 'Address'){
    return stringArr[1];
  }else{
    
    stringArr.forEach(element => {
      let testArr = element.split('⋅');
      console.log(testArr.length);
      //   testArr.forEach(element => {
      //     let secondPass =  element.split('⋅');
      //       console.log(secondPass);
      // });
    });
    
    // return hours;
  }
  
}