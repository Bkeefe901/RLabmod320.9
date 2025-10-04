export default function Button({children, onClick, canPress}){
    return (
        canPress ? 
        <button onClick={onClick}  >{children}</button> : 
        <button disabled >{children}</button>
    )
}