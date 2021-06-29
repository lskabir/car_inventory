class Car {

    constructor({id, make, model, color, year, origin_id, origin}) {
        this.id = id
        this.make = make
        this.model = model
        this.color = color
        this.year = year
        this.origin_id = origin_id
        this.origin = origin.name
    }

    renderCars() {
        let carsDiv = document.getElementById('cars-container')

        carsDiv.innerHTML +=
        `
        <div class='car-container' id='car-container-${this.id}'>
        <h3>${this.make}</h3>
        <p>Model: ${this.model}</p>
        <p>Color: ${this.color}</p>
        <p>Year: ${this.year}</p>
        <p>Origin: ${this.origin}</p><br>
        <button class='edit-bttn' data-id=${this.id} onclick='editCar(${this.id})'>Edit</button>
        <button class='delete-bttn' data-id=${this.id} onclick='deleteCar()'>Delete</button>
        </div>
        `
    }

}