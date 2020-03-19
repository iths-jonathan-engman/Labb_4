class View {
    constructor() {
        this.div = document.getElementById("mvc")
        this.header = document.createElement("h1")
        this.header.innerHTML = "Our solarsystem!"
        this.div.appendChild(this.header)

        this.checkBtn = document.createElement("button")
        this.checkBtn.innerHTML = "4 of the closest planets to the sun?"
        this.div.appendChild(this.checkBtn)

        this.checkBtn4 = document.createElement("button")
        this.checkBtn4.innerHTML = "Remove one planet"
        this.div.appendChild(this.checkBtn4)

        this.checkBtn2 = document.createElement("button")
        this.checkBtn2.innerHTML = "Planet types"
        this.div.appendChild(this.checkBtn2)

        this.checkBtn3 = document.createElement("button")
        this.checkBtn3.innerHTML = "Most common atmospheric compositions"
        this.div.appendChild(this.checkBtn3)

        
        
    }
    check(planets, hi) {

    }
    
    fourPlanets(hi) {
        this.checkBtn.addEventListener("click", () => {
            for (let i = 0; i < hi.length; i++){

                this.po = document.createElement("p")
                this.po.innerHTML = JSON.stringify(hi[i].name)
                this.div.appendChild(this.po)
            }
        })
    }
    
    delPlanets(del) {
        this.checkBtn4.addEventListener("click", () => {
            for (let i = 0; i < del.length; i++){

                this.pew = document.createElement("p")
                this.pew.innerHTML = JSON.stringify(del[i].name)
                this.div.appendChild(this.pew)
                i++
            }
        })
    }

    mostCommon(threeComp) {
        this.checkBtn2.addEventListener("click", () => {

            this.ga = document.createElement("p")
            this.ga.innerHTML = "Gasplanets: " + threeComp.gas.length

            this.te = document.createElement("p")
            this.te.innerHTML = "Terrestrials: " + threeComp.terrestrial.length

            this.st = document.createElement("p")
            this.st.innerHTML = "Stars: " + threeComp.star.length

            this.div.appendChild(this.ga)
            this.div.appendChild(this.te)
            this.div.appendChild(this.st)
        })
    }

    atmos() {

    }
}

let newView = new View();
console.log(newView)