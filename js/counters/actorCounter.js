import { PubSub } from "../pubSub.js";
import { createTemplate } from "../counters/template.js";

export class ActorCounter {
  constructor() {
    this.init();
    PubSub.subscribe("actorUpdates", this.updateListStatus);
  }

  init() {
    let countContainer = document.querySelector("#countModules");
    let template = createTemplate("Actors Counter", "Actor", "actorCounter");
    countContainer.appendChild(template);
  }

  updateListStatus(list) {
    let listStatus = document.querySelector(".actorCounter");
    listStatus.innerHTML = list ? list.length : 0;
  }
}
