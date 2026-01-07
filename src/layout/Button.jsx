export default function Button(props){
    return(
        <button
            className="w-[96%] block m-auto mt-auto mb-2 py-1 rounded-md text-white text-xl bg-black cursor-pointer"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}