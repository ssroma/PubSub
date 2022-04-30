import { PubSub } from "./pubSub.js";

//Counters
import { MovieCounter } from "./counters/movieCounter.js";
const movieCount = new MovieCounter();
import { ActorCounter } from "./counters/actorCounter.js";
const actorCount = new ActorCounter();
// Movies
import { MovieForm } from "./movies/movieForm.js";
import { Movies } from "./movies/movies.js";
MovieForm.init();
Movies.init();

// Actores
import { ActorForm } from "./actors/actorForm.js";
import { Actors } from "./actors/actors.js";
const actorForm = new ActorForm();
const actor = new Actors();

console.log(PubSub.events);
