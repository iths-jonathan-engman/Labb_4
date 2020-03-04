class Controller {
    constructor(model, view) {

        this.model = model
        this.view = view

        this.result = this.model.getAllPlanets()
        this.view.check(this.result)
    }
}

  let newController = new Controller(planetModel, newView)