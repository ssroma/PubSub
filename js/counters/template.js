export function createTemplate(title, countName, className) {
  let template = document.querySelector("#movies-actors-count-module");
  let t = template.content.cloneNode(true);
  let countTitle = t.querySelector(".countTitle");
  countTitle.innerHTML = title;
  let span = t.querySelector("span").classList.add(className);
  let countsName = t.querySelector(".countsName");
  countsName.innerHTML = countName;
  return t;
}
