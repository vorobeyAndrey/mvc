class App {
    constructor(selection) {
        this.elementApp = document.querySelector(selection)
        this.componentsByName = {}
    }

    addComponent(component) {
        this.componentsByName[component.name] = component
    }

    showComponent(name) {
        this.currentComponent = this.componentsByName[name]
        if (currentCompoent) {
            this.currentComponent.controller(this.currentComponent.model)
        }
    }
}