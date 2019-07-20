function palindrome(){
    var pali="";
    pali=document.getElementById("input").value;
    pali===pali.split("").reverse().join("");
    if (pali===pali.split("").reverse().join("")){
    document.getElementById("text").innerHTML='"' + pali.toUpperCase()+"\" is a palindrome";
    }
    else{
      document.getElementById("text").innerHTML='"' + pali.toUpperCase()+'"' +" is not a palindrome";
    }
    
          }
          document.getElementById("input").addEventListener('keyup', palindrome);
         