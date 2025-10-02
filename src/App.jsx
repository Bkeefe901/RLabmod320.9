import { useReducer, useState } from 'react'
import './App.css'


// Components
import Header from './components/Header'
import TextInput from './components/TextInput';
import ActionButton from './components/ActionButton';
import PartyMember from './components/PartyMember';
import partyReducer from './reducers/partyReducer'




// List item basic values:
// {
//   id: Number( for filtering / deleting),
//     todo: String,
//       completed: Boolean,
// }


function App() {
  const [todo, setToDo] = useState("");
  const [party, dispatch] = useReducer(partyReducer, initialState);


  const partyList = party.map((li) => {
    return (
      <PartyMember key={li.todo} li={li} dispatch={dispatch} />

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
        {partyList}
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
