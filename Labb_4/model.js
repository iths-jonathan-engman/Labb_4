class Model {
    constructor() {

        this.planets = [
            { name: "Saturn", order: "6", type: "Gas planet", atmospheric_composition: ["H2", "He"], discovery: "Antiquity"},
            { name: "Venus", order: "2", type: "Terrestrial planet", atmospheric_composition: ["CO2", "N2", "SO2"], discovery: "Antiquity"},
            { name: "Jupiter", order: "5", type: "Gas planet", atmospheric_composition: ["H2", "He"], discovery: "Antiquity"},
            { name: "Mars", order: "4", type: "Terrestrial planet", atmospheric_composition: ["CO2", "N2", "Ar"], discovery: "Antiquity"},
            { name: "Mercury", order: "1", type: "Terrestrial planet", atmospheric_composition: ["He", "Na+", "P+"], discovery: "Antiquity"},
            { name: "Neptune", order: "8", type: "Gas planet", atmospheric_composition: ["H2", "He", "CH4"], discovery: "Urbain Le Verrier, 1846"},
            { name: "Earth", order: "3", type: "Terrestrial planet", atmospheric_composition: ["N2", "O2", "Ar", "CO2"], discovery: "Antiquity"},
            { name: "Sun", order: "0", type: "Star", atmospheric_composition: ["H", "He", "O", "C", "Fe", "S"], discovery: "Antiquity"},
            { name: "Uranus", order: "7", type: "Gas planet", atmospheric_composition: ["H2", "He", "CH4"], discovery: "William Herschel, 1781"},   
        ]    
    }
    getAllPlanets() {
        this.planets.sort(function(a, b) {
            return a.order - b.order
        })
        return this.planets
    }
    
    closestPlanets() {
        let hi = this.planets.slice(1, 5)
        return hi
    }

    deletePlanets() {
        let del = this.planets.splice(1, 1)
        return del
    }
    
    planetType() {
        
        let gas = this.planets.filter(planets => planets.type == "Gas planet")
        let terrestrial = this.planets.filter(planets => planets.type == "Terrestrial planet")
        let star = this.planets.filter(planets => planets.type == "Star")
        
        return {
        gas,
        terrestrial,
        star
        }
    }

    atmosPheric() {
        let obj = {}
        let test 
        for (let i = 0; i < this.planets.length; i++) {
            this.planets[i].atmospheric_composition.forEach((element) => {
                
                if (obj.hasOwnProperty(element)) {
                    obj[element] ++
                } else {
                    obj[element] = 1
                } 
            })
            
            test = Object.entries(obj).sort(function(a, b) {
                
               test = (b[1] - a[1])
               
               return test
            })
        }
        return test
    }

}

let planetModel = new Model()
console.log(planetModel.getAllPlanets())
console.log(planetModel.closestPlanets())
console.log(planetModel.planetType())
console.log(planetModel.atmosPheric())
console.log(planetModel.deletePlanets())