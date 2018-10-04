const palindromes = function() {

}


function Palindrome(stringParam){
//create array of WORDS
	let stringArray = stringParam.split(" ");
  let reverseArray = stringArray; 
  let straightString = stringArray.join('');
  reverseArray.reverse(); 
  let reverseString = reverseArray.join(''); 
  
  reverseString.toLowerCase();
  straightString.toLowerCase();
  
  if(reverseString === straightString){
  	console.log(straightString + " === " + reverseString);
    console.log("Palindrome")
  	return true;
  }
  else{
  	console.log(straightString + " != " + reverseString);
  	console.log("Not a Palindrome");
  	return false;
  }
  
  
  

}

module.exports = palindromes
