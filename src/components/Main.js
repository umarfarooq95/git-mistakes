import { Switch, Route } from 'react-router-dom'
import About from './About.js'
import {Customers} from './Customer'
import {Home} from './Home'
import {CustomerDetail} from './CustomerDetail'

export default function Main(){
    return (
        <div>
            <Switch>
                <Route path='/' exact  component={Home}/>
                <Route path='/customers' component={Customers}/>
                <Route path='/customer/:customerName/:id' component={CustomerDetail}/>
                <Route path='/about' component={About}/>
            </Switch>
        </div>
    )
}