import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        
        
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url="/login" component="spi-lg" exact={true} />
              <stencil-route url="/list" component="spi-list" exact={true} />
              <stencil-route url="/listens" component="spi-listens" exact={true} />
              <stencil-route url="/profil" component="spi-profile" exact={true} />
              <stencil-route url="/profilenseignant" component="spi-profilenseignant" exact={true} />
              <stencil-route url="/test" component="spi-test" exact={true} />
              <stencil-route url="/create" component="uniteenseignement-add" exact={true} />
              <stencil-route url="/ue/:codeFormation" component="spi-ue" exact={true} />
              <stencil-route url="/ueens/:codeFormation" component="spi-ueens" exact={true} />
              <stencil-route url="/createe" component="spi-createe" exact={true} />
              <stencil-route url="/edit/:id" component="spi-edit" exact={true} />
              <stencil-route url="/ajout" component="form-add" exact={true} />
              <stencil-route url="/listq" component="spi-qualificatif" exact={true} />
              <stencil-route url="/listqens" component="spi-qualificatifens" exact={true} />
              <stencil-route url="/addq" component="qualificatif-add" exact={true} />
              <stencil-route url="/profilenseignant" component="spi-profilenseignant" exact={true} />
              
            </stencil-route-switch>
          </stencil-router>
        
      </div>
    );
  }
}
