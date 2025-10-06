export default function reducer(state, { type, payload: { todo, id, save } }) {
  switch (type) {
    case "addToDo": {
      if (todo === "") {
        return state;
      }

      let toDoExists = false;
      state.forEach((item) => {
        if (item.todo.toLowerCase() == todo.toLowerCase()) {
          alert(
            `The todo: ${todo} is already in your list`
          )
          toDoExists = true;
        }
      });

      // let i = state.length;
      let i = new Date();
      if (toDoExists) return state;
      return [{
        id: i,
        todo,
        completed: false,
        edit: false
      },
      ...state
      ]
    }
    case "edit": {
      let otherItems = state.filter((item) => item.id != id);
      let checkedItem = state.filter((item) => item.id == id);
      checkedItem[0].edit = true;
      let newState = [...checkedItem, ...otherItems];
      newState.sort((a, b) => b.id - a.id);

      return newState;

    }
    case "checked": {
      let otherItems = state.filter((item) => item.id != id);
      let checkedItem = state.filter((item) => item.id == id);
      checkedItem[0].completed = true;
      let newState = [...checkedItem, ...otherItems];
      newState.sort((a, b) => b.id - a.id);

      return newState;
    }
    // I tried to create a controller function for the checked and unchecked since the code is essientally exactly the same. But kept getting bugs,
    // Will try to figure out what was going wrong for the future so I can practice D.R.Y.

    case "unchecked": {
      let otherItems = state.filter((item) => item.id != id);
      let checkedItem = state.filter((item) => item.id == id);
      checkedItem[0].completed = false;
      let newState = [...checkedItem, ...otherItems];
      newState.sort((a, b) => b.id - a.id);

      return newState;

    }
    case "save": {
      let otherItems = state.filter((item) => item.id != id);
      let editItem = state.filter((item) => item.id == id);

      let savedItem = {
        id: editItem[0].id,
        todo: save,
        completed: false,
        edit: false
      }

      let newState = [savedItem, ...otherItems];
      newState.sort((a, b) => b.id - a.id);

      return newState;


    }
    case "delete": {
      let newList = state.filter((item) => item.id != id);
      return newList;

    }
    default: {
      throw new Error("Error - Forbidden Action");
    }
  }
}




