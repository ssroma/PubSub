import { PubSub } from "../pubSub.js";
import { createTemplate } from "../counters/template.js";

export class MovieCounter {
  constructor() {
    this.init();
    PubSub.subscribe("movieUpdates", this.updateListStatus);
  }

  init() {
    let countContainer = document.querySelector("#countModules");
    let template = createTemplate("Movies Counter", "Movie", "movieCounter");
    countContainer.appendChild(template);
  }

  updateListStatus(list) {
    let listStatus = document.querySelector(".movieCounter");
    listStatus.innerHTML = list ? list.length : 0;
  }
}
