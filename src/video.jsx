import { Component } from "react"

class Video extends Component{
    render(){
    return(
        <list>
            <ol className="video">
                <li> <h1>Hyderabad Fastest Food Delivery</h1></li>
                <li><video  width={600} autoPlay loop muted >
            <source src="src\assets\3196344-uhd_3840_2160_25fps.mp4" type="video/mp4"></source>
        </video></li>
            </ol>
        </list>
        
    );
}
}
export default Video