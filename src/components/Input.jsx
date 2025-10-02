export default function Input({state, setState}) {

    function handleChange(e){
        setState(e.target.value);
    }

    return (
        <input
            type="text"
            placeholder="Add Task"
            value={state}
            onChange={handleChange}
            />)
}