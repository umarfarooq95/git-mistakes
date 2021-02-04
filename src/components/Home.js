import {Link} from 'react-router-dom'
import User from '../User';

export function Home () {
    return (
        <div>
<h2>Home</h2>

<ul>
    <li>
        <Link to='/'>Home</Link>
    </li>
    <li>
    <Link to='/customers'>Customers</Link>
    </li>
    <li>
    <Link to='/about'>About</Link>
    </li>
</ul>

<User/>
        </div>
    )
}