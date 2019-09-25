import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import img from './personal.JPG'
import { Button, Icon } from 'semantic-ui-react'






class About extends Component{
  render(){

    return(
      <div>
     <div className='about-main'>
     <div className='col-lg-6'>
     <img src={img} className='about-img' alt="Personal Image" />
     </div>
     <div className='col-lg-6'>
     <h1>About me</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     <div className='skills-list'>
     <ul>
    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li> Fusce sed orci eu dui malesuada accumsan.</li>
     <li>Phasellus vitae tellus quis arcu finibus faucibus.</li>
     <li>Vivamus nec velit quis mi convallis malesuada.</li>
     </ul>
     </div>
     <div className='social-links'>
    <a href='https://twitter.com/techietrustee'> <Button color='twitter'>
     <Icon name='twitter' /> Twitter
      </Button></a>
  <a href='https://www.linkedin.com/in/saiteja-kuruva-634809112/'>  <Button color='linkedin'>
      <Icon name='linkedin'/> LinkedIn
    </Button></a>
    <a href='https://github.com/saitejakuruva'>  <Button color='github'>
        <Icon name='github'/> GitHub
      </Button></a>
  </div>
     </div>
     </div>

  </div>
    )
  }
}

export default About
