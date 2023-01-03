module.exports = function toReadable (num) {
  const basicNumbers= {
    0:'zero',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    15:'fifteen',
    20:'twenty',
    30:'thirty',
    40:'forty',
    50:'fifty',
    60:'sixty',
    70:'seventy',
    80:'eighty',
    90:'ninety',
    100:'one hundred'
  }

let number = num.toString();
   
let numLength = number.length;
let keysArr = Object.keys(basicNumbers);
  
for (const item of keysArr){
  if (number==item){
      return basicNumbers[item]
  }    
 }


  if (numLength==2){
      if (number[0]==1){
          // console.log('logged')
          for (const item of keysArr){
              if (`${number[0]}`+`${number[1]}`==18){
                  console.log('logged')
                  return basicNumbers[number[1]]+'een';
              } else if (number[1]==item){
                  return basicNumbers[item]+'teen';
              }
          }
      } else if (number[0]!==1){
          // console.log('logged')
          for (const item of keysArr){
              if (number[1]==item){
                  return basicNumbers[number[0]+0]+` ${basicNumbers[item]}`;
              }
          }
     
      }
  }

  if (numLength==3){
        if (number[1]==1){
            for (const item of keysArr){
                if((`${number[1]}${number[2]}`)==item) {
                    console.log(`${number[1]}`+`${number[2]}`)
                    return basicNumbers[number[0]]+' hundred ' + basicNumbers[`${number[1]}`+`${number[2]}`] ;
                } else if((`${number[1]}${number[2]}`)==18) {
                    return basicNumbers[number[0]]+' hundred ' + basicNumbers[number[2]]+'een' ;
                }          
            }

            console.log(`${number[1]}${number[2]}`+'v2')
            return basicNumbers[number[0]]+' hundred ' + basicNumbers[number[2]]+'teen'; 
        
        }else if (number[1]!==1){
            for (const item2 of keysArr){
                if (number[1]==0 && number[2]==0){
                    return basicNumbers[number[0]]+' hundred';
                } else if(number[2]==item2 && number[2]!=='0'){
                return basicNumbers[number[0]]+' hundred ' +basicNumbers[number[1]+0]+` ${basicNumbers[number[2]]}`;
                } else if (number[2]==item2 && number[2]=='0'){
                return basicNumbers[number[0]]+' hundred ' +basicNumbers[number[1]+0];
                } else if (number[1]==0){
                    return basicNumbers[number[0]]+' hundred' +` ${basicNumbers[number[2]]}`;
                } 
                
            }
        }
            
    }  
}
