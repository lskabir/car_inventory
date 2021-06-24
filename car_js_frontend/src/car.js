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
        <h3>${this.make}</h3>
        <li>Model: ${this.model}</li>
        <li>Color: ${this.color}</li>
        <li>Year: ${this.year}</li><br>
        <button class='edit-bttn' data-id=${this.id} onclick='editCar()'>Edit</button>
        <button class='delete-bttn' data-id=${this.id} onclick='deleteCar()'>Delete</button>
        </ul>
        `
    }

}