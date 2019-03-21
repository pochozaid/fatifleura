
import { Component, State } from '@stencil/core';
import { Coupledequalificatif } from '../../global/Coupledequalificatif';

@Component({
    tag: 'spi-qualificatif',
    styleUrl: 'spi-qualificatif.scss',
})
export class SpiListCoupleDeQualificatif {

    @State() coupledequalificatifs: Coupledequalificatif[] = [];

    
    componentWillLoad() {
        console.log(sessionStorage.getItem('role'));
        if(sessionStorage.getItem('role') == null){window.location.replace('/login');}
        fetch('http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/qualificatif')
            .then(res => res.json())
            .then(res => this.coupledequalificatifs = res);
    }

    deleteQualificatif(idQualificatif: number) {   
        return fetch('http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/qualificatif/supprimerParid', {
            method: 'delete',
            headers: {
                Accept: "application/json, text/plain, /",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({  
                idQualificatif:  idQualificatif,
                              }),
        }).then(() => {
            alert("Le couple de qualificatif a été bien supprimé!");
            location.href = '/listq';
        }
        ).catch((error) => {
            alert(' Erreur ! Veuillez réssayer plutard !');
            console.error(error);
        });
    }



    render() {
        if (this.coupledequalificatifs != null) {
            return (
                <div>
        <spi-header/>
                <div class="container">
                <br></br><br></br>
                <h1 class="title">Liste des couples de qualificatifs: </h1>
               
                    <div class="columns">
                        <div class="columns is-desktop is-multiline">
                            {
                                this.coupledequalificatifs.map((item) => {
                                    return (
                                        <div class="card">
                                            <header class="card-header">
                                                <p class="card-header-title">
                                                    {item.idQualificatif}
                                                </p>
                                            </header>
                                            <div class="card-image">
                                                <figure class="image is-4by3">
                                                    <img src="https://images.pexels.com/photos/208494/pexels-photo-208494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                                                </figure>
                                            </div>
                                            <div class="card-content">
                                                <div class="content" id="contentmaxmin">
                                                    <span><pre>
                                                        <p id="max">Max : </p><b id="maxcontent">{item.maximal}</b> <br/>
                                                        <p id="min">Min : </p><b id="mincontent">{item.minimal}</b>
                                                    </pre></span>
                                                </div>
                                                <footer class="card-footer">
                                                    <a id="edit" class="card-footer-item" href={`/edit/${item.idQualificatif}`}>Modifier</a>
                                                    <button id="delete" class="card-footer-item" onClick={() => this.deleteQualificatif(item.idQualificatif)}>Supprimer</button>
                                                </footer>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div> </div>
                </div></div>
            );
        }
        else {
            return ("couldn't render the data ");

        }
    }

}