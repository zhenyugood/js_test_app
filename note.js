function Note() {

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
}
