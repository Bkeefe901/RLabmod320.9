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
