export default function TextInput({state, setState, placeHolder}){
    return(
        <input 
            type="text" 
            value={state}
            onChange={(e)=> setState(e.target.value)}
            placeholder={placeHolder}
        />
    )
}