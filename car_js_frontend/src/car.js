class Car {

    constructor({id, make, model, color, year, origin_id}) {
        this.id = id
        this.make = make
        this.model = model
        this.color = color
        this.year = year
        this.origin_id = origin_id
    }

    renderCars() {
        let carsDiv = document.getElementById('cars-container')

        carsDiv.innerHTML +=
        `
        <h3>${this.make}</h3>
        <p>Model: ${this.model}</p>
        <p>Color: ${this.color}</p>
        <p>Year: ${this.year}</p>
        <p>Origin: ${this.origin_id}</p><br>
        <button class='edit-bttn' data-id=${this.id} onclick='editCar()'>Edit</button>
        <button class='delete-bttn' data-id=${this.id} onclick='deleteCar()'>Delete</button>
        `
    }

}