import Button from "./Button";

export default function ActionButton({ 
    children,
    type, 
    payload, 
    dispatch,
    className,
    canPress
}) {

    return (
        <Button
            onClick={() => dispatch({ type: type, payload: payload })}
            className={className}
            canPress={canPress}
        >
            {children}
        </Button>
    )

}