import {Component} from 'react';
import clogo from '../images/clogo.jpeg'
import {Link, Redirect} from 'react-router-dom'


class Head extends Component{
 
render()
{

if(this.props.val=="header")
    {return (
    <div className="top">
    <div className="left">
    <img className="photo" src={this.props.photo} />
    <Link to="Upload" className="upload">Upload Image</Link>
    <h2>{this.props.user}</h2>
    </div>
    <div className="htop">
    <h1>Welcome to your Profile!</h1>
    <Link to="/product"  className="productstyle">Product</Link>
    </div>
    <div className="right">
    
    <Link to="/" className="logout">Logout</Link>
    <Link to="/Update" className="update" >Update Profile</Link>  
    <img className="logo" src={clogo} alt="Logo" id="logo"/>
    </div> 
    </div>)
}
if(this.props.val=="footer")
    {
        return (
            <div className="footer">
            </div>
            
        )
    }
    if(this.props.val=="login")
    {
        return (
            <div className="login">
            <img className="logo" src={clogo} alt="cLogo" id="logo"/>
            </div>
        )
    }
}
}

export default Head