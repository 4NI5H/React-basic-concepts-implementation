import {Component} from 'react'
import {Link} from 'react-router-dom'

class Logout extends Component{
    constructor(props)
    {
        super(props)
        localStorage.removeItem("token")

    }
    render()
    {
        return <div>
        <Link to="/" className="logout">Logout</Link>
        </div>
    }
   

}
export  default Logout