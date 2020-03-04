class View {
    constructor() {
        this.div = document.getElementById("mvc")
        this.header = document.createElement("h1")
        this.header.innerHTML = "Our solarsystem!"
        this.div.appendChild(this.header)

        this.checkBtn = document.createElement("button")
        this.checkBtn.innerHTML = "4 of the closest planets to the sun?"
        this.div.appendChild(this.checkBtn)

        this.checkBtn2 = document.createElement("button")
        this.checkBtn2.innerHTML = "Planet types"
        this.div.appendChild(this.checkBtn2)

        
    }
    check(planets) {
        this.checkBtn.addEventListener("click", () => {
            for (let i = 1; i < planets.length; i++) {
                if (planets[i].order < 4) {
                    
                    this.po = document.createElement("p")
                    this.po.innerHTML = planets[i].name
                    this.div.appendChild(this.po)
                }
            }
        })
        
        this.checkBtn2.addEventListener("click", () => {
            for (let i = 0; i < planets.length; i++) {
                
                this.pt = document.createElement("p")
                this.pt.innerHTML = planets[i].type
                this.div.appendChild(this.pt)
            }
        })
    }
}

let newView = new View();
console.log(newView)