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
        const carsDiv = document.getElementById('cars-container')
        const containerId = `car-container-${this.id}`;
        const carContainer = document.getElementById(containerId);
        const carInfoContent = `
            <img class='car-img' src='images/car.jpeg' alt='car'>
            <h3>${this.make}</h3>
            <p>Model: ${this.model}</p>
            <p>Color: ${this.color}</p>
            <p>Year: ${this.year}</p>
            <p>Origin: ${this.origin}</p><br>
            <button class='btn btn-lg btn-outline-light edit-bttn' data-id=${this.id} onclick='editCar(${this.id})'>Edit</button>
            <button id='deleteBttn' class='btn btn-lg btn-outline-danger delete-bttn' data-id=${this.id}>Delete</button>
        `;

        if (carContainer) {
            carContainer.innerHTML = carInfoContent;
            CarApi.deleteFunc()
        } else {
            carsDiv.innerHTML +=
                `<div class="car-container" id="${containerId}">${carInfoContent}</div>`
                CarApi.deleteFunc()
        }

    }
}