const customers = [
    {id : 1, name : 'A'},
    {id : 2, name : 'B'},
    {id : 3, name : 'C'},
    {id : 4, name : 'D'}
]


const styleObj = {
    padding : 10,
    backgroundColor : 'blue',
    color:'white',
    margin : 5,
    cursor : 'pointer'
}


const renderCustomers = (props) =>{
    return customers.map((customer,index) => {
        return <div key={index} style={styleObj} onClick={ (e) => {
            props.history.push(`/customer/${customer.name}/${customer.id}`)
            }}>
            {customer.name}
        </div>
    })
};

export function Customers (props) {
    return (
        <div>
            <h2>Customers</h2>
            {renderCustomers(props)}
        </div> 
    )
}