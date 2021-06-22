document.addEventListener('DOMContentLoaded', () => {
    fetchCars()
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