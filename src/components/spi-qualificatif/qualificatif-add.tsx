import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'qualificatif-add',
  styleUrl: 'qualificatif-add.scss'
})
export class AddQualificatif {

  

  @Prop() history: RouterHistory;
  minimal: string;
  maximal: string;
  backk() {
    alert('le couple qualificatif a été bien crée!');
    window.location.replace("/listq"); // or we can use RouterHistory
  }
  creerQual(q) {
    q.preventDefault();
    console.log("!");
    // codeUe = this.codeUe
    const minimal = this.minimal;
    const maximal=this.maximal;
    



    const payload = {
     
      minimal,
      maximal,
     

    };

   
    console.log(JSON.stringify(payload));
    fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/qualificatif/creerQualificatif", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then((response) => response.json())
      .then((responseJson) => {
        this.backk();
        return responseJson.enseignants;
      })
      .catch((error) => {
        console.error(error);
      });
      
  }

  
  back() {
    this.history.goBack();
  }

  render() {
    return (
      <div>
        <spi-header/>
      <section class="section">
        <div class="container">
          <div class="section-heading">

          </div>
          <br /><br />

          <div class="columns">
            <div class="column is-6 is-offset-3">
              <div class="box" id="box">
                <form>

                  <div class="field">
                    <label class="label" id="label">Minimal </label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input" type="text" placeholder="Entrer le qualificatif minimal" name="Qualificatif minimal" value="" onChange={(e: any) => (this.minimal = e.target.value)} />
                      <span class="icon is-small is-left"><i class="fas fa-minus-square"></i></span>
                    </p>
                    </div>
                  </div>
                  <div class="field" id="label">
                    <label class="label" id="label">Maximal </label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input" type="text" placeholder="Entrer le qualificatif maximal" name="Qualificatif maximal" value="" onChange={(e: any) => (this.maximal = e.target.value)} />
                      <span class="icon is-small is-left"><i class="fas fa-plus-square"></i></span>
                    </p>
                    </div>
                  </div>
                 

                  <br />
                  <div class="field is-grouped has-text-centered">
                    <div class="control">
                      <button type="submit" class="button is-info" id="button" onClick={this.creerQual.bind(this)}>
                        <span class="icon">
                          <i class="fas fa-check"id="icon"></i>                          </span>
                        <span id="span">Ajouter </span></button>


                    </div>
                    <div class="control">

                      <button type="reset" class="button is-info " id="button"  value="Reset">
                        <span class="icon">
                          <i class="fas fa-ban" id="icon"></i></span>
                        <span id="span">Cancel</span></button>


                    </div>

                    <div class="control">
                      <button class="button is-info" id="button" onClick={() => this.back()}>
                        <span class="icon" id="icon"><i class="fas fa-undo"></i></span>
                        <span id="span">Retour</span></button>
                    </div>


                  </div>

                </form>
                <br/>
               
              </div>
            </div>
          </div>
          <br/><br/><br/> <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/>
        </div>
      </section></div>

    );
  }
}