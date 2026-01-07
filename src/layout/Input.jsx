export default function Input(props){
    return (
        <input
            type={props.type}
            className="w-[96%] bg-white p-2 rounded-md block m-auto"
            value={props.value}
            onChange={props.onChange}
        />
    )
}