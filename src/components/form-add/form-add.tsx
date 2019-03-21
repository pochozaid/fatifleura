import { Component, Prop } from "@stencil/core";
import { MatchResults, RouterHistory } from "@stencil/router";
@Component({
  tag: "form-add",
  styleUrl: "form-add.scss"
})
export class FormAdd {
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  componentWillLoad(){
    console.log(sessionStorage.getItem('role'));
    if(sessionStorage.getItem('role') == null){window.location.replace('/login');}
  }
  render() {
    return (
      <div>
        <spi-header/>
      <section class="section">
      <div class="container">
      <div class="section-heading">
       
      </div>
      <br></br>
        <form-form history={this.history} is-edit-mode />
      </div>
      </section></div>
    );
  }
}
