//  --IMPORT

import { getWebApi } from "./modules/global_function.js";

//  --VARIABLES

//  --EVENT LISTENER

//  --FUNCTION

function next(data) {
  data = getResults(data);
  let ul = document.getElementById("drivers-list");
  var newLI;
  for (const [key, value] of Object.entries(data)) {
    let task = value.Driver.code;
    newLI = document.createElement("li");
    newLI.appendChild(document.createTextNode(task));
    ul.appendChild(newLI);

    console.log(value.Driver.code);
  }
}

function getResults(data) {
  let results = data.MRData.RaceTable.Races[0].Results;
  return results;
}

//  --MAIN

// getWebApi("/api/f1/current/last/results", {}, next, null);
