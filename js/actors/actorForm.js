// Validation Erros.
import { PubSub } from "../pubSub.js";
import { Validations } from "../validation.js";

export class ActorForm {
  constructor() {
    this.getFormValue();
    PubSub.subscribe("entryDuplicated", this.entryDuplicated.bind(this));
  }

  getFormValue() {
    let actorBtn = document.querySelector(".btn-actor");
    actorBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      let input = evt.target.previousElementSibling;
      if (input.value != null && input.value != "") {
        PubSub.publish("actorAdded", input.value);
        Validations.clearFields(input);
      } else {
        Validations.addErrorsInInput(input);
        Validations.removeErrorsOfInput(input);
      }
    });
  }

  entryDuplicated(entry) {
    let input = document.querySelector("#actorInput");
    input.placeholder = `${entry} already exist.`;
    Validations.removeErrorsOfInput(input);
  }
}
