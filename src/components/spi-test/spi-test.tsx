import { Component, State } from '@stencil/core';

@Component({
    tag: "spi-test",
    styleUrl: "spi-test.scss"
})
export class SpiTest {
    
    @State() posts: any = [];
    @State() posts2: any =[];

    componentWillLoad() {
        return fetch('http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/elementsconstitutifs/uniteEnseignement/CO')
        .then(response => response.json())
        .then(data => {
        this.posts = data;
        console.log(this.posts)
        });
        }


    render() {
        return (
          <div>
        <spi-header/>
            
            <section class="container">
            <div class="container has-text-centered">
                  
                  <h1 class="title">
                  <br></br>
                          Ec :
                      </h1>
                      </div>
            <br></br>
              <div class="columns features">
              <div class="columns is-desktop is-multiline">
              {this.posts.map(
                            (pst) =>
                <div class="column is-4">
                  <div class="card is-shady">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src="http://financeparticipative.org/wp-content/uploads/2018/06/Formations-FPF-e1529498115967.png" alt="Placeholder image" class="modal-button" data-target="modal-image2"/>
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <h4>{pst.id.codeEc}</h4>
                        
                        <div class="field is-grouped">
                        <p class="control">
                         
                        </p>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
                
                   
           </div>
            </div>
        </section></div>
        );
    }
}