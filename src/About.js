import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import img from './personal.JPG'



class About extends Component{
  render(){
    return(
     <div className='about-main'>
     <div className='col-lg-6'>
     <img src={img} className='about-img' alt="Personal Image" />
     </div>
     <div className='col-lg-6'>
     <h1>About me</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     </div>

     </div>
    )
  }
}

export default About