import { Component } from '@stencil/core';



@Component({
  tag: 'spi-profile',
  styleUrl: 'spi-profile.scss'
})
export class SpiProfile {
  componentWillLoad(){
    console.log(sessionStorage.getItem('role'));
    if(sessionStorage.getItem('role') == null){window.location.replace('/login');}
  }
  render() {
    return (
      <div>
        <spi-header/>
      <div>
        <section class="hero welcome">
       
          <div class="hero-body">
            <div class="container">
            <div class="center">
              <aside class="profile-card" >

                <header>
    
                  <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
                  <h1>Mr. Hervé Jean-Pierre</h1><br></br>
                  <h2>Administrateur de l'application SPI-ADM.</h2>
                </header>
                <div class="profile-bio">
                  <ul class="profile-social-links">
                    <li>  <a href="www.facebook.com"> <i class="fab fa-facebook fa-1x"> </i></a></li>
                    <li>  <a href="www.facebook.com"> <i class="fab fa-linkedin-in fa-1x "> </i></a></li>
                    <li>  <a href="www.facebook.com"> <i class="fab fa-github fa-1x">     </i></a></li></ul>
                </div>
              </aside>
              </div>
            
            </div>
            
      
<div class="columns">

<div class="column is-one-quarter">
      <div class="card">
        <div class="color">
          <div class="card-content">
            <p class="title">
              Formations
             </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a href="/list"><i class="fas fa-eye fa-2x" id="color"></i></a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                <span>
                  <a href="/ajout"><i class="fas fa-plus fa-2x" id="color"></i></a>
                </span>
              </span>
            </p>
          </footer>
        </div>
      </div>
</div>


<div class="column is-one-quarter">
      <div class="card">
        <div class="color">
          <div class="card-content">
            <p class="title">
              Unités d'enseignements
           </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a href="/list"><i class="fas fa-eye fa-2x" id="color"></i></a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                <span>
                  <a href="/create"><i class="fas fa-plus fa-2x" id="color"></i></a>
                </span>
              </span>
            </p>
          </footer>
        </div>
      </div>
      </div>


<div class="column is-one-quarter">
      <div class="card">
        <div class="color">
          <div class="card-content">
            <p class="title">
              Eléments constitutifs
           </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a href="/list"><i class="fas fa-eye fa-2x" id="color"></i></a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                <span>
                  <a href="/createe"><i class="fas fa-plus fa-2x" id="color"></i></a>
                </span>
              </span>
            </p>
          </footer>
        </div>
    </div>
    </div>



        <div class="column is-one-quarter">
      <div class="card">
        <div class="color">
          <div class="card-content">
            <p class="title">
              Qualificatifs
           </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a href="/listq"><i class="fas fa-eye fa-2x" id="color"></i></a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                <span>
                  <a href="/addq"><i class="fas fa-plus fa-2x"id="color"></i></a>
                </span>
              </span>
            </p>
          </footer>
        </div>
      </div>
      
 </div>
      <script async type="text/javascript" src="../js/bulma.js"></script>
    </div>
    </div>
    </section>
  </div></div>
  );
}

}