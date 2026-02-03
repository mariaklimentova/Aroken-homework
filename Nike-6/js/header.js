export default class HeaderFixed {
  constructor(config) {
    this.headerTypes = config;
    this.header = document.querySelector(`.${this.headerTypes.HEADER}`);

    if (!this.header) {
      throw new Error("Header element is missing.");
    }

    this.initEvents();
  }

  initEvents() {
    window.addEventListener("scroll", this.updateFixedClass.bind(this));
  }

  updateFixedClass() {
    if (window.scrollY > 0) {
      this.header.classList.add(this.headerTypes.HEADER_FIXED);
    } else {
      this.header.classList.remove(this.headerTypes.HEADER_FIXED);
    }
  }

  removeFixedClass() {
    this.header.classList.remove(this.headerTypes.HEADER_FIXED);
  }
}
