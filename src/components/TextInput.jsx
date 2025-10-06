export default function TextInput({state, setState}){

    return(
        <input 
            className="addInput"
            type="text" 
            value={state}
            onChange={(e)=> setState(e.target.value)}
        />
    )
}