import ActionButton from "./ActionButton";
import TextInput from "./TextInput";
import { useState } from "react";

export default function EditField({li, dispatch}) {
    const [save, setSave] = useState(li.todo);


    return (
        <div>
            <input type="checkbox" id={li.id} />
            <TextInput state={save} setState={setSave} />
            <ActionButton
                type="save"
                payload={{id: li.id, todo: li.todo, save}}
                dispatch={dispatch}
                canPress={true}
            >
                Save
            </ActionButton>
        </div>
    )
}

// The action button needs the payload of the state 'save' but i think it also needs the li.id atleast.
// The TextInput needs to be able to take a placeHolder prop I think set = li.todo or maybe I can find a better way so that it is not just a placeholder


// input type="text" placeholder={li.todo} state={li.todo} setSate={setSave}