class Controller {
    constructor(model, view) {

        this.model = model
        this.view = view

        this.result = this.model.getAllPlanets()
        this.view.check(this.result)

        this.one = this.model.closestPlanets()
        this.view.fourPlanets(this.one)

        this.two = this.model.planetType()
        this.view.mostCommon(this.two)

        this.three = this.model.atmosPheric()
        this.view.atmos(this.three)
    }
}

  let newController = new Controller(planetModel, newView)