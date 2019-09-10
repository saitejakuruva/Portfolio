import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import logo from './sai.PNG'
import {Link} from 'react-router-dom'
class Header extends Component{
  render(){
    return(
       <div className='navbar'>
       <div className='logo'>
       <img src={logo} className="App-logo" alt="logo" />
       </div>
       <div className='items'>
       <ol>
       <span >
        <Link to='/' style={{paddingLeft: 13, textDecoration: 'none'}}>About</Link>
       </span>
       <span>
        <Link to='/' style={{paddingLeft: 13, textDecoration: 'none'}}>Work</Link>
       </span>
       <span>
        <Link to='/' style={{paddingLeft: 13, textDecoration: 'none'}}>Portfolio</Link>
       </span>
       <span>
        <Link to='/' style={{paddingLeft: 13, textDecoration: 'none'}}>Contact</Link>
       </span>
       </ol>
       </div>

       </div>
    )
  }
}

export default Header
