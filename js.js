
var i=0;

    function search(){
 //document.getElementById("div0").style.display="none"
        
    var getdiv = document.getElementById("myDiv");  
    var outdiv = getdiv.getElementsByTagName("div");  
    for(var i=0;i<outdiv.length;i++){
       var inText=outdiv[i].getElementsByTagName("input"); 
       var reg=new RegExp(document.getElementById("textSearch").value);
       for(var j=0;j<inText.length;j++){
       if(inText[j].type=="text"&&reg.test(inText[j].value)){
          outdiv[i].style.display="";
    }
       else if(inText[j].type=="text"&&document.getElementById("textSearch").value==" ") outdiv[i].style.display="";
    else outdiv[i].style.display="none";
  }
    }

   // for (i = 0; i < outdiv.length; i++) {  
 //       console.log(outdiv[i].getElementsByTagName("text").value); 
        
 //   }  
         
}

function setVisible(){
   var getdiv = document.getElementById("myDiv");  
    var outdiv = getdiv.getElementsByTagName("div");  
   for(var i=0;i<outdiv.length;i++){
      outdiv[i].style.display="";
    }
}


function addNewButton(){
  //  myId.push(i);
    var myText = text.value;
    clearText();
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
  //  var mydiv=document.getElementById("div"+i);
    div.appendChild(inputButton);
    div.appendChild(inputText);
    inputButton.onclick=function(){
    div.parentNode.removeChild(div);
    };
}


function clearText(){
  var text= document.getElementById("text");
  text.value="";
}


function keyPress(){
  var e = window.event || arguments.callee.caller.arguments[0];
         if (e && e.keyCode == 13 ) {
            addNewButton();
         }
}

//function removeButton(i){
// var elem = document.getElementById("div"+i);
//          elem.parentNode.removeChild(elem);
 //         return false;
//}


function prepareEventHandlers() {
    var add = document.getElementById("add");
    var text= document.getElementById("text");
    var textSearch= document.getElementById("textSearch");
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
  i++;
    };
} 


  
window.onload = function() {
    // prep anything we need to
    prepareEventHandlers();
};
