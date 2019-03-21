import { Component, Prop } from '@stencil/core';
import { Formation } from '../../global/formation';
import { Enseignant } from '../../global/Enseignant';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'uniteenseignement-add',
  styleUrl: 'uniteenseignement-add.scss'
})
export class Adduni {

  @Prop() history: RouterHistory;
  codeUe: string;
  description: string;
  designation: string;
  nbhCm: 0;
  nbhTd: 0;
  nbhTp: 0;
  semestre: string;
  pays: any;
  nationalities: any
  formations: Formation[] = [];
  formation: any = {};
  enseignants: Enseignant[] = [];
  enseignant: any = {};
  backk() {
    alert("l'unité d'enseignement a été bien crée");
    window.location.replace("/list"); // or we can use RouterHistory
  }
  creerUnite(u) {
    u.preventDefault();
    console.log("!");
    // codeUe = this.codeUe
    const description = this.description;
    const designation=this.designation;
    const nbhCm = this.nbhCm;
    const nbhTd = this.nbhTd;
    const nbhTp = this.nbhTp;
    const semestre = this.semestre;

    //const formations =this.formations;
    const formation = this.formation;
    const enseignant = this.enseignant;
    const id = {
      "codeFormation": this.formation.codeFormation,
      "codeUe": this.codeUe
    }
    // const enseignants =this.enseignants;


    const payload = {
      id,
      description,
      designation,
      nbhCm,
      nbhTd,
      nbhTp,
      semestre,
      formation,
      enseignant

    };

   
    console.log(JSON.stringify(payload));
    fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/uniteEnseignement/creer", {
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
  
  componentWillLoad() {
    console.log(sessionStorage.getItem('role'));
    if(sessionStorage.getItem('role') == null){window.location.replace('/login');}
    return fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/formations")
      .then(response => response.json())
      .then(data => {
        this.formations = data || []; console.log(this.formations);
      }) &&
      fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/enseignant")
        .then(response => response.json())
        .then(data => {
          this.enseignants = data || []; console.log(this.enseignants);
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
                    <label class="label" id="label">Code d'unité d'enseignement </label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input" type="text" placeholder="Entrer le code d'unité d'enseignement" name="code UE" value="" onChange={(e: any) => (this.codeUe = e.target.value)} />
                      <span class="icon is-small is-left"><i class="fas fa-key"></i></span>
                    </p>
                    </div>
                  </div>
                  <div class="field" id="label">
                    <label class="label" id="label">Description </label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input" type="text" placeholder="Entrer la description" name="description" value="" onChange={(e: any) => (this.description = e.target.value)} />
                      <span class="icon is-small is-left"><i class="fas fa-chalkboard"></i></span>
                    </p>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label" id="label">Designation </label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input" type="text" placeholder="Entrer la designation" name="designation" value="" onChange={(e: any) => (this.designation = e.target.value)} />
                      <span class="icon is-small is-left"><i class="fas fa-chalkboard"></i></span>
                    </p>
                    </div>
                  </div>


                  <div class="field-body">
                    <div class="field">
                      <label class="label" id="label"> Enseignant <span class="red"></span> </label>
                      <p class="control has-icons-left has-icons-right">
                        <div class="select is-info is-extra-small">
                          <span class="icon"> <i class="fas fa-user-tie"></i></span>

                          <select class="is-rounded is-info" required onInput={(e: any) => (this.enseignant.noEnseignant = e.target.value)}>
                            {this.enseignants.map(item =>
                              <option value={item.noEnseignant}>{item.nom}&nbsp;{item.prenom}</option>
                            )}
                          </select>
                        </div>

                      </p>
                    </div>
                    <div class="field">
                      <label class="label" id="label"> Formation <span class="red"></span> </label>
                      <p class="control has-icons-left has-icons-right">
                        <div class="select is-info is-extra-small">
                          <span class="icon"><i class="fas fa-book"></i></span>
                          <select class="is-info" required onInput={(e: any) => (this.formation.codeFormation = e.target.value)}>
                            {this.formations.map(item =>

                              <option value={item.codeFormation}>{item.codeFormation}</option>
                            )}
                          </select>
                        </div>

                      </p>
                    </div>

                  </div>
                  <br />

                  <div class="field">
                    <label class="label" id="label">Semestre</label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input" type="text" placeholder="Enter le semestre" name="semestre" value="" onChange={(e: any) => (this.semestre = e.target.value)} />
                    <span class="icon is-small is-left"><i class="fab fa-stripe-s"></i></span>
                    </p>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label" id="label">Nombre d'heure de Cours </label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input " type="text" placeholder="Entrer le nombre d'heure des cours" name="nbhCm" value="" onChange={(e: any) => (this.nbhCm = e.target.value)} />
                    <span class="icon is-small is-left"><i class="fas fa-clock"></i></span>
                   </p>

                    </div>
                  </div>

                  <div class="field">
                    <label class="label" id="label">Nombre d'heures de TD</label>
                    <div class="control">
                      <p class="control is-expanded has-icons-left">

                        <input class="input" type="text" placeholder="Entrer le nombre d'heures des travaux dirigés" name="nbhTd" value="" onChange={(e: any) => (this.nbhTd = e.target.value)} />
                    <span class="icon is-small is-left"><i class="fas fa-clock"></i></span>
                      </p>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label" id="label">Nombre d'heures de TP</label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input" type="text" placeholder="Enter le nombre d'heures des travaux pratiques" name="nbhTp" value="" onChange={(e: any) => (this.nbhTp = e.target.value)} />
                      <span class="icon is-small is-left"><i class="fas fa-clock"></i></span>
</p>
                    </div>
                  </div>

                  <br />
                  <div class="field is-grouped has-text-centered">
                    <div class="control">
                      <button type="submit" class="button is-info" id="button" onClick={this.creerUnite.bind(this)}>
                        <span class="icon">
                          <i class="fas fa-check"></i>                          </span>
                        <span>Ajouter </span></button>


                    </div>
                    <div class="control">

                      <button type="reset" class="button is-info " id="button"  value="Reset">
                        <span class="icon">
                          <i class="fas fa-ban"></i></span>
                        <span>Cancel</span></button>


                    </div>

                    <div class="control">
                      <button class="button is-info" id="button" onClick={()=>this.back()}>
                        <span class="icon"><i class="fas fa-undo"></i></span>
                        <span>Retour</span></button>
                    </div>


                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section></div>

    );
  }
}