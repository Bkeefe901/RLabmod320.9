import Input from "./Input";
import Button from "./Button";

export default function AddTask({state, setState}){
    return(
        <>
            <Input state={state} setState={setState}/> <Button>Add</Button>
        </>
    )
}