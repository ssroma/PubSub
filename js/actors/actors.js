import { PubSub } from "../pubSub.js";

export class Actors {
  constructor() {
    this.actorsList = this.actorsList || [];
    this.containerUl = document.querySelector(".actorUls");
    this.templateLi = HTMLElement;
    PubSub.subscribe("actorAdded", this.actorAdded.bind(this));
  }

  actorAdded(name) {
    if (this.actorsList.indexOf(name) === -1) {
      // Create a li and add to the ul in the actors module.
      let li = this.createTemplate();
      let content = document.createTextNode(name);
      li.insertBefore(content, li.childNodes[0]);
      this.containerUl.appendChild(li);
      // Update list and update subscribed modules.
      this.actorsList.push(name);
      PubSub.publish("actorUpdates", this.actorsList);
    } else {
      // Send a msg of error to actorform module.
      PubSub.publish("actorEntryDuplicated", name);
    }
  }

  createTemplate() {
    let template = document.querySelector("#moviesActorsLi");
    let t = template.content.cloneNode(true);
    let li = t.querySelector("li");
    let span = li.querySelector("span");
    span.addEventListener("click", (evt) => {
      this.removeLi(evt);
    });
    return li;
  }

  removeLi(elem) {
    let li = elem.target.closest("li");
    let text = li.firstChild.textContent;
    this.actorsList = this.actorsList.filter((n) => {
      return n !== text;
    });
    li.parentElement.removeChild(li);
    // Inform actorCountount module.
    PubSub.publish("actorUpdates", this.actorsList);
  }
}
