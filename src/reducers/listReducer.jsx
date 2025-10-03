export default function reducer(state, { type, payload: { todo, id } }) {
  switch (type) {
    case "addToDo": {
      if (todo === ""){
        return state;
      }

      let toDoExists = false;
      state.forEach((e) => {
        if(e.todo == todo){
          alert(
            `The todo: ${todo} is already in your list`
          )
          toDoExists = true;
        }
      });
      let i = state.length;

      if (toDoExists) return state;
      return [{
        id: i,
        todo,
        completed:false
       }, 
      ...state
      ]
    }
    case "checked": {
      let otherItems = state.filter((item) => item.id != id);
      let checkedItem = state.filter((item) => item.id == id);
      checkedItem[0].completed = true;
      // console.log(checkedItem.id);
      // Realized I need to figure out how to change the 'completed' value of the 'checked' item and return it to a new state object with all the other state objects (cant edit in place).
      // return [...checkedItem, ...otherItems];
      return [...checkedItem, ...otherItems];
    }
    case "delete": {
      
    }
    default: {
      throw new Error();
    }
  }
}







// export default function reducer(state, { type, payload: { name, step } }) {
//   switch (type) {
//     case "add_adventurer": {
//       if (name === "") {
//         return state;
//       }

//       let hasThisName = false;
//       state.forEach((e) => {
//         if (e.name === name) {
//           alert(
//             `There is already a ${name} in your party.
// Differentiate them somehow!`
//           );
//           hasThisName = true;
//         }
//       });

//       if (hasThisName) return state;
//       return [{ name: name, health: 100 }, ...state];
//     }
//     case "remove_adventurer": {
//       return state.filter((s) => s.name !== name);
//     }
//     case "increment_health": {
//       return state.map((s) => {
//         if (s.name === name) {
//           let newHealth = s.health + step;
//           newHealth = newHealth > 100 ? 100 : newHealth;

//           return {
//             ...s,
//             health: newHealth
//           };
//         } else return s;
//       });
//     }
//     case "decrement_health": {
//       const newState = state.map((s) => {
//         if (s.name === name) {
//           let newHealth = s.health - step;
//           newHealth = newHealth < 0 ? 0 : newHealth;

//           return {
//             ...s,
//             health: newHealth
//           };
//         } else return s;
//       });

//       const filteredNewState = newState.filter((s) => s.health !== 0);
//       if (newState.length !== filteredNewState.length) {
//         alert(`${name} has retired from adventuring...`);
//       }

//       return filteredNewState;
//     }
//     default: {
//       throw Error("Unknown Action: " + type);
//     }
//   }
// }