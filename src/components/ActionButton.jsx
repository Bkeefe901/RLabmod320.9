import Button from "./Button";

export default function ActionButton({ 
    children,
    type, 
    payload, 
    dispatch,
    className
}) {

    return (
        <Button
            onClick={() => dispatch({ type: type, payload: payload })}
            className={className}
        >
            {children}
        </Button>
    )

}