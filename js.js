"use strict";
let i=0;
const textSearch=document.getElementById("textSearch");
const myDiv=document.getElementById("myDiv");
const add = document.getElementById("add");
const text= document.getElementById("text");

function search(){
 //document.getElementById("div0").style.display="none"
        
const outdiv =  myDiv.getElementsByTagName("div");  
  for(let i=0;i<outdiv.length;i++){
    const inText=outdiv[i].getElementsByTagName("input"); 
    const reg=new RegExp(textSearch.value);
      for(let j=0;j<inText.length;j++){
        if(inText[j].type==="text"&&reg.test(inText[j].value)){
          outdiv[i].style.display="";
         }
         else if(inText[j].type==="text"&&textSearch.value===" ") outdiv[i].style.display="";
           else outdiv[i].style.display="none";
         }
    }

   // for (i = 0; i < outdiv.length; i++) {  
 //       console.log(outdiv[i].getElementsByTagName("text").value); 
        
 //   }  
         
}

function setVisible(){
    const outdiv = myDiv.getElementsByTagName("div");  
   for(let i=0;i<outdiv.length;i++){
      outdiv[i].style.display="";
    }
}


function addNewButton(){
  //  myId.push(i);
    const myText = text.value;
    clearText();
    const inputButton =document.createElement("input");
    const inputText =document.createElement("input");
    inputButton.type="button";
    inputButton.id="button"+i;
    inputButton.value="delete";
    inputText.type="text";
    inputText.id="text"+i;
    inputText.value=myText;
    const div = document.createElement("div");
    div.innerHTML="<br/>";  
    div.id="div"+i;           
    myDiv.appendChild(div);
  //  var mydiv=document.getElementById("div"+i);
    div.appendChild(inputButton);
    div.appendChild(inputText);
    i++;
    inputButton.onclick=function(){
    div.parentNode.removeChild(div);
    };
}


function clearText(){
  text.value="";
}


function keyPress(){
         if (event.keyCode == 13 ) {
            addNewButton();
         }
}

//function removeButton(i){
// var elem = document.getElementById("div"+i);
//          elem.parentNode.removeChild(elem);
 //         return false;
//}


function prepareEventHandlers() {
    textSearch.addEventListener("click",clearText);
    textSearch.addEventListener("keyup",search);
    text.addEventListener("keyup",keyPress);
    add.onclick =  function() {
    addNewButton();  
/*    myDelete[i] = document.getElementById("button"+i);
(function(i){
myDelete[i].onclick=function(){
         removeButton(i);
        };})(i) */
    };
} 


  
window.onload = function() {
    prepareEventHandlers();
};
