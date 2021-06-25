class Origin {

    constructor({id, name}) {
        this.id = id
        this.name = name
    }

    renderOrigin() {
        let dropDown = document.getElementById('dropdown')

        dropDown.innerHTML += `
        <option value=${this.id}>${this.name}</option>
        `
    }

}