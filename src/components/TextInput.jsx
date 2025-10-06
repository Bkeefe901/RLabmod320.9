export default function TextInput({state, setState, placeHolder}){

    return(
        <input 
            className="addInput"
            type="text" 
            value={state}
            onChange={(e)=> setState(e.target.value)}
        />
    )
}