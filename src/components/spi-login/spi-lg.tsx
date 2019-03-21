import { Component, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
    tag: 'spi-lg',
    styleUrl: 'spi-lg.scss'
})
export class SpiLg {

  @State() loginConnection: String;
  @State() motPasse: String;
  @State() data: any =[] ;
  @State() var:String = null;
  @Prop() history: RouterHistory;
  Authentification(auth) {
    auth.preventDefault();



    const loginConnection = this.loginConnection;
    const motPasse = this.motPasse;
    const payload = {

      loginConnection,
      motPasse
    };
    fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/authentification/verificationLoginConnection", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then(function(response) {      
      return response.json();
    })
    .then((res)=> {
      this.data=res;
      sessionStorage.setItem('role', this.data.role);
      if(sessionStorage.getItem('role') == "administrateur"){
       this.history.replace('/profil');
      }
      else{
        this.history.replace('/profilenseignant');}
   })
   .catch((error) =>{
     console.log('Request failed', error);
     this.var = "Le mot de passe ou bien le login est incorrect";
   })
 }
  componentWillLoad() {
         
}

    
    render() {
        return (
          <div>
            <div>
          <spi-headere></spi-headere>
          </div>
        <section class="login is-fullheight">
      <div class="login-body">
        <div class="container v-middle">
          <div class="columns login-page">
              <div class="column is-5 login-sidebar is-hidden-mobile">
                <div class="login-gradient-background">
                  <h1>Se connecter</h1>
                </div>
           

              </div>
              <div class="column is-7 login-form-wrapper">
                
                <div class="column is-12 field-box">
                  <div class="column is-7 is-offset-1">
                    <h1 class="login-heading">Se connecter</h1>
                    <p class="login-subheading">Vous devez se connecter pour accéder.</p>
                    <form>
                      <div class="field">
                        <p class="control has-icons-left has-icons-right">
                          <input class="input " type="text" placeholder="Login" onInput={(e: any) => (this.loginConnection = e.target.value)} name="text"  required/>
                          <span class="icon is-left">
                            <i class="fa fa-envelope"></i>
                          </span>
                          <span class="icon is-small is-right">
                            <i class="fa fa-check"></i>
                          </span>
                        </p>
                      </div>
                      <div class="field">
                        <p class="control has-icons-left has-icons-right">
                          <input class="input " type="password" onInput={(e: any) => (this.motPasse = e.target.value)} placeholder="Mot de passe" name="password" required/>
                          <span class="icon is-left">
                            <i class="fa fa-lock"></i>
                          </span>
                          <span class="icon is-small is-right">
                            <i class="fa fa-eye"></i>
                          </span>
                        </p>
                       <br></br>
                      </div>
                      <div class="field is-grouped is-grouped-centered login-btn-group">
                        <p class="control">
                          <a class="login-btn" onClick={this.Authentification.bind(this)} >
                            Se connecter
                          </a>
                        </p>
                        
                      </div>
                      <div><font color='red'>
                      {this.var}</font></div>
                    </form> 
                  </div>
                </div>
              </div>
              
          </div>
        </div>
       
      </div>
  </section>
  </div>
        );
    }
}