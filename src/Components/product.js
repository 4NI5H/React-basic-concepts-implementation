import {Component} from 'react'
import {Link} from 'react-router-dom'

class Product extends Component{

render()
{
    return(
        <div>
        <div className="product">
        <p>Hey,Welcome to Product List</p>
        <Link to="/Create" className="links">Add Product</Link>
        <Link to="/edit" className="links">Edit Product</Link>
        <Link className="links">Delete Product</Link>
        </div>
        
        
        
        </div>

    )
}

}
export default Product