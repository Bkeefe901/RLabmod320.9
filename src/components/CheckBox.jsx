export default function CheckBox({className, id, onChange}){
    return (
    <input className={className} type="checkbox" id={id}  onChange={onChange} />
)

}