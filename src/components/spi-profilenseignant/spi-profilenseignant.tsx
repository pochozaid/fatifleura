import { Component} from '@stencil/core';




@Component({
  tag: 'spi-profilenseignant',
  styleUrl: 'spi-profilenseignant.scss'
})
export class SpiProfileEnseignant {
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
    
                  <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&fbclid=IwAR0sKXgr8hlE854nzODuWhEwRMmNXTrjAvS8Ji4CyoMcKtNtS2tsd3A89SI"></img>
                  <h1>Mr philippe</h1><br></br>
                  <h2></h2>
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
                <a href="/listens"><i class="fas fa-eye fa-2x" id="color"></i></a>
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
                <a href="/listens"><i class="fas fa-eye fa-2x" id="color"></i></a>
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
                <a href="/listens"><i class="fas fa-eye fa-2x" id="color"></i></a>
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
          
          </footer>
        </div>
      </div>
      
 </div>
      <script async type="text/javascript" src="../js/bulma.js"></script>
    </div>
    </div>
    </section>
    </div>
  </div>

    );
  }

}