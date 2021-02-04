export default function UserDetails (props){
    return (
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                { props.age }
            </h4>
            <h4 className="bg-primary text-white text-center p-2">
                { props.name }
            </h4>
        </div>
    )
}