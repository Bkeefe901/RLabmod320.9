import ActionButton from "./ActionButton";

export default function EditField({li, dispatch}) {


    return (
        <div>
            <input type="checkbox" id={li.id} />
            <input type="text" placeholder={li.todo}/>
            <ActionButton
                type="save"
                payload={{id: li.id}}
                dispatch={dispatch}
                canPress={true}
            >
                Save
            </ActionButton>
        </div>
    )
}

// Maybe I could have another useState on the app page (ie. isEdit) and if isEdit is true then for the itemsList that maps over the items and add <ListItem /> for each one, it could instead return <EditField /> 
//  // I think i would need to add a field to the items objects (like isEdit) so when the edit button is pushed the listReducer function would change the isEdit for that ListItem to true.