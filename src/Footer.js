import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { List } from 'semantic-ui-react'


class Footer extends Component{
  render(){
    return(
<div className='footer'>

  <div className='footer-text'>
    <h4>FEEL FREE TO CONTACT ME</h4>
  </div>

  <div className='footer-logo'>
    <p>Blahhh....</p>
  </div>


   <div className='footer-child'>
    <List>
      <List.Item icon='phone' content='+91-8918752938' />
   <List.Item icon='marker' content='Mumbai, IN' />
   <List.Item
     icon='mail'
     content={<a href='mailto:saitejak196@gmail.com'>saitejak196@gmail.com</a>}
   />
   <List.Item
     icon='linkify'
     content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>}
   />
 </List>
</div>

</div>

    )
  }
}
export default Footer
