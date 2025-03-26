class Dropdown {
  constructor(dropdown) {
    // dropdown is the container of the dropdown itself.
    this.dropdown = dropdown;
    this.toggleButton = this.dropdown.querySelector(".dropdown-toggle");
    this.dropdownMenu = this.dropdown.querySelector(".dropdown-menu");

    this.toggleButton.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggle();
    });

    document.addEventListener("click", () => this.hide());
  }

  toggle() {
    this.dropdownMenu.classList.toggle("show");
  }

  hide() {
    this.dropdownMenu.classList.remove("show");
  }
}

document
  .querySelectorAll(".dropdown")
  .forEach((dropdown) => new Dropdown(dropdown));
