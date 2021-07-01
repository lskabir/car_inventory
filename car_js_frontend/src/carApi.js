class CarApi {

    static BASE_URL = 'http://localhost:3000/cars'

    static fetchCars() {
        fetch(this.BASE_URL)
        .then(resp => resp.json())
        .then(cars => {
            for(const car of cars) {
                let c = new Car(car)
                c.renderCars()
            }
        })
    }

    static deleteFunc() {
        const deleteBttns = document.querySelectorAll('#deleteBttn')
        for (const deleteBttn of deleteBttns){
            deleteBttn.addEventListener('click', deleteCar)
        }
    }

    static createCar() {
        let carsFormDiv = document.getElementById('cars-form-container')
        carsFormDiv.innerHTML += 
        `
        <h3>Add New Car To The Inventory</h3>
        <form id='car-form'>
        <input class='form-control form-control-default' type='text' id='make' placeholder='Make'><br>
        <input class='form-control form-control-default' type='text' id='model' placeholder='Model'><br>
        <input class='form-control form-control-default' type='text' id='color' placeholder='Color'><br>
        <input class='form-control form-control-default' type='number' id='year' placeholder='Year'><br>

        <span>Origin: <select name='origin' id='dropdown'></select></span><br><br>
        <button class='btn btn-lg btn-outline-dark'>Add Car</button>
        </form>
        `
        carsFormDiv.addEventListener('submit', (e) => {
            e.preventDefault()
            
            let make = document.getElementById('make').value
            let model = document.getElementById('model').value
            let color = document.getElementById('color').value
            let year = document.getElementById('year').value
            let origin_id = parseInt(document.getElementById('dropdown').value)
    
            let car = {
                make: make,
                model: model,
                color: color,
                year: year,
                origin_id: origin_id
            }

            fetch(this.BASE_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            })
            .then(resp => resp.json())
            .then(car => {
                const name = origins[car.origin_id];
                car.origin = { name };
                
                let c = new Car(car)
                c.renderCars()
            })
            document.getElementById('car-form').reset()
        })
    }

}