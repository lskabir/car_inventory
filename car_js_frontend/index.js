document.addEventListener('DOMContentLoaded', () => {
    fetchCars()
    createForm()
})

const  BASE_URL = 'http://localhost:3000'

function fetchCars() {
    fetch(`${BASE_URL}/cars`)
    .then(resp => resp.json())
    .then(cars => {
        for(const car of cars) {
            let c = new Car(car.id, car.make, car.model, car.color, car.year)
            c.renderCars()
        }
    })
}

    function createForm() {
        let carsFormDiv = document.getElementById('cars-form-container')
        carsFormDiv.innerHTML += 
        `
        <h3>Create New Car</h3>
        <form id='car-form'>
        <input type='text' id='make' placeholder='Make'><br>
        <input type='text' id='model' placeholder='Model'><br>
        <input type='text' id='color' placeholder='Color'><br>
        <input type='number' id='year' placeholder='Year'><br>
        <input type='text' id='originName' placeholder='Import/Domestic'><br><br>
        <input type='submit' value='Create Car'>
        </form>
        `
        carsFormDiv.addEventListener('submit', carFormSubmission)
        
    }

    function carFormSubmission(e) {
        e.preventDefault()
        let make = document.getElementById('make').value
        let model = document.getElementById('model').value
        let color = document.getElementById('color').value
        let year = document.getElementById('year').value
        let originName = document.getElementById('originName').value

        let car = {
            make: make,
            model: model,
            color: color,
            year: year,
            originName: originName
        }

        fetch(`${BASE_URL}/cars`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(resp => resp.json())
        .then(car => {
            let c = new Car(car.make, car.model, car.color, car.year, car.originName)
            c.renderCars()
        })
        document.getElementById('car-form').reset()

    }
