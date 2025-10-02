import { useReducer, useState } from 'react'
import './App.css'


// Components
import Header from './components/Header'
import TextInput from './components/TextInput';
import ActionButton from './components/ActionButton';
import ListItem from './components/ListItem';
import listReducer from './reducers/listReducer'




// List item basic values:
// {
//   id: Number( for filtering / deleting),
//     todo: String,
//       completed: Boolean,
// }


function App() {
  const [todo, setToDo] = useState("");
  const [items, dispatch] = useReducer(listReducer, initialState);
  //const [party, dispatch] = useReducer(partyReducer, initialState);


  const itemsList = items.map((li) => {
    return (
      <ListItem key={li.todo} li={li} dispatch={dispatch} />
      // <PartyMember key={li.todo} li={li} dispatch={dispatch} />

    )
  })


  return (
    <>
      <Header />
      <div>
        <TextInput state={todo} setState={setToDo} />
        <ActionButton
          type="addToDo"
          payload={{ todo }}
          dispatch={dispatch}
        >
          Add
        </ActionButton>
      </div>
      <div>
        {itemsList}
      </div>
    </>
  );
}

const initialState = [
  {
    id: 1,
    todo: "Clean apartment",
    completed: false,
  },
  {
    id: 2,
    todo: "Buy Groceries",
    completed: false,
  }
];


export default App
