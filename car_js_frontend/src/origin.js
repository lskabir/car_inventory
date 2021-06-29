class Origin {
    constructor({id, name}, dropdownId) {
        this.id = id
        this.name = name
        this.dropDownId = dropdownId
    }

    renderOrigin() {
        let dropDown = document.getElementById(this.dropDownId);

        dropDown.innerHTML += `
            <option value=${this.id}>${this.name}</option>
        `
    }
}