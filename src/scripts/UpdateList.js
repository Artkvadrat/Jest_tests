class UpdateList {
  constructor() {
    this.wrapper = document.createElement('div');
  }

  updateList(data) {
    this.wrapper.innerHTML += '<ul>';
    data.results.map((item) => {
      this.wrapper.innerHTML += `<li>${this.createPerson(item)}</li>`;
    });

    this.wrapper.innerHTML += '</ul>';
    document.body.appendChild(this.wrapper);
  }

  createPerson({ name, birth_year, gender }) {
    return `${name} - ${birth_year} - ${gender}`;
  }
}

export default new UpdateList();
