
var HTMLEditer = function(){
  this.INDEX = 0;
  this.textSearch = document.getElementById("textSearch");
  this.myDiv = document.getElementById("myDiv");
  this.addButton = document.getElementById("addButton");
  this.textInput = document.getElementById("textInput");
   //call back functions are as fallowed
  
  this.addingNewButton = function(myEditer,cb){
    setTimeout(function(){
      console.log("button added");
      cb(myEditer);
    },2000);
  };
  
  this.searching = function(cb){
    setTimeout(function(){
      cb();
      console.log("seaching");
    },2000);
  };
  
  this.clearMyInputText = function(){
    this.textInput.value = "";
  };
  
    this.addNewButton = function(myEditer){
    var myInputText = this.textInput.value;
    var newButton = document.createElement("input");
    var newText = document.createElement("input");
    newButton.type = "button";
    newButton.id = "button"+this.INDEX;
    newButton.value ="delete";
    newText.type = "text";
    newText.id = "text"+this.INDEX;
    newText.value = myInputText;
    var li = document.createElement("li");
    li.id = "li"+this.INDEX;           
    this.myDiv.appendChild(li);
    li.appendChild(newButton);
    li.appendChild(newText);
    this.INDEX++;
    newButton.onclick=function(){
    li.parentNode.removeChild(li);
    };
    myEditer.clearMyInputText();
  };
  
  this.search = function(){
    var listOfButtonAndText =  myDiv.querySelectorAll("li>input");
    var reg=new RegExp(textSearch.value);
    for(var numInList=0;numInList<listOfButtonAndText.length;numInList++){
      if(listOfButtonAndText[numInList].type==="text"&&reg.test(listOfButtonAndText[numInList].value)){
        listOfButtonAndText[numInList].parentElement.style.display="";
      }
      else listOfButtonAndText[numInList].parentElement.style.display="none";
    }
  };
  
 
  
};



function prepareEventHandlers() {
  var myEditer = new  HTMLEditer();
  myEditer.addButton.onclick = function(){
  myEditer.addingNewButton(myEditer,myEditer.addNewButton);
  };
 myEditer.textSearch.addEventListener("keydown",function(){
   myEditer.searching(myEditer.search);
   });

}













window.onload = function() {
    prepareEventHandlers();
};  
