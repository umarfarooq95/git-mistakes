export function CustomerDetail (props) {
    return <div>
        <h2>
        Customer Detail
            </h2>
            <h4>
            {props.match.params.customerName}
            </h4>
            <h4>
            {props.match.params.id}
            </h4>
    </div>
}