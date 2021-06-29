const baseURL = 'http://localhost:3000'
let updating = false;

document.addEventListener('DOMContentLoaded', () => {
    CarApi.fetchCars()
    CarApi.createCar()
    fetchOrigin('dropdown')
})

function editCar(id) {
    if (updating) {
        return
    }

    updating = true;

    fetch(`${baseURL}/cars/${id}`)
        .then(resp => resp.json())
        .then(car => {
            let carDiv = document.getElementById(`car-container-${id}`)
            carDiv.innerHTML =
            `
            <br>
            <form>
                <input type='text' id='make' value=${car.make}><br>
                <input type='text' id='model' value=${car.model}><br>
                <input type='text' id='color' value=${car.color}><br>
                <input type='number' id='year' value=${car.year}><br>
                <select id='edit-car-dropdown'></select><br>
                <input type='submit' data-id=${car.id} onclick='updateCar()'>
                <button id='cancel' onclick='cancelEdit()'>Cancel</button>
            </form>
            `

            fetchOrigin('edit-car-dropdown', (dropdown) => {
                dropdown.value = car.origin_id;
            })
        })
}

function updateCar() {
    let formId = parseInt(event.target.dataset.id)
    event.preventDefault()
    let make = document.getElementById('make').value
    let model = document.getElementById('model').value
    let color = document.getElementById('color').value
    let year = document.getElementById('year').value
    let origin_id = parseInt(document.getElementById('edit-car-dropdown').value)

    let car = {
        make: make,
        model: model,
        color: color,
        year: year,
        origin_id: origin_id
    }

    fetch(`${baseURL}/cars/${formId}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'Application/json',
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(car)
    })
    
    this.location.reload()
}

function cancelEdit() {
    event.preventDefault()
    this.location.reload()
}

function deleteCar() {
    let carId = parseInt(event.target.dataset.id)

    fetch(`${baseURL}/cars/${carId}`, {
        method: 'DELETE'
    })

    this.location.reload()
}

function fetchOrigin(dropDownId, callback = () => {}) {
    fetch(`${baseURL}/origins`)
        .then(resp => resp.json())
        .then(origins => {
            for (const origin of origins) {
                let o = new Origin(origin, dropDownId)
                o.renderOrigin()
            }

            callback(document.getElementById(dropDownId));
        })
}
