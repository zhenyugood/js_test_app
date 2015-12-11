var  Index = 0;
var HTMLEditer = function(){
  this.textSearch = document.getElementById("textSearch");
  this.myDiv = document.getElementById("myDiv");
  this.addButton = document.getElementById("addButton");
  this.textInput = document.getElementById("textInput");
   //call back functions are as fallowed
  
  this.clearMyInputText = function(){
    this.textInput.value = "";
  };
  
    this.addNewButton = function(myEditer){
    var myInputText = this.textInput.value;
    var newButton = document.createElement("button");
    var newText = document.createElement("input");
    newButton.id = "button"+Index;
    newButton.innerHTML ="delete";
    newText.type = "text";
    newText.id = "text"+Index;
    newText.value = myInputText;
    var li = document.createElement("li");
    li.id = "li"+Index;           
    this.myDiv.appendChild(li);
    li.appendChild(newButton);
    li.appendChild(newText);
    Index++;
    newButton.onclick=function(){
    li.parentNode.removeChild(li);
    };
    myEditer.clearMyInputText();
  };
  
  this.search = function(){
    var ListOfText =  myDiv.querySelectorAll("li>input");
    var reg=new RegExp(textSearch.value);
    for(var numInList=0;numInList<ListOfText.length;numInList++){
      if(reg.test(ListOfText[numInList].value)){
        ListOfText[numInList].parentElement.style.display="";
      }
      else ListOfText[numInList].parentElement.style.display="none";
    }
  }; 
};



function prepareEventHandlers() {
  var note = new Note();
  var myEditer = new  HTMLEditer();
  myEditer.addButton.onclick = function(){
  note.addingNewButton(myEditer,myEditer.addNewButton);
  };
 myEditer.textSearch.addEventListener("keydown",function(){
   note.searching(myEditer.search);
   });

}













window.onload = function() {
    prepareEventHandlers();

};  
