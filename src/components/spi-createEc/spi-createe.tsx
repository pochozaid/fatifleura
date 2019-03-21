import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { Formation } from '../../global/formation';
import { Enseignant } from '../../global/Enseignant';
import { UniteEnseignement } from '../../global/uniteEnseignement';


@Component({
  tag: 'spi-createe',
  styleUrl: 'spi-createe.scss'
})
export class SpiCreatee {

  @Prop() history: RouterHistory;
  codeEc: string;
  description: string;
  nbhCm: 0;
  nbhTd: 0;
  nbhTp: 0;
  designation: string;
  formations: Formation[];
  formation: any = {};
  enseignants: Enseignant[];
  enseignant: any = {};
  @State() uniteenseignements: UniteEnseignement[];
  uniteenseignement: any = {};


  back() {
    this.history.goBack();
  }


  creerUnite() {

    const description = this.description;
    const nbhCm = this.nbhCm;
    const nbhTd = this.nbhTd;
    const nbhTp = this.nbhTp;
    const designation = this.designation;


    const formation = this.formation;
    const enseignant = this.enseignant;
    const uniteenseignement = this.uniteenseignement;
    const id = {
      "codeFormation": this.formation.codeFormation,
      "codeUe": this.uniteenseignement.codeUe, "codeEc": this.codeEc
    }


    const payload = {
      id,
      designation,
      description,
      nbhCm,
      nbhTd,
      nbhTp,
      formation,
      enseignant,
      uniteenseignement
    };

    console.log(JSON.stringify(payload));
    fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/elementsconstitutifs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(() => { alert("L'élément constitutif a été bien crée!");
    location.href = '/ue/'+this.formation.codeFormation; }
).catch((error) => {
   alert('Erreur ! Veuillez réssayer plutard');
   console.error(error);
});
    
  }

  changeUE(code){
    fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/uniteEnseignement/Formation/"+code)
        .then(response => response.json())
        .then(data => {
          this.uniteenseignements = data || []; 
          console.log(this.uniteenseignements);
        })
  }
  

  componentWillLoad() {
    console.log(sessionStorage.getItem('role'));
    if(sessionStorage.getItem('role') == null){window.location.replace('/login');}
    return fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/formations")
      .then(response => response.json())
      .then(data => {
        this.formations = data || []; console.log(this.formations);
      }) &&
      fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/uniteEnseignement")
        .then(response => response.json())
        .then(data => {
          this.uniteenseignements = data || []; console.log(this.uniteenseignements);
        }) &&
      fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/enseignant")
        .then(response => response.json())
        .then(data => {
          this.enseignants = data || []; console.log(this.enseignants);
        });
  }


  render() {

    if (this.enseignants != null && this.formations != null && this.uniteenseignements != null) {
      return (
        <div>
        <spi-header/>
        <section class="section">
          <div class="container">

            <br /><br />

            <div class="columns">
              <div class="column is-6 is-offset-3">
                <div class="box" id="box">
                  <form>
                    <div class="field">
                      <label class="label" id="label">Code d'élément constitutif  </label>
                      <div class="control has-icons-left">
                        <input class="input" type="text"  placeholder="Entrer le code d'élément constitutif" name="code EC" value="" onChange={(e: any) => (this.codeEc = e.target.value)} required />
                        <span class="icon is-small is-left">
                          <i class="fas fa-key"></i>
                        </span>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label" id="label">Désignation </label>
                      <div class="control has-icons-left">
                        <input class="input" type="text"  placeholder="Entrer la designation" name="designation" value="" onChange={(e: any) => (this.designation = e.target.value)} required />
                        <span class="icon is-small is-left">
                          <i class="fas fa-pencil-alt"></i>
                        </span>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label" id="label">Description </label>
                      <div class="control has-icons-left">
                        <input class="input" type="text"  placeholder="Entrer la description" name="description" value="" onChange={(e: any) => (this.description = e.target.value)} required />
                        <span class="icon is-small is-left">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label" id="label">Nombre d'heures des séances de cours </label>
                      <div class="control has-icons-left">
                        <input class="input " type="text" placeholder="Entrer le nbhCm" name="nbhCm" value="" onChange={(e: any) => (this.nbhCm = e.target.value)} />
                        <span class="icon is-small is-left">
                          <i class="fas fa-clock"></i>
                        </span>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label " id="label">Nombre d'heures des séances de TD </label>
                      <div class="control has-icons-left">
                        <input class="input" type="text"  placeholder="nbhTd " name="nbhTd" value="" onChange={(e: any) => (this.nbhTd = e.target.value)} />
                        <span class="icon is-small is-left">
                          <i class="far fa-clock"></i>
                        </span>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label " id="label">Nombre d'heures des séances de Tp </label>
                      <div class="control has-icons-left">
                        <input class="input" type="text"  placeholder="nbhTp " name="nbhTp" value="" onChange={(e: any) => (this.nbhTp = e.target.value)} />
                        <span class="icon is-small is-left">
                          <i class="fas fa-clock"></i>
                        </span>
                      </div>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <label class="label" id="label"> Formation <span class="red"></span> </label>
                        <p class="control has-icons-left has-icons-right">
                          <div class="select is-info">
                            <select class="is-rounded is-info" required onInput={(e: any) => {this.formation.codeFormation = e.target.value; this.changeUE(this.formation.codeFormation)}}>
                              {this.formations.map(item =>
                                <option value={item.codeFormation} selected>{item.codeFormation}</option>
                              )}
                            </select>
                          </div>

                        </p>
                      </div>
                      <div class="field">
                        <label class="label" id="label"> Unite Enseignement <span class="red"></span> </label>
                        <p class="control has-icons-left has-icons-right">
                          <div class="select is-info">
                            <select class="is-rounded is-info" required onInput={(e: any) => (this.uniteenseignement.codeUe = e.target.value)}>
                              {this.uniteenseignements.map(item  =>
                                <option value={item.id.codeUe}>{item.id.codeUe}</option>
                              )}
                            </select>
                          </div>

                        </p>
                      </div>
                      <div class="field">
                        <label class="label" id="label"> Enseignant <span class="red"></span> </label>
                        <p class="control has-icons-left has-icons-right">
                          <div class="select is-info">
                            <select class="is-rounded is-info" required onInput={(e: any) => (this.enseignant.noEnseignant = e.target.value)}>
                              {this.enseignants.map(item =>
                                <option value={item.noEnseignant}>{item.nom} {item.prenom}</option>
                              )}
                            </select>
                          </div>

                        </p>
                        <br />
                        <br />
                      </div>
                    </div>
                 <div id="divregroupee"class="field is-grouped has-text-centered">
                    <div class="control">
                      <button type="submit" class="button is-dark" onClick={this.creerUnite.bind(this)}>
                        <span class="icon is-small">
                          <i class="fas fa-check"></i>
                        </span>
                        <span>Ajouter </span></button>
                    </div>
                    <div class="control">
                      <button type="reset" class="button is-dark" value="Reset">
                        <span class="icon">
                          <i class="fas fa-ban"></i></span>
                        <span>Annuler</span></button>
                    </div>
                    <div class="control">
                      <button type="submit" class="button is-dark" onClick={this.back.bind(this)}>
                        <span class="icon is-small">
                        <i class="fas fa-sync-alt"></i>
                        </span>
                        <span>Retourner </span></button>
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
    else {

      return ("couldn't render the data ");

    }
  }

}