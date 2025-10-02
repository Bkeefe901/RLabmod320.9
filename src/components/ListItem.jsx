import { useState } from "react";
import ActionButton from "./ActionButton";


export default function ListItem({ li, dispatch }) {
  

  return (
    <>
      <h2>{li.todo}</h2>
      <div style={{ width: "100%", textAlign: "center", marginBottom: "25px" }}>
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