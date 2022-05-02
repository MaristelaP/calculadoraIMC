var idade = document.getElementById("age");
var altura = document.getElementById("height");
var peso = document.getElementById("weight");
var masc = document.getElementById("masc");
var fem = document.getElementById("fem");
var form = document.getElementById("form");

function validateForm(){
    if(idade.value=='' || altura.value=='' || peso.value=='' || (masc.checked==false && fem.checked==false) ) {
       alert("Por favor, preencha todos os campos.");
       document.getElementById("submit").removeEventListener("click")
   }
}