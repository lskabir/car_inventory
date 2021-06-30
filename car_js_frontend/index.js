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
            carDiv.innerHTML +=
            `
            <br>
            <form id='edit-form-${car.id}' class='edit-form'>
                <input class='form-control form-control-default' type='text' id='make' value=${car.make}><br>
                <input class='form-control form-control-default' type='text' id='model' value=${car.model}><br>
                <input class='form-control form-control-default' type='text' id='color' value=${car.color}><br>
                <input class='form-control form-control-default' type='number' id='year' value=${car.year}><br>
                <select id='edit-car-dropdown'></select><br><br>
                <button id='save-bttn' class='btn btn-outline-success' data-id=${car.id}>Save</button>
                <button id='cancel-bttn' class='btn btn-outline-secondary' data-id=${car.id}>Cancel</button>
            </form>
            `
            let saveBttn = document.getElementById('save-bttn')
            saveBttn.addEventListener('click', updateCar)

            let cancelBttn = document.getElementById('cancel-bttn')
            cancelBttn.addEventListener('click', cancelEdit)

            fetchOrigin('edit-car-dropdown', (dropdown) => {
                dropdown.value = car.origin_id;
            })
        })
}

function updateCar() {
    event.preventDefault()
    let formId = parseInt(event.target.dataset.id)

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
    .then(resp => resp.json())
    .then(car => {
        let c = new Car(car)
        c.renderCars()
    })
    let el = document.getElementById(`edit-form-${formId}`)
    el.remove()
}

function cancelEdit() {
    let cancelId = parseInt(event.target.dataset.id)
    let el = document.getElementById(`edit-form-${cancelId}`)
    el.remove()
}

function deleteCar() {
    let carId = parseInt(event.target.dataset.id)

    fetch(`${baseURL}/cars/${carId}`, {
        method: 'DELETE'
    })
    let el = document.getElementById(`car-container-${carId}`)
    el.remove()
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
