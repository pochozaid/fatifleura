import { Component } from "@stencil/core";

@Component({
  tag: "spi-headere",
  styleUrl: "spi-headere.scss"
})
export class SpiHeadere {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <header>
      <div class="hero-head">
      <nav class="navbar">
          <div class="container">
              <div class="navbar-brand">
                  <a class="navbar-item" href="../">
                      <img src="https://i.ibb.co/Kx5N2ZQ/logo2.png" alt="Logo"></img>
                  </a>
                  <span class="navbar-burger burger" data-target="navbarMenu">
                      <span></span>
                      <span></span>
                      <span></span>
                  </span>
              </div>
              
          </div>
      </nav>
      </div>
      </header>
    );
  }
}
