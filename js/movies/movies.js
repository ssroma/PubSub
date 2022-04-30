import { PubSub } from "../pubSub.js";

export const Movies = {
  movieList: [],
  containerUl: HTMLElement,
  templateLi: HTMLElement,

  init: function () {
    PubSub.subscribe("movieAdded", this.movieAdded);
    this.containerUl = document.querySelector(".movieUls");
  },

  movieAdded: function (name) {
    if (Movies.movieList.indexOf(name) === -1) {
      // Create a li and add to the ul in the movies module.
      let li = Movies.createTemplate();
      let content = document.createTextNode(name);
      li.insertBefore(content, li.childNodes[0]);
      Movies.containerUl.appendChild(li);
      // Update list and update subscribed modules.
      Movies.movieList.push(name);
      PubSub.publish("movieUpdates", Movies.movieList);
    } else {
      // Send a msg of error to movies form module.
      console.log(` ${name} already exit.`);
      PubSub.publish("entryDuplicated", name);
    }
  },

  createTemplate: function () {
    let template = document.querySelector("#moviesActorsLi");
    let t = template.content.cloneNode(true);
    let li = t.querySelector("li");
    let span = li.querySelector("span");
    span.addEventListener("click", (evt) => {
      this.removeLi(evt);
    });
    return li;
  },

  removeLi: (elem) => {
    let li = elem.target.closest("li");
    let text = li.firstChild.textContent;
    console.log(text);
    Movies.movieList = Movies.movieList.filter((n) => {
      return n !== text;
    });
    li.parentElement.removeChild(li);
    // Inform movie count module.
    PubSub.publish("movieUpdates", Movies.movieList);
  },
};
