//this is the code for view and submit event
var app =  new Vue({
    el: "#app",
    data: {
        infantry: 0,
        artillery: 0,
        engineer: 0,
        hussar: 0,
        army: null, //use this.army to get the inputted army
        armies: [] //use this.armies to store the result
    },
    methods: {
        
        split: function() {
            this.formArmy()
            //your code here
            let army1 = {};
            let army2 = {};
            //loop trough each values in object and attempt to divide
            for (key in this.army) {
                let regiments = this.army[key];
                if (regiments < 2) { //if impossible to divide
                    army1[key] = regiments;
                    army2[key] = 0;
                }
                else if (regiments % 2 === 0) { //if a type of regiments are even
                    army1[key] = regiments / 2;
                    army2[key] = regiments / 2;
                }
                else if (regiments % 2 !== 0) { //if the regiments numbered odd
                    
                    army1[key] = (regiments + 1) / 2;
                    army2[key] = (regiments - army1[key]);//army 2 get the remnants
                    
                }
                
            }
            let army2Sum = 0;
            for (key in army2) {
                army2Sum += army2[key];
            }
            this.armies = [army1];
            //push army2 if not all its units is 0
            if (army2Sum !== 0){
                this.armies.push(army2);
            }
            


        },
        //this is for constructing an army object based on input from the form
        formArmy: function() {
            let infantry = this.infantry;
            let artillery = this.artillery;
            let engineer = this.engineer;
            let hussar = this.hussar;
            this.army = {
                infantry,
                artillery,
                engineer,
                hussar
            }
           
        }
    }
})