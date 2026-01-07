export default function Card(props){
    return (
        <div className={`${props.cor || 'bg-amber-500'} rounded-md flex flex-col`}>
            <h1 className="text-white p-2 text-xl border-b-2">
                {props.title}
            </h1>
            {props.children}
        </div>
    )
}