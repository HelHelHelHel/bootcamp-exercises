


class SwStar {
  constructor(name, height, mass, eye_color, gender) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.eye_color = eye_color;
    this.gender = gender;

  }


  render() {
    this.element = document.createElement('div');
    this.element.className = `sw`;
    this.element.innerHTML = (
      `<span class="sw__name">${this.name}</span>
      <span class="sw__height">${this.height}</span>
      <span class="sw__mass">${this.mass}</span>
      <span class="sw__eye_color">${this.eye_color}</span>
      <span class="sw__gender">${this.gender}</span>
      `
    )
    this.update();
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }

  update() {
    const nameElm = this.element.querySelector('.sw__name');
    nameElm.textContent = this.name;
    const heightElm = this.element.querySelector('.sw__height');
    heightElm.textContent = this.height;
    const massElm = this.element.querySelector('.sw__mass');
    massElm.textContent = this.mass;
    const eye_colorElm = this.element.querySelector('.sw__eye_color');
    eye_colorElm.textContent = this.eye_color;
    const genderElm = this.element.querySelector('.sw__gender');
    genderElm.textContent = this.gender;

  }

}

