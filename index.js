// create a class named `Car`. This class will create objects that have three properties - make, model, year


class Car{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
  //class should also have the following methods: honk (console logs "BEEP BEEP!"), 
  honk(){
      console.log("BEEP BEEP!")
  }
  
    //performMaintence(uses the setTimeout function to log "maintence complete" to console after 3 seconds")
    performMaintence(){
        setTimeout(function() {
            console.log('maintenance complete');
          }, 3000)
    }
   

  
}



