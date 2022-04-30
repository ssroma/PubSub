import { PubSub } from "./pubSub.js";

export const Validations = {

    clearFields : element => {
        element.value = "";
    },

    addErrorsInInput : element => {
        element.classList.add('error');
        element.placeholder = "Can't be blank!";
    },

    removeErrorsOfInput : element => {
        setTimeout(() => {
            element.classList.remove('error');
            element.placeholder = "";
        }, 1500);
    },

    duplicateEntryErro: (entry, ) => {
        PubSub.publish("entryDuplicated", entry);
    }
}