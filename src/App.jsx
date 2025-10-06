import { useReducer, useState } from 'react'
import './App.css'


// Components
import Header from './components/Header'
import TextInput from './components/TextInput';
import ActionButton from './components/ActionButton';
import ListItem from './components/ListItem';
import listReducer from './reducers/listReducer';
import EditField from './components/EditField';



function App() {
  const [todo, setToDo] = useState("");
  const [items, dispatch] = useReducer(listReducer, initialState);



  const itemsList = items.map((li) => { 
    if(li.edit){ // Checks if the edit value is true when mapping over the items state (if the edit button was clicked), and if so delivers the EditField component instead of ListItem
      return(
        <EditField key={li.todo} li={li} dispatch={dispatch} />
      )
    } else{

      return (
      <ListItem 
        key={li.todo} 
        li={li} 
        dispatch={dispatch} 
        />
    )
    }
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
          canPress={true}
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
    edit: false
  },
  {
    id: 0,
    todo: "Buy Groceries",
    completed: false,
    edit: false
  }
];


export default App
