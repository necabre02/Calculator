var racunica = document.querySelector(".racunica");
var btn = document.querySelectorAll("btn");
 var equal = document.querySelector(".equal");

 var tacka = document.querySelector(".tacka");
 var levazagrada = document.querySelector(".levazagrada");
 var desnazagrada = document.querySelector(".desnazagrada");


 var one = document.querySelector(".o");
 var two = document.querySelector(".t");
 var three = document.querySelector(".th");
 var four = document.querySelector(".f");
 var five = document.querySelector(".fi");
 var six = document.querySelector(".s");
 var seven = document.querySelector(".se");
 var eight = document.querySelector(".e");
 var nine = document.querySelector(".n");
 var zero = document.querySelector(".z");
 var c = document.querySelector(".c");

 var divide = document.querySelector(".divide");
 var multiply = document.querySelector(".multiply");
 var plus = document.querySelector(".plus");
 var minus = document.querySelector(".minus");
 var backspace = document.querySelector(".backspace")


var a;
 equal.addEventListener('click', function  alo(){
 a=racunica.textContent;
 console.log(a);
 b=eval(a);
 console.log(b);

 racunica.innerHTML= b ;
//  racunica.innerHTML=  "Its" + " " + b + " " + "you stupid idiot";
//  if(b=Infinity){
//    alert("NE DELI SE NULOM SPECIJALCU") ;
   
//     };

});


one.addEventListener('click', function (){
    racunica.innerHTML+= "1";
    
});

two.addEventListener('click', function (){
        racunica.innerHTML+= "2";
        
});
three.addEventListener('click', function (){
    racunica.innerHTML+= "3";
    
});
four.addEventListener('click', function (){
    racunica.innerHTML+= "4";
    
});
five.addEventListener('click', function (){
    racunica.innerHTML+= "5";
    
});
six.addEventListener('click', function (){
    racunica.innerHTML+= "6";
    
});
seven.addEventListener('click', function (){
    racunica.innerHTML+= "7";
    
});
eight.addEventListener('click', function (){
    racunica.innerHTML+= "8";
    
});
nine.addEventListener('click', function (){
    racunica.innerHTML+= "9";
    
});
zero.addEventListener('click', function (){
    racunica.innerHTML+= "0";
    
});
plus.addEventListener('click', function (){
    racunica.innerHTML+= "+";
    
});
minus.addEventListener('click', function (){
    racunica.innerHTML+= "-";
    
});
c.addEventListener('click', function a(){
    racunica.innerHTML= "";
    
});
divide.addEventListener('click', function (){
    racunica.innerHTML+= "/";
    
});
multiply.addEventListener('click', function (){
    racunica.innerHTML+= "*";
    
});

tacka.addEventListener('click', function (){
    racunica.innerHTML+= ".";
    
});
levazagrada.addEventListener('click', function (){
    racunica.innerHTML+= "(";
    
});
desnazagrada.addEventListener('click', function (){
    racunica.innerHTML+= ")";
    
});


backspace.addEventListener('click', function (){
    let x = racunica.innerHTML;
    racunica.innerHTML=x.slice(0, -1);
   
    // racunica.substring(0, racunica.length - 1)
});

