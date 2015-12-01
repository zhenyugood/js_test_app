var myId=new Array();
var i=0;
var myDelete=new Array();
function search(){
 console.log("hello search");
}



function addNewButton(){
    myId.push(i);
    var myText = text.value;
    var inputButton =document.createElement("input");
    var inputText =document.createElement("input");
    inputButton.type="button";
    inputButton.id="button"+i;
    inputButton.value="delete";
    inputText.type="text";
    inputText.id="text"+i;
    inputText.value=myText;
    var div = document.createElement("div");
    div.innerHTML="<br/>";  
    div.id="div"+i;           
    myDiv.appendChild(div);
    var mydiv=document.getElementById("div"+i);
    mydiv.appendChild(inputButton);
    mydiv.appendChild(inputText);
}



function removeButton(i){
 var elem = document.getElementById("div"+i);
          elem.parentNode.removeChild(elem);
          return false;
}



function prepareEventHandlers() {
    var add = document.getElementById("add");
    var text= document.getElementById("text");

    
    text.addEventListener("keyup",search);


    add.onclick =  function() {
    addNewButton();      
    myDelete[i] = document.getElementById("button"+i);
(function(i){
myDelete[i].onclick=function(){
         removeButton(i);
        };})(i)
     i++;
    }

} 


  
window.onload = function() {
    // prep anything we need to
    prepareEventHandlers();
};
