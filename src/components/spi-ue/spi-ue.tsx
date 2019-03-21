import { Component, State, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
    tag: "spi-ue",
    styleUrl: "spi-ue.scss"
})
export class SpiUe {
    
    @State() posts: any =[];
    @State() posts2: any =[];
    @Prop() match: MatchResults;

    componentWillLoad() {
        console.log(sessionStorage.getItem('role'));
        if(sessionStorage.getItem('role') == null){window.location.replace('/login');}
        fetch('http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/uniteEnseignement/Formation/'+this.match.params.codeFormation)
        .then(response => response.json())
        .then(data => {
        this.posts = data;
        console.log(this.posts)
        });
        
        }

        componentDidLoad() {
            this.modifyselection();
        }

    modifyselection( ) {   
        let rows = document.getElementsByTagName('tr');
        for (var i = 1; i < rows.length; i++) {
            let element = rows[i];
            element.onmouseover = () => element.classList.toggle('is-selected');
            element.onmouseout = () => element.classList.toggle('is-selected');
        }
    }

    deletefnct(pst){
        let url='http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/uniteEnseignement/supprimer'
        return fetch((url),{
        method:'DELETE',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pst),
          }).then(() => {alert("L'unité d'enseignement a été bien supprimée");
          location.href='/ue/'+this.match.params.codeFormation;
        }).catch((error) => {
            alert(' Erreur ! Veuillez réssayer plutard ');
            console.error(error);
          });
    }
    
    deletefoncion(tr){
        let url='http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/elementsconstitutifs'
        return fetch((url),{
        method:'DELETE',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tr),
          }).then(() => {alert("L'unité d'enseignement a été bien supprimée");
          location.href='/ue/'+this.match.params.codeFormation;
        }).catch((error) => {
            alert('Erreur ! Veuillez réssayer plutard ');
            console.error(error);
          });
    }

    
    getuebynum(num) {
        this.getue();
        let url = 'http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/elementsconstitutifs/uniteEnseignement/'
        return fetch(url + num) 
            .then(response => response.json())
            .then(data => {
                this.posts2 = data;
                console.log(this.posts2);
            });
        
    }

    getue(){
        let t1 = document.getElementById("md");
        t1.classList.toggle("is-active");
    }
    getens2(){
        let t1 = document.getElementById("md");
        t1.classList.remove("is-active");
        //t1.classList.toggle("is-clipped ");
    }

    render() {
        return (
            <div>
        <spi-header/>
            
            <section class="container">
            <div class="container has-text-centered">
                  
                  <h1 class="title">
                  <br></br><font color="white">Liste des unités d'enseignements :</font>
                      </h1>
                      </div>
            <br></br><br></br>
              <div class="columns features">
              <div class="columns is-desktop is-multiline">
              {this.posts.map(
                            (pst) =>
                <div class="column is-3">
                  <div class="card is-shady">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" class="modal-button" data-target="modal-image2"/>
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <h4>{pst.id.codeUe}</h4>
                        <p>{pst.designation}</p>
                        <div class="field is-grouped">
                        <p class="control">        
                       <a class="button is-dark" id="showModal"  onClick={() => this.getuebynum(pst.id.codeUe)}><i class="fab fa-elementor"></i>&nbsp;Element Constitutif</a>
                        </p>
                        <p class="control" >
                            <a class="button is-dark" onClick={() => this.deletefnct(pst)}><i class="fas fa-trash-alt"></i></a>
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
                <div class="modal" id="md">
                <div class="modal-background"></div>
                <div class="modal-content">
                  <div class="card-content">
                    <div class="content">
                    <div class="message-header">
                        <p id="p1"></p>
                    </div>
                            <table class="table is-responsive is-striped is-bordered ">
                                <thead>
                                    <tr>
                                        <th class="has-text-centered is-info is-bordered">Element Constitutif</th>
                                        <th class="has-text-centered is-info is-bordered">Description</th>
                                        <th class="has-text-centered is-info is-bordered" >Supprimer</th>
                                        
                                    </tr>
                                   
                                </thead>
                                <tbody>
                                {this.posts2.map(
                                    (tr) =>
                                <tr>
                                        <td class="has-text-centered">{tr.id.codeEc}</td>
                                        <td class="has-text-centered">{tr.description}</td>
                                        <td class="has-text-centered" onClick={() => this.deletefoncion(tr)}><i class="fas fa-trash-alt"></i></td>
                                    </tr>
                                    
                                )}
                                </tbody>
                            </table>
                    </div>
                  </div>
                </div><br></br>
                    <button class="button" id="showModal" onClick={() => this.getens2()}>Close</button>
                </div>
           </div>
            </div>
        </section></div>
        );
    }
}