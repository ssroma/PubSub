import { PubSub } from "../pubSub.js";
import { Validations } from "../validation.js";

export const MovieForm = {
  init() {
    this.getFormValue();
    PubSub.subscribe("entryDuplicated", this.entryDuplicated);
  },

  getFormValue: () => {
    let btnMovie = document.querySelector(".btn-movie");
    btnMovie.addEventListener("click", (evt) => {
      evt.preventDefault();
      let input = evt.target.previousElementSibling;
      if (input.value != null && input.value != "") {
        PubSub.publish("movieAdded", input.value);
        Validations.clearFields(input);
      } else {
        Validations.addErrorsInInput(input);
        Validations.removeErrorsOfInput(input);
      }
    });
  },

  entryDuplicated: (entry) => {
    let input = document.querySelector("#moviesInput");
    input.placeholder = `${entry} already exist.`;
    Validations.removeErrorsOfInput(input);
  },
};
