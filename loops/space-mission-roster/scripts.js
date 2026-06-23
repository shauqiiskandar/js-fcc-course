const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3,
};

function addCrewMember(crew, astronaut) {
 for (const member of crew) { // directly iterates over array elements, not keys
    if (member.id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }
  crew.push(astronaut);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
]; 

for (const astronaut of remainingCrew) {
  addCrewMember(squad, astronaut);
}

function swapCrewMembers(crew, fromIndex, toIndex) {
  if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
    console.log("Invalid crew indices");
    return;
  }
  const updatedCrew = crew.slice();
  //swap the astronauts at fromIndex and toIndex using splice in one line technique: copy[i] = copy.splice(j, 1, copy[i])[0];
  // The flow:
  // Before: copy[i] = A, copy[j] = B
  // copy.splice(j, 1, copy[i]) — at position j: remove B, insert A. Now copy[j] = A. Returns ["B"] (the removed B).
  // splicedArray[0] = B (the old value from j).
  // copy[i] = B — now copy[i] = B.
  // After: copy[i] = B, copy[j] = A. Swapped.
  updatedCrew[toIndex] = updatedCrew.splice(fromIndex, 1, updatedCrew[toIndex])[0];

  //Use a for loop to log the name of every astronaut in the updatedCrew array. After the loop, return the updatedCrew array to complete your swapCrewMembers function.
  // for (let i = 0; i < updatedCrew.length; i++) {
  //   console.log(updatedCrew[i].name);
  // }
  
  return updatedCrew; 
}

//swap the positions of two astronauts in your squad array, specifically members at indices 2 and 5. Use your swapCrewMembers() function to perform the swap and store the result in a new variable named updatedSquad
const updatedSquad = swapCrewMembers(squad, 2, 5);

function getEVAReadyCrew(crew) {
  let eligible = [];
  for (const member of crew) {
    if (member.isEVAEligible) {
      eligible.push(member);
    }
  }
  sortByPriorityDescending(eligible);
  return eligible;    
}

//This function should directly sort the input crew array by priority descending, use two nested for loops. This function should not return anything.
function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length -1; i++) {
    for (let j = 0; j < crew.length -1 - i; j++) {
      if (crew[j].priority < crew[j+1].priority) {
        const temp = crew[j];
        crew[j] = crew[j+1];
        crew[j+1] = temp;
      }
    }
  }

}

// sortByPriorityDescending(remainingCrew);
// console.log(remainingCrew);

const EVAReadySquad = getEVAReadyCrew(updatedSquad);

//Mission control has requested a new function for breaking down a crew into chunks of variable sizes. Create an empty function named chunkCrew that accepts two parameters, crew and size.
function chunkCrew(crew, size) {
  //should validate your input. Specifically, if size is less than 1, you should log "Chunk size must be >= 1" to the console and then call return
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }
  //To complete the chunkCrew function, you must:
// create an array named chunks
// loop through crew in steps of size size, creating and pushing chunks from crew into chunks using slice()
// return the chunks array
  let chunks = [];
  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size));
  }
  return chunks;
}

const EVAChunks = chunkCrew(EVAReadySquad, 3);
console.log(EVAChunks);

/* Use a nested for loop to iterate through EVAChunks and log the name of every astronaut in each chunk. Be sure to:
use EVAChunks as your root array
log Chunk ${i+1}: between chunks */

// for (let i = 0; i < EVAChunks.length; i++) {
//   console.log(`Chunk ${i+1}:`);
//   for (const member of EVAChunks[i]) {
//     console.log(member.name);
//   }
// }

// vs
//? 2 nested for loops using traditional index based loop not the for of loop
// for (let i = 0; i < EVAChunks.length; i++) {
//   console.log(`Chunk ${i+1}:`);
//   for (let j = 0; j < EVAChunks[i].length; j++) {
//     console.log(EVAChunks[i][j].name);
//   }
// }

function printCrewSummary(crew) {
  // reate a shallow copy of the input crew array using slice() and assign it to a variable named sorted.
  const sorted = crew.slice();
  sortByPriorityDescending(sorted);
  for (const member of sorted) {
    console.log(member.name);
  }
}

printCrewSummary(updatedSquad)