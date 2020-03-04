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

        this.checkBtn3 = document.createElement("button")
        this.checkBtn3.innerHTML = "Most common atmospheric compositions"
        this.div.appendChild(this.checkBtn3)

        
    }
    check(planets) {
        this.checkBtn.addEventListener("click", () => {
            for (let i = 1; i < planets.length; i++) {
                if (planets[i].order < 5) {
                    if (planets[i].name == "Sun") {
                        return
                    } else {
                        
                        this.po = document.createElement("p")
                        this.po.innerHTML = planets[i].name
                        this.div.appendChild(this.po)
                    }
                    
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

        this.checkBtn3.addEventListener("click", () => {
            for (let i = 0; i < planets.length; i++) {
                if ()
                this.pc = document.createElement("p")
                this.pc.innerHTML = planets[i].atmospheric_composition
                this.div.appendChild(this.pc)
            }
        })
    }
}

let newView = new View();
console.log(newView)