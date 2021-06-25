const baseURL = 'http://localhost:3000'

document.addEventListener('DOMContentLoaded', () => {
    CarApi.fetchCars()
    CarApi.createCar()
    fetchOrigin()
    // CarApi.deleteCar()
})


    // function editCar() {
    //     // let carId = parseInt(event.target.dataset.id)
    //     // fetch(`${BASE_URL}/cars/${carId}`, {
    //     //     method: 'PATCH',
    //     // })
    // }

    function deleteCar() {
        let carId = parseInt(event.target.dataset.id)

        fetch(`${baseURL}/cars/${carId}`, {
            method: 'DELETE'
        })

        this.location.reload()
    }

    function fetchOrigin() {
        fetch(`${baseURL}/origins`)
        .then(resp => resp.json())
        .then(origins => {
            for (const origin of origins) {
                let o = new Origin(origin)
                o.renderOrigin()
            }
        })
    }
