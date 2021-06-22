class Car {

    constructor(id, make, model, color, year, originID) {
        this.id = id
        this.make = make
        this.model = model
        this.color = color
        this.year = year
        this.originID = originID
    }

    renderCars() {
        let carsDiv = document.getElementById('cars-container')

        carsDiv.innerHTML +=
        `
        <ul>
        <h2>${this.make}</h2>
        <li>Model: ${this.model}</li>
        <li>Color: ${this.color}</li>
        <li>Year: ${this.year}</li>
        </ul>
        `
    }

}