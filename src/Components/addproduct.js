import {Component} from 'react'

class AddProduct extends Component{

    render()
    {
        return(
            <div>
            <h3>Enter Product Details</h3>
            <form className="Form" >
            <input className="Input" type ="text" placeholder="Product Name" name="name"/>
            <input className="Input" type ="text" placeholder="Product Description" name="description"/>
            <input className="Input" type ="text" placeholder="Product Price" name="price"/>
            <input className="Input" type ="text" placeholder="Currency (ex: for India put INR)" name="currency"/>
            <button className="Button">Submit</button>
            </form>

            </div>
        )
    }




}
export default AddProduct