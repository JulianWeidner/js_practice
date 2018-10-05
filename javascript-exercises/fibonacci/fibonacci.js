//const fibonacci = function() {}
function fibonacci(indexLocation){
  if(indexLocation < 0){
  	return "OOPS";
  }
  let fibArray = [0,1];
  
  for(let i = 0; i < indexLocation - 1; i++){
    let fibNum = fibArray[i] + fibArray[i + 1];
    fibArray.push(fibNum);
   }
   return (fibArray[indexLocation]);
}
//console.log(fibonacci(-23));




module.exports = fibonacci
