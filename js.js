"use strict";
let INDEX=0;
const textSearch=document.getElementById("textSearch");
const myDiv=document.getElementById("myDiv");
const add = document.getElementById("add");
const text= document.getElementById("text");

function search(){
 //document.getElementById("div0").style.display="none"
        
  const li =  myDiv.getElementsByTagName("li");  
  for(let i=0;i<li.length;i++){
    const inText=li[i].getElementsByTagName("input"); 
    const reg=new RegExp(textSearch.value);
      for(let j=0;j<inText.length;j++){
        if(inText[j].type==="text"&&reg.test(inText[j].value)){
          li[i].style.display="";
         }
         else if(inText[j].type==="text"&&textSearch.value===" ") li[i].style.display="";
           else li[i].style.display="none";
  }
    }

   // for (i = 0; i < outdiv.length; i++) {  
 //       console.log(outdiv[i].getElementsByTagName("text").value); 
        
 //   }  
         
}

function setVisible(){
    const li = myDiv.getElementsByTagName("li");  
   for(let i=0;i<li.length;i++){
      li[i].style.display="";
    }
}


function addNewButton(){
  //  myId.push(i);
    const myText = text.value;
    clearText();
    const inputButton =document.createElement("input");
    const inputText =document.createElement("input");
    inputButton.type="button";
    inputButton.id="button"+INDEX;
    inputButton.value="delete";
    inputText.type="text";
    inputText.id="text"+INDEX;
    inputText.value=myText;
    const li = document.createElement("li");
    li.id="li"+INDEX;           
    myDiv.appendChild(li);
  //  var mydiv=document.getElementById("div"+i);
    li.appendChild(inputButton);
   li.appendChild(inputText);
    INDEX++;
    inputButton.onclick=function(){
    li.parentNode.removeChild(li);
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
