import { useState } from "react";
import ActionButton from "./ActionButton";


export default function ListItem({ li, dispatch }) {


  function handleChange(e){
    return !checked;
  }
  

  return (
    <>
      
      <div style={{ width: "100%", textAlign: "center", marginBottom: "25px", display: "flex" }}>
        <input type="checkbox" id={li.name}  onChange={handleChange} />
        <h2>{li.todo}</h2>
        <ActionButton
          type="edit"
          payload={{ id: li.id }}
          dispatch={dispatch}
          className="one-character"
        >
          Edit
        </ActionButton>
        <ActionButton
          type="delete"
          payload={{ id: li.id }}
          dispatch={dispatch}
          className="one-character"
        >
          Delete
        </ActionButton>
      </div>
    </>
  );
}


// checked={li.completed}