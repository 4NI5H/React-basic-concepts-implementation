import {Component} from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import {Redirect} from 'react-router-dom'

class Home extends Component{


    // slideIndex=1;
    // Index=1;
      Count=1;
      slideIndex = 1;
    plusSlides(n) { 
      this.showSlides(this.slideIndex += n);
    }

    showSlides(n) {
   
        var i;
        var slides = document.getElementsByClassName("mySlides");
    // console.log(slides.length)
    // console.log(slides[0])
        if (n > slides.length) {this.slideIndex = 1}    
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";   
        }
        slides[this.slideIndex-1].style.display = "block"
        // console.log(slides[this.slideIndex-1].style.display)

}
componentDidMount(){
console.log("did")
this.showSlides(1);
}

render(){ 

    return(
    <div className="middle">
                <div className="mySlides">
                <img src={img1} alt="Image1" className="image" ></img>
                </div>
                <div className="mySlides">
                <img src={img2} alt="Image2" className="image" ></img>
                </div>
                <div className="mySlides" >
                <img src={img3} alt="Image3" className="image"></img>
                </div>
                <button class="prev" onClick={()=>this.plusSlides(-1)}>&#10094;</button>
                <button class="next" onClick={()=>this.plusSlides(1)}>&#10095;</button>
           </div>)
}
   
}
export default Home