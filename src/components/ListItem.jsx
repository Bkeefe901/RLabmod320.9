import { useState } from "react";
import ActionButton from "./ActionButton";


export default function ListItem({ li, dispatch }) {
const [canPress, setCanPress] = useState(false);

  function handleChange(e){
    // return console.log(e.target.checked);
    if(e.target.checked){
      setCanPress(true);
      return dispatch({type: "checked", payload: {id: e.target.id} });
    }else{
      setCanPress(false);
      return dispatch({type: "unchecked", payload: {id: e.target.id}});
    }
   
  }
  

  return (
    <>
      
      <div style={{ width: "100%", textAlign: "center", marginBottom: "25px", display: "flex" }}>
        <input type="checkbox" id={li.id}  onChange={handleChange} />
        <h2>{li.todo}</h2>
        <ActionButton
          type="edit"
          payload={{ id: li.id }}
          dispatch={dispatch}
          className="one-character"
          canPress={true}
        >
          Edit
        </ActionButton>
        <ActionButton
          type="delete"
          payload={{ id: li.id }}
          dispatch={dispatch}
          className="one-character"
          canPress={canPress}
        >
          Delete
        </ActionButton>
      </div>
    </>
  );
}


// checked={li.completed}