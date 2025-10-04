import Button from "./Button";

export default function ActionButton({ 
    children,
    type, 
    payload, 
    dispatch,
    canPress
}) {

    return (
        <Button
            onClick={() => dispatch({ type: type, payload: payload })}
            canPress={canPress}
        >
            {children}
        </Button>
    )

}